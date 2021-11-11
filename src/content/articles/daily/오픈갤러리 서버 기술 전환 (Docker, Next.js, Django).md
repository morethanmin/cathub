---
title: 오픈갤러리 서버 기술 전환 (Docker, Next.js, Django)
description: 기술 전환 과정
category: daily
createdAt: "2021-11-04"
---

## 배경

**Django FullStack**으로 서비스를 운영하고 있지만, 서비스의 규모가 커지고(기존 서비스 고도화 및 CC페이지 신설), 스택이 노후화 됨에 따라 기술 전환을 결정하게 됨. 이에따라 기존의 **Django**를 **Django Rest Framework**를 전환해 API server로 활용하고, Next.js를 사용해 Frontend server를 구축할 예정입니다., 이에 따라AWS에서도 **Elastic beanstalk**를 사용하고 있지만 이를 **Elastic Container Service**로 전환하고자 합니다.

## 목표

지금 서비스하고 있는 Django FullStack은 점진적으로 **Django Rest Framework** 로 전환하여 API서버의 역할을 하게 될 예정. (하지만 현재에는 기존 서비스는 현행을 유지하고, 새로운 프로젝트를 위한 프론트 서버 추가와 신설페이지에 대한 API로만 사용 할듯.)

---

하나의 컨테이너에서 서비스를 모두 관리하는 것을 목표로 한다.

**Nginx**에서, 이하의 URL로 접근할 경우 리버스 프록시를 통해 기존 **Django**가 돌아가고 있는 api server port로 넘겨줍니다.

- /api

**Nginx**에서, 이하의 URL로 접근할 경우 리버스 프록시를 통해 기존 **Next.js**가 돌아가고 있는 port로 넘겨줍니다.

- /

## 기술

> 확정 된 스팩이 아니기에 언제든지 변경될 수 있음

- AWS : Elastic Container Service
- Docker : 이하의 컨테이너를 갖고 있다.
  - Nginx (web server)
  - Next.js **frontend server(신규 프론트 서버)**
    - SWR (for data fetch)
    - Recoil (for state management)
    - Sass (Module CSS)
    - .....
  - Django (wsgi application) **api server(기존서비스)**
    - Gunicorn (wsgi server)

## 구현

> 우선 local에서 구현해보고 dockerize 해볼 예정입니다.

### Local

#### Nginx

servers directory에 opengallery 파일 생성.

```nginx
server {
        listen 3030;
        server_name 127.0.0.1;

        location = /favicon.ico { access_log off; log_not_found off; }


        location /static {
                alias /Users/jade/projects/projectfolder/projectname/static;
        }

	location / {
         	rewrite ^/cc/(.*)$ /$1 break;
		proxy_pass http://localhost:4000;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $host;
        }
	location /api/ {
        		proxy_pass http://localhost:5000;
        }

}
```

#### Django

설정해둔 virtualenv(또는 자신의 python 개발환경)에서 gunicorn을 설치하고 `gunicorn --bind 0:5000 config.wsgi:application` 를 입력하면 wsgi server가 실행됩니다.

#### Next.js

create-next-app을 통해 next프로젝트를 생성했습니다. 이를 `npm run build` 후, `npm run start를` 통해 `node server`가 실행됩니다.

local에서의 동작은 확인하였습니다. 이제 dockerize해보겠습니다.

### Docker

여러 개의 컨테이너를 다루게 될 것이기에 Docker Compose를 사용합니다. (도커 컴포즈는 도커 실행 시 복잡한 설정을 쉽게 관리하기 위해 YAML 파일에 정의하는 툴입니다.)

YAML파일 작성 방법에 대해서는 따로 작성하겠습니다.

**docker-compose.yml**

