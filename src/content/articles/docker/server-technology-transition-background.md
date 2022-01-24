---
title: "[2] 서버기술전환의 배경"
description: "서버 기술 전환 과정"
category: docker
createdAt: "2021-11-17"
---

## 배경

현재 오픈갤러리는 **_Django FullStack_**으로 서비스를 운영하고 있지만, 서비스 규모가 커지고(기존 서비스 고도화 및 CC페이지 신설), 스택이 노후화 됨에 따라 여러 기술적 어려움에 직면하였습니다. (유지보수 및 신규 서비스를 반영하고 관리하거나 협업하는 경우 등)

## 목표

궁극적인 형태는 **_Django FullStack_**은 **_Django Rest Framework_**를 전환해 API server로 활용하고, **_Next.js_**를 사용해 Frontend server를 구축하고자 합니다. 그렇지만 이미 **_Django_**를 통해 개발되어있는 기존의 프로젝트들이 존재하기에 지금 당장은 진행 될 신규 프로젝트인 CC에 대해서만 **_Next.js_**를 통해서 개발이 진행되고, **_Django_**로 개발된 기존 프로젝트들은 유지보수를 진행해가면서 점진적으로 api서버로 전환하게 될 예정입니다.

또한 각각의 서비스를 **_Docker_** 기반의 컨테이너로 관리함으로써 확장성 있는 개발환경을 구축할 것입니다.

배포환경도 이에 맞도록 현재 **_AWS_**에서 사용하고있는 **_EB(Elastic beanstalk)_**를 **_ECS(Elastic Container Service)_**로 전환할 예정입니다.

이를 기술스택에 맞게 정리하면 다음과 같은 형태입니다.

## 기술

- AWS
  - ECR
  - ECS
- Docker
  - Nginx (web server)
  - Django
    - Gunicorn (wsgi server)
    - Django (wsgi application)
  - Next.js (node server)

Nginx에서, 이하의 URL로 접근할 경우 리버스 프록시를 통해 기존 **_Django_**가 돌아가고 있는 8000port로 넘겨줍니다.

- https://페이지주소/api/

Nginx에서, 이하의 URL로 접근할 경우 리버스 프록시를 통해 기존 **_Next.js_**가 돌아가고 있는 3000port로 넘겨줍니다.

- https://페이지주소/
