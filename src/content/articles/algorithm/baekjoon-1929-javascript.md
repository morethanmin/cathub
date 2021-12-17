---
title: "[baekjoon] 1929 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-16"
---

## 문제

M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

## 출력

한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

## 풀이

문제에서 나온 범위 안에서 숫자마다 해당 숫자를 2에서 제곱근까지 순차적으로 나누어 떨어지는지 확인하면서 소수를 구할 수 있다. 이러한 방법으로 구한 풀이는 다음과 같다.

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  outpu: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const [M, N] = input[0].split(" ").map(i => {
    let num = parseInt(i);
    num = num === 1 ? 2 : num;
    return num;
  });
  let result = "";
  for (let i = M; i <= N; i++) {
    let isSosu = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isSosu = false;
        break;
      }
    }
    if (isSosu) {
      result += `${i}\n`;
    }
  }
  console.log(result);
  process.exit();
});
```

이렇게 풀어도 문제는 정상적으로 풀 수 있지만 문제에서 에라토스테네스의 체를 이용해서 풀어보라고 한다. 에라토스테네스의 체는 정해전 범위안에서 소수를 찾는 빠른 방법이라고 한다. 1이아닌 범위안에서 순차적으로 배수들을 걸러내는 방법인데, 1~n의 소수를 알고싶다면 꼭 n까지의 모든 배수를 다 나눠볼 필요는 없다.

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  outpu: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const [M, N] = input[0].split(" ").map(Number);
  const isSosu = Array(N + 1).fill(true);
  isSosu[1] = false;

  for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) {
    if (isSosu[n]) {
      let m = 2;
      while (n * m <= N) {
        isSosu[n * m] = false;
        m++;
      }
    }
  }

  const results = [];
  for (let n = M; n <= N; n++) {
    if (isPrimeNumber[n]) {
      results.push(n);
    }
  }
  console.log(results.join("\n"));

  process.exit();
});
```
