---
title: "[baekjoon] 11653 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-15"
---

## 문제

정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

## 입력

첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

## 출력

N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

## 풀이

소인수분해는 합성수를 소수의 곱으로 나타낸 방법이다. 2부터 시작하여 나누어떨어질 때까지 반복하며 값을 구하면 된다.

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
  const N = parseInt(input[0]);
  if (N === 1) process.exit();
  let dividedValue = N;
  let result = "";
  for (let i = 2; i <= Math.sqrt(dividedValue); i++) {
    if (dividedValue % i === 0) {
      dividedValue = dividedValue / i;
      result += `${i}\n`;
      i = 1;
    }
  }
  result += `${dividedValue}`;
  console.log(result);
  process.exit();
});
```
