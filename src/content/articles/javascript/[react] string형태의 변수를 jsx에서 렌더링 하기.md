---
title: "[react] string형태의 변수를 jsx에서 렌더링 하기"
description: "-"
category: javascript
createdAt: "2021-11-23"
---

## 배경

사이드 프로젝트를 진행하면서 게시글 내용을 textarea를 통해 DB에 저장해 두었다 다시 렌더링 해주는 과정에서 string으로 저장되어있는 html을 어떤 방식으로 렌더링 해주어야 할지를 생각해보았다.

## 과정

react에서는 cross-site scripting(XSS) 공격을 방지하고자 string형태의 html을 넘겨주어도 그대로 string으로 반환하게 된다.

물론 `dangerouslySetInnerHTML` 을 사용하면 반환할 수 있긴 하지만 이는 권장되지 않는 보안에 취약한 방식이다.

우리는 `\n`이라는 문자열을 줄넘겨 주기만 하면 되므로, 다음같이 `\n` 을 `<br/>` 태그로 바꾸어 주면 된다.

## 결과

```jsx
// in jsx
{
  somethingString.split("\n").map(line => (
    <span>
      {line}
      <br />
    </span>
  ));
}
```
