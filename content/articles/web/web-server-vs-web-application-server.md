---
title: web server? web application server?
description: "-"
category: web
createdAt: "2021-10-15"
---

각각의 명칭에 대한 구분점에 대해서 간단하게 적어본다.

- web server (apache, nginx 등등) : **정적페이지** 처리하기 위한 용도 (동적 페이지를 wsgi에서 처리하게 끔 설정해준다)
- web application server : 실제로 **동적페이지** 만들어 주는 용도

## 추상적인 웹의 형태는 다음과같다.

client <-> web server <-> was(express, Next.js 등등)

## 파이썬같은 경우에는 was를 wsgi와 wsgi 애플리케이션을 통해 구축한다.

- wsgi (uwsgi, mod-wsgi, gunicorn 등등) : **동적페이지**를 실제로 처리하도록 python을 실행시켜준다.
- wsgi애플리케이션(django, flask, tornado 등등) : **동적페이지**를 처리하는로직을 만든다.

대부분의 웹 서버는 파이썬 프로그램을 호출할 수 있는 기능이 없기때문에 wsgi서버를 통해 wsgi 애플리케이션을 실행함으로서 동적페이지를 가져옴으로서 was를 구현한다.

client <-> web server <-> wsgi <-> wsgi application

아이패드를 사면 자세히 그려볼게용
