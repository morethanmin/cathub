---
title: 함수명 가져오기
description: "함수명 가져오기"
category: javascript
createdAt: "2021-10-19"
---

자바스크립트에서 함수를 선언하는 방식은 두 가지가 있다.

첫번째 방법은 함수를 선언하는 방식이다.

```jsx
function foo() {
  //...
}
```

두번째 방식은 변수를 선언하고 해당 변수에 익명함수를 할당하는 방식이다.

```jsx
const bar = function() {
  // ...
};
```

ECMAscript 5까지는 둘 사이의 차이가 없었다.

하지만 ECMAscript 6이후로는 이 둘은 name property라는 다른 점을 가지고 있다. 첫번 째 방식으로 만들어진 함수는 named funtion이라고 불리고, name이라는 프로퍼티를 가지고 있다. 반면 두번째 방식의 함수는 anonymous function이라고 불리며 name이라는 프로퍼티를 가지지만 길이가 0인 문자열을 갖고 있다.
