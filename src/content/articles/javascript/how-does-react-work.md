---
title: "[react] 리액트가 돌아가는 원리"
description: "-"
category: javascript
createdAt: "2021-10-17"
---

- cdn으로 html에서 script를 불러와서 리액트를 사용 할 수도 있다.
- 리액트의 컴포넌트에서 리턴해주는 리액트 엘레먼트가 보기 안좋기에 babel을 통해 JSX문법을 사용하면 알아서 인식해서 변환해준다.
- 여기서 리액트의 파일들을 컴포넌트마다 여러 파일로 쪼개서 작업을 해야 할텐데 위해선 이를 위해서 웹팩을 사용한다. 사실 웹팩이 없어도 es5에서 모듈시스템을 지원하기 시작했는데, 여러개의 파일을 전송하게되는것도 불 필요한 네트워크 비용낭비를 유발하기도 하고, 불필요한 코드를 지워주는 등 여러가지 이점을 갖고있기에 사용하게 된다.
- 웹팩의 플러그인으로 바벨을 넣어주면, 웹팩이 작동하는 동시에 jsx문법을 인식하고 번들링해준다.
- 웹팩에서는 소스코드가 바뀔 때마다 자동으로 번들링 해주는 기능을 제공하고있다. CRA에서 기본적으로 세팅해준다.
- 배포를 하는 경우에는 번들링 된 파일을 접근할 수 있게 웹서버에 업로드 해두면 된다. (AWS, GITHUB PAGES, 등등..)
- 컴퓨터마다 고유한 ip가 있고, 해당 Ip로 브라우저로 접속했을 때, 그것이 웹 서버가 돌아가고 있다면 인식하여 웹 서비스처리가 된다.
- 그래서 번들링 된 파일을 웹서버를 가동시켜놓고 거기에 등록시켜놓아야 프론트엔드를 배포할 수 있다. (cra)
