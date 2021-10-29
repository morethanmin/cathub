---
title: "[html] form에서 put, delete로 request 보내기"
description: "[html] form에서 put, delete로 request 보내기"
category: html&css
createdAt: "2021-10-28"
---

html5 기준으로 form tag에서는 GET과 POST밖에 지원하지 않는다. 이때 그렇기 때무에 method에 PUT, DELETE를 넣어도 동작하지 않는다.

다음처럼 input tag를 보내주면 보낼 수 있다.

```html
<form id="holyform" action="/something" method="POST">
  <input type="hidden" name="_method" value="PUT" />
</form>
```

나중엔 바뀔 수도 있겠지???
