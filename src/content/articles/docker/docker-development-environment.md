---
title: "1.Docker를 활용한 개발환경 구성"
description: "서버 기술 전환 과정"
category: docker
createdAt: "2021-11-19"
---

> 💡 기술전환을 위한 test project의 dockerfile입니다. 실제 서비스의 코드와는 다릅니다.

## 개요

우선 local에서 docker를 사용하지 않고 개발환경을 구축해 봅시다. 그리고 그 환경을 기반으로 dockerize 해보도록 하겠습니다.

## 구현

여러 개의 컨테이너를 다루게 될것 이기에 **_Docker Compose_**를 사용합니다. (_도커 컴포즈는 도커 실행 시 복잡한 설정을 쉽게 관리하기 위해 YAML 파일에 정의하는 툴입니다._)

YAML파일 작성방법에 대해서는 따로 작성해보도록 하겠습니다.

### Local

local에서는 개발시 변경되는 소스코드를 감지하고 빌드의 용이성을 위해서 volumes를 사용합니다. 실제 production 환경에서는 별도의 volumes를 사용하지 않고 이미지 파일에 소스코드를 포함시켜줍니다. 이에 따른 docker구성은 다음과 같습니다.

**docker-compose.local.yml**

```yaml
version: "3"

services:
  # Next
  frontend:
    container_name: frontend
    build:
      context: ./frontend/
      dockerfile: dockerfile.local
    volumes:
      # 변경되는 소스코드가 반영되기 위함
      - ./frontend:/frontend

    ports:
      - "3000:3000"
    command: bash -c "npm run dev"

  # Django
  backend:
    container_name: backend
    build:
      context: ./backend/
      dockerfile: dockerfile.local
    volumes:
      - ./backend:/backend
    ports:
      - "8000:8000"
    command: bash -c "python manage.py runserver 0.0.0.0:8000"
```

### Django

**dockerfile.local**

```docker
# 기본 이미지를 python3.9 로 설정
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

### Next.js

**dockerfile.local**

```docker
# 기본 이미지를 node:12 로 설정
FROM node:12

# frontend 폴더 생성
RUN mkdir -p /frontend
WORKDIR /frontend

# COPY: 개발환경에 설정에 필요한 파일을 /frontend 경로에 추가 및 설치
COPY package*.json /frontend/
RUN npm install
```

local에서의 이미지 빌드및 시작은 다음 command로 동작시킬 수 있습니다.

```bash
docker-compose -f docker-compose.local.yml up -d --build
```

### Production

실제 배포환경에서는 배포된 뒤에는 소스코드가 변경될 일도 없을 뿐만 아니라 이미지 기반 컨테이너 배포의 용이성을 위해서 이미지에 소스코드를 포함시키는 형태로 container를 구성해야합니다. 각각의 container가 독립적으로 실행될 수 있게끔 설정해 줍시다.

**docker-compose.yml**

```yaml
version: "3"

services:
  # WS
  nginx:
    container_name: nginx
    image: nginx
    build:
      context: ./nginx/
      dockerfile: dockerfile.prod
    restart: unless-stopped
    depends_on:
      # 두 컨테이너가 실행되고 난 후 nginx 작동을 위함
      - frontend
      - backend
    ports:
      - 3001:3001

  # Next
  frontend:
    container_name: frontend
    build:
      context: ./frontend/
      dockerfile: dockerfile.prod
    ports:
      - "3000:3000"

  # Django
  backend:
    container_name: backend
    build:
      context: ./backend/
      dockerfile: dockerfile.prod
    ports:
      - "8000:8000"
```

로컬 또는 외부(docker client라고 칭합니다.)에서 3001 포트로 접근할 경우, docker server의 Nginx가 돌아가고 있는 3001 포트로 포트포워딩을 시켜주고 Nginx에서 request에 맞는 response를 내뱉게 됩니다. 이제 각각의 Dockerfile을 만들어보겠습니다.

### Nginx

실제 배포환경에서는 nginx를 사용하여 웹서버를 구성해주고 있습니다. 이를 위해 docker-compose에서 이미지를 가져오고 dockerfile을 통해 약간의 custom만 해주시면 됩니다.

**dockerfile.production**

```docker
# 1.Retrieve the nginx base image
FROM nginx

# COPY: 배포환경에 필요한 설정파일을 /etc/nginx 경로에 추가 및 빌드
COPY . /etc/nginx

WORKDIR $RAILS_ROOT

# 10.Permission 755 allows the execute permission for all users to run the script
RUN chmod 755 ./etc/nginx/start.sh

CMD ["./etc/nginx/start.sh"]
# CMD 'bash -c ''while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g "daemon off;"'''
```

### Next.js

**dockerfile.production**

```docker
# 기본 이미지를 node:12 로 설정
FROM node:12

# frontend 폴더 생성
RUN mkdir -p /frontend
WORKDIR /frontend

# COPY: 개발환경에 설정에 필요한 파일을 /frontend 경로에 추가 및 설치
COPY package*.json /frontend/
RUN npm install

# COPY: 배포환경에 필요한 소스파일을 /frontend 경로에 추가 및 빌드
COPY . /frontend
RUN npm run build

CMD ["npm", "run", "start"]
```

### django

local에서의 runserver가 아니라 gunicorn을 통해 실행시켜주어야 합니다.

**dockerfile.production**

```docker
# 기본 이미지를 python3.9 로 설정
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

# COPY: 배포환경에 필요한 소스파일을 /backend 경로에 추가
COPY . /backend

RUN python manage.py collectstatic
CMD ["gunicorn", "--bind", "0:8000", "config.wsgi:application"]
```

production환경의 이미지 빌드 및 시작은 다음 command로 동작시킬 수 있습니다.

```bash
docker-compose -f docker-compose.production.yml up -d --build
```

이로써 docker로 개발환경을 세팅을 마쳤습니다.

docker container기반의 배포에 대해서는 다음에 포스팅해보겠습니다.
