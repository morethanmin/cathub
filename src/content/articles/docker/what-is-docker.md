---
title: 도커란 무엇인가
description: "도커 공부"
category: docker
createdAt: "2021-11-03"
---

## 도커

***리눅스 기반***의 컨테이너를 실행시켜 줌으로서 특정한 프로그램의 배포 및 관리를 단순하게 해준다.

## 도커파일

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1471b991-55ef-42ae-8618-726721cc81da/Untitled.png)

dockerfile을 작성하고 빌드를하면 도커 이미지가 생성된다. 이렇게 생성된 이미지를 가동시키면 컨테이너가 생성된다.

dockerfile은 이미지를 생성하기 위한 템플릿 파일이라고 보면된다.

## 이미지

도커를 사용하는 기본단위는 이미지와 컨테이너이다. 이미지를 run하면 컨테이너가 된다. 이미지는 도커 컨테이너를 실행하기 위한 설정 템플릿이다. 추가 및 수정이 가능하다.

---

다음과 같이 입력하면 docker hub에 존재하는 이미지리스트를 확인할 수 있다.

```bash
$ docker search [검색할 이미지명]
```

다음과 같이 입력하면 이미지를 다운로드한다.

```bash
$ docker pull [저장소 이름]/[이미지 이름]:[태그]
```

다음과 같이 임력하면 이미지 목록을 확인한다.

```bash
$ docker images
```

다음과 같이 입력하면 자신이 다운로드한 이미지를 제거한다.

```bash
docker rmi 이미지1 [이미지2, 이미지3 ...]
```

---

이미지를 생성하는 방법은 다음과같다.

### 기본 이미지(nginx, centos등)을 다운로드

docker hub에서 다운로드 받아서 실행하면 된다.

### Dockerfile을 만들어 이미지를 커스터마이징

컨테이너에 설치해야하는 패치지, 소스코드, 명령어 등을 기록해 두고 Build하면 이미지를 생성해주는 파일이다. dockerfile을 작성하고, `docker build [OPTIONS] 도커파일경로` 를 입력하면 이미지가 생성된다.

예시 도커파일을 보자

```docker
# FROM: 베이스 이미지를 지정 (여기서는 ubuntu 16.04 버전 사용) 
FROM ubuntu:16.04

# MAINTAINER: 개발자 정보를 나타냅니다. 
MAINTAINER "youremail@domain.com"

# RUN : 해당 명령어 실행, 필요한 패키지를 설치 
RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

# COPY: 현재 경로(.)에 존재하는 파일들을 이미지 /app 경로에 모두 추가 
COPY . /app

# WORKDIR: 작업 디렉토리 변경. 셸 cd /app 과 같은 기능 
WORKDIR /app

# RUN: 명령어 실행. 복사된 requirements.txt 파일로 pip로 필요 라이브러리 설치 
RUN pip install -r requirements.txt

# EXPOSE: 컨테이너 실행 시 노출될 포트
EXPOSE 5000

# ENTRYPOINT: 컨테이너 시작 시 기본으로 실행되는 명령어 
ENTRYPOINT [ "python" ]

# CMD: 컨테이너 시작 시 실행되는 명령어로 위 ENTRYPOINT 명령어 뒤 인자로 실행하게 된다. 
# 결국 python app.py 명령어 실행 
CMD [ "app.py" ]
```

[dockerfile 명령어](https://www.notion.so/ee6f03fb82254e5aa67ae51e089a3afa)

### docker commit

컨테이너에서 설치 및 작업한 내용을 저장하는 방법

## 컨테이너

이미지를 실행한 상태를 컨테이너라고 부른다. 컨테이너는 서로 독립적으로 존재하고 컨테이너를 삭제하면 데이터와 상태들까지도 삭제가 된다.

---

다음과 같이 입력해 컨테이너를 생성하고 실행한다.

```bash
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```

다음과 같이 입력해 컨테이너 목록을 확인한다.

```bash
docker ps [OPTIONS]
```

다음과 같이 입력해 컨테이너를 제거한다.

```bash
docker rm [OPTIONS] 컨테이너1 [컨테이너2...]
```

컨테이너 시작

`docker start [OPTIONS] 컨테이너1 [컨테이너2...]`

컨테이너 종료

`docker stop [OPTIONS] 컨테이너1 [컨테이너2...]`

컨테이너 로그 확인

`docker logs [OPTIONS] CONTAINER`

실행 중인 컨테이너 진입

`docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`

## 아키텍쳐

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3eebf23f-56e3-4581-b546-7a7677fa7a41/Untitled.png)

## Daemon

도커 서버는 실제 컨테이너를 생성 및 실행하고 이미지를 관리하는데 이러한 기능들은 dockerd(docker daemon)에서 동작한다.

## Registry

docker이미지를 저장할 수 있는 장소이다.

## Docker compose

여러 개의 컨테이너를 실행해야하는 경우에는 각각 하나씩 컨테이너를 생성해야한다. 이러한 여러 개의 컨테이너를 관리하기 위해 생겨난 것이다. 예시를 보며 확인해보자.

```yaml
version: '3'
services:
  wordpress:
        depends_on:
       - db
    image: wordpress
    restart: always
    ports:
      - 80:80
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: exampleuser
      WORDPRESS_DB_PASSWORD: examplepass
      WORDPRESS_DB_NAME: exampledb
    volumes:
      - wordpress:/var/www/html
  db:
    image: mysql:5.7
 **   restart: always
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: exampleuser
      MYSQL_PASSWORD: examplepass
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - db:/var/lib/mysql
volumes:
  wordpress:
  db:
```

다음과 같이 입력해서 실행이 가능하다. 

`$ docker-compose up -d`

컴포즈로 생서된 컨테이너를 정지후 삭제한다.

`docker-compose down`

컴포즈로 생성된 컨테이너의 목록을 확인한다.

`docker-compose ps`

### version

vaml 파일 포맷 버전을 나타낸다. 3만 적는 경우 최신버전을 사용하겠다는 의미이다.

### service

컨테이너를 묶는 단위 wordpress와 db 컨테이너를 사용했다.

### port

docker run 명령어의 -p 옵션과 같다.

### volumes

run 명령어에서 -v 옵션과 동일하다.

### command

컨테이너가 실행될 때 수행할 명령어를 설정한다. run 명령어에서의 마지막 붙는 커맨드와 같다.

### depends_on

특정 컨테이너와의 의존관계를 나타내며 명시된 컨테이너가 먼저 생성되고 실행된다.