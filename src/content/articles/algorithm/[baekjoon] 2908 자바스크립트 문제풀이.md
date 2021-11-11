---
title: "[baekjoon] 2908 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-11-11"
---

## 문제

상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.

상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.

두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.

## 출력

첫째 줄에 상수의 대답을 출력한다.

## 풀이

문자열 A, B를 입력 받은 뒤 반복문을 이용해서 문자열을 뒤집어주었다. 이후 값을 비교하고 출력하면 된다.

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const [A, B] = input[0].split(" ");
  let reversedA = [],
    reversedB = [];
  for (let i = A.length - 1; i >= 0; i--) {
    reversedA.push(A[i]);
  }
  for (let i = B.length - 1; i >= 0; i--) {
    reversedB.push(B[i]);
  }
  const parsedA = parseInt(reversedA.join(""));
  const parsedB = parseInt(reversedB.join(""));
  console.log(parsedA > parsedB ? parsedA : parsedB);
  process.exit();
});
```
