---
title: "[nuxt] utterances 사이즈가 적용되지 않는 이슈"

description: "nuxt trouble shooting"

category: vue
createdAt: "2021-10-18"
---

utterances라는 댓글 기능을 블로그 하단에 적용했지만 article크기와 width를 맞추려 했지만 css가 적용되지 않는 이슈가 있었다.

이유는 scoped가 되어있어서 className이 고유한 값으로 변경되지만, script tag로 되어있기 때문에 클라이언트에서 동적으로 생성되어서 .utterances 태그로 생성되기 때문이였다.

해결책은 no-ssr태그를 붙여 서버단에서 rendering 되지 않게 설정해준다음, scoped가 적용되지 않는 global scss파일에 적용해주면 된다.
