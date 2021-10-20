---
title: "[django] command 톺아보기"
description: "-"
category: python
createdAt: "2021-10-20"
---

자주 사용되는 커맨드만 정리해 보았습니다.

## django-admin startproject 프로젝트명

장고 프로젝트를 생성해주는 명령어. `django-admin`를 통해 커맨드를 실행했지만 프로젝트가 생성된 이후부터는 `python manage.py`를 통해 커맨드를 실행한다.

## django-admin startapp 앱명

장고 프로젝트 내부에서 앱을 생성하주는 명령어

## python manage.py runserver

django test 서버를 실행한다.

## python manage.py makemigrations

프로젝트 내부에서 DB 모델 등에 변경된 사항에 대해서 데이터베이스에 적용할 내용을 정리한다.

## python manage.py migrate

실제 변경사항을 DB에 반영한다.

## python manage.py showmigrations

프로젝트의 DB변경사항에 대해서 출력한다.
