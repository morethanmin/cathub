---
title: "[baekjoon] 4948 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-17"
---

## 문제

베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

## 입력

입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 케이스는 n을 포함하는 한 줄로 이루어져 있다.

입력의 마지막에는 0이 주어진다.

## 출력

각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.

## 풀이

전에 나온 소수구하는 문제와 소수구하는 범위만 다르고 나머지는 똑같다. 알고리즘은 에라토스테네스의 체를 사용하였다.

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
