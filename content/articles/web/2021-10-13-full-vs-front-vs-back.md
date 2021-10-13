---
title: full stack web vs front-end vs back-end
description: "-"
category: web
---

### 고전적인 웹 서버의 서비스(django, express)

- computer에서 browser에 접속해 특정 address에 접속한다.
- 특정 address에맞는 ip를 dns에서 찾아온다.
- 해당 ip address에 http request를 browser에서 보낸다.
- 해당 ip address에 해당되는 computer가 http request을 읽어들일 수 있는 web server(nginx, apache)가 http request을 인식할 것이고, request에 맞는 작업을 수행하여 템플릿 엔진등을 이용해 리소스 (html css js)를 만들어 http response을 보낸다. (was)
- route가 변경되는경우, 그에맞는 http응답을 보내고 다시 리소스 (html css js)를 브라우저가 읽고, 읽은 내용을 실행한다.
- 서버 통신이 필요한 경우, ajax를 사용할 수도 있다.

### 프론트가 csr인경우 (react)

- computer에서 browser에 접속해 특정 address에 접속한다.
- 특정 address에맞는 ip를 dns에서 찾아온다.
- 해당 ip address에 http request를 browser에서 보낸다.
- 해당 ip address에 해당되는 computer가 http request을 읽어들일 수 있는 web server(nginx, apache)가 돌아가고 있다면 http request을 인식할 것이고, web server가 정적 파일(html은 비어있고, 번들링된 js파일)을 브라우저에게 보내준다.
- 리소스 (html css js)를 브라우저가 읽고, 자바스크립트가 실행되면서 리액트에 의해 렌더링되기 시작한다.
- route가 변경되는경우, 이미 받아들인 자바스크립트에 짜여진 코드에 의해 컴포넌트만 교체된다.
- 서버 통신이 필요한 경우, 자바스크립트에서 ajax를 통해 api ip(백엔드 서버)에 요청을 보내며 작업이 수행된다.

React + loadable-components 로 ssr 구현가능. but 삽질 오지게 한다고 하네요.

### 프론트가 ssr인경우 (next.js)

- 컴퓨터에서 브라우저에 접속해 특정 주소에 접속한다.
- 특정주소에맞는 ip를 dns에서 찾아온다.
- 해당 ip주소에 http요청을 브라우저에서 보낸다.
- 해당 외부ip주소에 해당되는 컴퓨터가 해당 http요청을 읽어들일 수 있는 웹 서버(nginx, 아파치)가 돌아가고 있다면 http요청을 인식하고, 요청에 맞는 작업을 수행(리액트가 이곳에서 처리되어 html파일을 만들어 html파일로 보냄)하여 리소스 (html css js)로 http응답을 보낸다. (프론트 was 서버)
- 리소스 (html css js)를 브라우저가 읽고, 읽은 내용을 해석하고, 자바스크립트가 실행된다.
- route가 변경되는 경우, 이미 받아들인 자바스크립트에 짜여진 코드에 의해 컴포넌트만 수정된다.
- 해당 자바스크립트에서 ajax통신을 통해 api ip(백엔드 서버)에 요청을 보내며 작업이 수행된다.

### 백엔드 (DRF, express)

- 프론트엔드, 또는 프론트엔드 서버에서 http request를 요청한다.
- 해당요청에대해서 web server가 인식하고 동적인 처리를위해 was로 넘겨준다.
- was에서 처리된 결과는 web server를 통해 response를 보낸다.
