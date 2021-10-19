---
title: nuxt build를 통해 알아보는 nuxt 원리

description: "nuxt build를 통해 알아보는 nuxt 원리"

category: vue
createdAt: "2021-10-16"
---

## nuxt build

해당 커맨드를 입력하면 서버 사이드 렌더링 형태로 빌드 되어 Universal App의 동작 방식으로 동작한다. 첫화면만 서버 렌더링으로 완성된 HTML을 뿌려주고 그 이후부턴 AJAX를 활용하고 동적라우팅을 수행한다. 이를 client side navigation (CSN) 이라고 한다.

따라서 server side rendering + client side navigation 이라고 생각하면 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/040bbd32-cc00-45f4-9c0d-882087346d45/Untitled.png)

https://www.a-ha.io/questions/4b35011ae851461fbd04f6467782da0c

프론트엔드 서버에 요청이 도착하면, 위의 다이어그램처럼 asyncData() & fetch) 단계 까지는 서버에서 수행된다. (SSR)

여기서 말하는 프론트엔드 서버는 API를 정의하는 백엔드 서버가 아닌 Nuxt.js에서 ssr를 구현하기 위한 서버를 말한다. Nuxt.js에서는 Express서버를 내장하고 있다!

이후 nuxt-link를 통해 Navigation이 이루어지며 동작한다. (CSN)

기본적으로 Nuxt로 빌드된 사이트에 접속하면 로드해야하는 페이지만 (pages에 명시된 라우트에 따라 선택된 페이지) 서버에서 렌더링해 클라이언트에게 보내준다.

만약 다른 페이지로 이동할 경우 이전의 서버사이드 렌더링같은 경우에는 새로 서버에 요청을 통해 받아오기 때문에 페이지가 로드되는동안 깜빡임이 발생할 수 밖에 없지만, nuxt에서는 깜빡임이 발생하지 않는다. 왜 그럴까?

CSN에 해당하는 과정인 pre-fetch때문인데, pre-fetch란 말 그대로 데이터를 미리 가지고 오기 때문인데, 어떤 방식으로 데이터를 미리 가져오는지 알아보자.

nuxt.js는 처음 서버에서 여러 데이터와 함께 렌더링된 HTML을 가져와 보여주고 해당 viewport(화면에 보여지는 페이지)의 존재하는 nuxt-link로 부터 다음 페이지를 예측해 백그라운드에서 청크파일(js파일)을 다운로드한다.

만약 user가 nuxt-link로 생성된 다른 페이지를 누른다면 미리 로드된 청크파일을 통해 렌더링 되어있던 html에 내용을 뿌려준다. 동작 방식 덕분에 다른 페이지로 이동하게 되는 경우에도 페이지 깜빡임 없이 보여줄 수 있다.

## nuxt generate

해당 커맨드를 통해 빌드하게 되면 static app으로 빌드가 되는데, 이 경우에는 모든 페이지가 pre rendering된 형태로 빌드가 생성되고 별도의 서버는 필요없게 된다.
