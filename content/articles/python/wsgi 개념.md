---
title: wsgi 개념
description: wsgi 개념을 익히자
category: python
---

## web server와 web application

web server는 하드웨어적인 의미와 소프트웨어적인 의미를 둘 다 가지고 있다. 이중 소프트웨어로서의 web server는 http request에 대해서 정적인 리소스를 처리해주는 프로그램이다.

만약 동적인 처리가 필요한 페이지라면 비지니스 로직을 수행하기 위한 web application (was 또는 as 라고 부른다.)에게 요청을 위임해 처리한다.

웹서버는 nginx, apache 등이 대표적이다. 현재에는 동적인 웹이 많지만 웹 서버를 아직도 사용하는 이유는 정적파일 제공외에도 리버스 프록시 등과 같은 기능을 제공하고 있기 때문에 사용하고 있다.

## CGI (Common Gateway Interface)

동적인 처리를 해주는 was를 구성하는 요소로 예전에는 cgi를 사용했다.

단순하게 아파치같은 웹서버에서 동적 처리가 필요한 요청이 들어왔을 때 cgi가 처리를 위한 스크립트를 실행하고, 실행한 스크립트가 reponse를 작성해 아파치로 보내는 역할을 한다.

하지만 이런 cgi는 모든 request 마다 스크립트가 돌아가는 원시적인 형태여서 비 효율적인 부분이 존재했다.

## WSGI (web server gateway interface)

wsgi은 파이썬 스크립트로 웹의 동적인 처리를 구현하기 위한 인터페이스라고 생각하면 된다.

하지만 cgi처럼 원시적이고 일시적으로 스크립트를 실행하는 것보다는 좀더 확장된(업그레이드된) 기능들을 제공하고 있다.

정리하자면,

HTTP requests <-> Web Server <-> WSGI Server(Middleware) <-> Django(WSGI를 지원하는 Web Application)

이러한 형태로 운영된다고 볼 수 있다.
