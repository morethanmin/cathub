---
title: "[django] 장고란 무엇인가?"
description: "-"
category: python
createdAt: "2021-10-16"
---

장고는 파이썬을 통해 웹 개발을 할 수 있도록 도와주는 프레임워크이다.

외부로부터 http 통신 요청이 오게되면, 처리할 수 있는 틀을 만들어 놓은 것이라고 생각하면 된다.

# 특징

장고는 다음과 같은 특징이 있다.

## MVC기반의 MVT 구조

django MVC(Model, View, Controller)의 기반과 같지만 View를 Template, Controller를 View라고 부른다.

단순하게 명칭의 차이라고 볼 수 있다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7ef9659-a8a9-41c9-876c-30eccacde33d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211012T073015Z&X-Amz-Expires=86400&X-Amz-Signature=9356927b07eab3ee1e8afb10069ecb4e032c414fca7feb7294189c574830195f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

출처 ([https://developer.mozilla.org/ko/docs/Learn/Server-side/Django/Introduction](https://developer.mozilla.org/ko/docs/Learn/Server-side/Django/Introduction))

## ORM 사용

database와 연결시켜주는 기능을 지원하고 있다. 따라서 쿼리를 날리지 않고도 python만으로 db를 손쉽게 조작이 가능하다.

## Admin Page 제공

자동으로 데이터베이스를 기반으로 한 어드민페이지를 만들어준다.

## Elegant URL

URL을 직관적이고 쉽게 정의하고 표현이 가능하다. 파이썬 함수에 연결하게 되어있어 편리함.

## 자체 Template제공

템플릿 기능을 제공하고 있다.

## Cache

캐시를 통해 자주 이용되는 내용을 저장해두면 성능을 높일 수 있는데, 장고의 Cache 시스템은 메모리, 데이터베이스, 파일 시스템 중 아무곳에나 저장이 가능하다. 캐시의 단위도 지정해 저장이 가능하다.

## 다국어 지원

다국어를 간단하게 지원해준다.

## good 개발 환경

다른 웹서버가 없어도 돌릴 수 있다.

## 자동 리로딩

소스코드가 변경되면 자동으로 실행파일에 반영이 된다.

# 느낀점

React, Vue와 같은 프론트엔드 프레임워크를 사용하다가 Django라는 프레임워크를 사용함으로써 웹개발의 전반적인 이해에 도움이 되었고, 라이브러리라고 주장하는 React와는 다르게 고전적인 웹 서비스가 가진 대부분의 기능을 제공하기에 간단한 웹서비스를 개발하는 부분에서는 이점이 있을 수 있겠다고 생각했다.

반대로 AJAX나 모듈화를 할 수 있다는 점에서의 React의 이점이 강하게 와닿았고 웹 서비스 본질에 대해 더 깊은 이해를 할 수 있었다 😀
