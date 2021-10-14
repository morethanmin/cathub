---
title: map함수에서 비동기 처리하기
description: map함수에서 비동기를 처리해보자.
category: javascript
---

Array.prototype.map에서 비동기 처리를 할 때 생겨난 간단한 이슈가 있다.

이해를 위해 간단한 코드와 함께 살펴보자

```jsx
const foo = async() => {
	somethingArray.map(async(item)=>{
	return await somethingApi(item)
	})
}
```

다음과 같이 foo라는 함수를 `await foo()` 를 통해 실행하게 되면 해당 promise 배열을 return하기 때문에 await이 되지않고, promise객체를 그대로 받아오게 된다는 것이다.

 promise배열을 하나하나 비동기 처리를 해주어야하는데, 이때 사용할 수 있는 메서드가 있다.

메서드는 크게 세가지로 구분할 수 있다.

- Promise.allSettled : reject와 관계없이 실행
- Promise.all : 특정 promise에서 reject 발생시 수행을 멈춤
- Promise.race : 가장 먼저 수행이 완료된 결과를 가져옴

이중에서 우리는 `Promise.all` 을 사용해 위의 문제를 해결할 수 있다.

```jsx
await Promise.all(
    somethingArray.map(item => {
      return somethingApi(item);
    })
  );
```