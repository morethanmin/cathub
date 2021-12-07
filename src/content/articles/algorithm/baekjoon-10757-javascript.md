---
title: "[baekjoon] 10757 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-07"
---

## 문제

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)

## 출력

첫째 줄에 A+B를 출력한다.

## 풀이

수의 크기와 상관없이 덧셈을 해주기 위해서, 우리가 어릴 때 배웠던 더하기 방식을 적용해주면 된다. 1의 자리끼리 부터 더해서 1의자리는 그대로 내려주고, 나머지는 그다음으로 넘기는 걸 반복하며 더해주고, 그 결과값을 출력해주면 된다.

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const [A, B] = input[0].split(" ").map(i => Array.from(i).reverse());
  let result = [];
  let nng = 0;
  const range = A.length > B.length ? A.length : B.length;
  for (let i = 0; i < range; i++) {
    const a = parseInt(A[i]) ? parseInt(A[i]) : 0;
    const b = parseInt(B[i]) ? parseInt(B[i]) : 0;
    const sum = a + b + nng;
    const nmg = sum % 10;
    nng = Math.floor(sum / 10);
    result.push(nmg);
  }
  if (nng) result.push(nng);
  console.log(result.reverse().join(""));

  process.exit();
});
```