```yml
version: "3"

services:
  # WS
  nginx:
    container_name: nginx
    image: nginx
    restart: unless-stopped
    volumes:
      # 가져온 nginx 이미지에 config 적용
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/sites/opengallery:/etc/nginx/sites/opengallery
    depends_on:
      # 두 컨테이너가 실행되고 난 후 nginx 작동을 위함
      - frontend
      - backend
    ports:
      - 3030:3030
    command: 'bash -c ''while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g "daemon off;"'''

  # Next
  frontend:
    container_name: frontend
    build:
      context: ./frontend/
      dockerfile: Dockerfile
    volumes:
      # 변경되는 소스코드가 반영되기 위함
      - ./frontend:/frontend
      # local에서 개발하기 위함
    ports:
      - "4000:4000"
    command: bash -c "npm run dev"

  # Django
  backend:
    container_name: backend
    build:
      context: ./backend/
      dockerfile: Dockerfile
    volumes:
      - ./backend:/backend
      # local에서 개발하기 위함
    ports:
      - "5000:5000"
    command: bash -c "python manage.py runserver 0.0.0.0:5000"
```

로컬 또는 외부(docker client라고 칭합니다.)에서 3030 포트로 접근할 경우, docker server의 Nginx가 돌아가고 있는 3030 포트로 포트포워딩을 시켜주고 Nginx에서 request에 맞는 response를 내뱉게 됩니다. 이제 각각의 Dockerfile을 만들어보겠습니다.

#### Nginx

```nginx
upstream frontend {
    server frontend:4000;
}

upstream backend {
    server backend:5000;
}

server {
        listen 3001;
        server_name localhost;

	    location /cc/ {
         	rewrite ^/cc/(.*)$ /$1 break;
            proxy_pass http://frontend;
            proxy_set_header Host $host:$server_port;
            proxy_set_header X-Forwarded-Host $server_name;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        location /_next/ {
            proxy_pass http://frontend;
            proxy_set_header Host $host:$server_port;
            proxy_set_header X-Forwarded-Host $server_name;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	        alias /_next;
        }
	    location / {
            proxy_pass http://backend;
            proxy_set_header Host $host:$server_port;
            proxy_set_header X-Forwarded-Host $server_name;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}
```

#### Django

**dockerfile**

```dockerfile
## 기본 이미지를 python3.9 로 설정
FROM python:3.9

# 환경 변수 설정
ENV DJANGO_SETTINGS_MODULE config.settings.local
ENV PYTHONUNBUFFERED 1

# backend 폴더 생성
RUN mkdir -p /backend
WORKDIR /backend

# COPY: 개발환경에 설정에 필요한 파일을 /backend 경로에 추가 및 설치
COPY requirements /backend/requirements
RUN pip install -r requirements/local.txt
```

#### Next.js

**dockerfile**

```dockerfile
# 기본 이미지를 node:12 로 설정
FROM node:12

# frontend 폴더 생성
RUN mkdir -p /frontend
WORKDIR /frontend

# COPY: 개발환경에 설정에 필요한 파일을 /frontend 경로에 추가 및 설치
COPY package*.json /frontend/
RUN npm install
```

해당 docker-compose를 통해 docker-compose up -d --build입력 시 정상적으로 동작하는 것을 확인하였습니다. 하지만 DB를 docker에서 설치해주지 않아 실제 접속은 해보지 못하였습니다. 이에 대한 해결책은 크게 두가지로 생각됩니다.

- docker에서 postgres 이미지를 build/run하여 반영하는 방법.
- docker에서 test-server db 정보를 환경변수로 넘겨주는 방법.

도커로 이전하게 될 경우에는 개발환경의 편의를 위해서 로컬에서 DB를 돌리기 보다는 DB테스트 서버를 활용하는 방안으로 하는게 좋을 것 같다고 생각이 됩니다.

만약 첫번째 방법으로 하게 된다면, postgres container가 하나 더 추가될 것입니다. 그렇지만 production단계에서는 다AWS에서 제공하는 Database를 사용하고 있기에 부적합하다고 여겨집니다.

따라서 두번 째 방법으로, DB와 관련된 환경변수를 base.py에 environ.Env.read_env(os.path.join(ROOT_DIR, '.env')) 를 넣어줍니다.

django에서는 환경변수가 local의 경우에는 pycharm에 의해 정의되고 있었고, 배포하는 경우에는 또 다른 방식으로 정의하고 있습니다. docker를 두 환경에서 모두 같은 환경에서 사용하기 위해서 .env파일에서 환경변수를 관리합니다.

이로써 docker로 개발환경을 세팅을 마쳤습니다.

docker container기반의 배포에 대해서는 다음에 포스팅해보겠습니다.
