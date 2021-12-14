---
title: "자바스크립트 런타임에 대해"
description: "자바스크립트 런타임에 대해"
category: javascript
createdAt: "2021-12-14"
---

자바스크립트는 단일 스레드로 동작하는 언어이다. 이 말인 즉슨 한번에 하나의 작업만 처리가 가능하다는 의미이다.

## Javascript Runtime

자바스크립트 런타임은 자바스크립트 언어가 구동되는 환경을 말한다. 자바스크립트 런타임은 다음의 구성요소로 이루어져있다.

- Javascript Engine
  - CallStack
  - Memory Heap
- Web API
- Task Queue
- Event Loop
- Queue

## Javascript Engine

자바스크립트 엔진은 CallStack과 Memory Heap으로 구성되어있으며 구글의 V8엔진이 가장 유명하다. (Node.js 또한 v8엔진을 사용하고 있다!)

브라우저 별로 자바스크립트가 동작하고 지원하는 문법이 다를 수 있는 이유도 브라우저별로 javascript engine이 다를 수 있기 때문이다.

### CallStack

콜스택은 함수의 호출을 기록하는 스택 형태의 자료구조로 이루어진 메모리 영역이다. (FILO)

우리가 작성한 코드들은 스택의 형태로 기록(push)이 되고 하나씩 순차적으로 처리가 된다. 브라우저 콘솔에서 긴 빨간색 에러를 본적이 있을 텐데 그건 보통 콜스택의 현재 상태를 나타내는 것이다.

이런 콜스택은 1600프레임까지 담아둘 수 있고 이 이상을 넘기면 Max Stack Error Reached 상태가 되고 실행중인 걸 중지시킨다.

### Memory Heap

자바스크립트에서 사용하는 값들은 힙이라는 공간의 내부에 할당이 된다. 힙은 unstructured 메모리이다.

## Web API

Web API는 웹 코드를 작성할 때 사용할 수 있는 API이다. 자바스크립트 엔진에서 정의되어있지 않은 여러 작업들을 처리한다.

## Task Queue

이벤트가 발생한 뒤 호출되어야하는 콜백함수들이 저장되는 메모리 공간이다. CallStack과는 달리 큐 형태의 자료구조로 이루어져 있다.(FIFO)

## Event Loop

이벤트가 발생할 때 호출할 콜백 함수를 관리하고 순서를 결정한다. CallStack에 모든 작업이 수행 된 뒤에야 콜백함수를 CallStack에 push한다.

## 자바스크립트의 비동기적 특성

자바스크립트에서 비동기로 호출되는 함수들은 CallStack에 쌓이지 않고 Task Queue로 보내지게 된다.

이러한 비동기적 특성에 의해 콜백지옥이라는 현상이 발생하기도 하는데, 이러한 점들을 해결하기 위해 ES6에서 Promise가 생겨났고, 이러한 Promise객체를 처리해주는 async 함수와 await 키워드도 생겨나게 되었다.

이러한 비동기적 특성은 따로 기술해보도록 하겠다.
