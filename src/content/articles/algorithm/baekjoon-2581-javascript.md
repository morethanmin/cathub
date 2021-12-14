---
title: "[baekjoon] 2581 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-14"
---

## 문제

자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.

예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.

## 입력

입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.

M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.

## 출력

M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다.

단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.

## 풀이

이전 문제에서 풀었던 소수 구하는 문제와 크게 다르지 않지만, 제곱근까지만 반복함으로써 시간 복잡도를 줄일 수 있었고, 약간의 예외처리를 해주면 된다.

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const M = parseInt(input[0]) < 2 ? 2 : parseInt(input[0]);
  const N = parseInt(input[1]);
  const result = [];
  for (i = M; i <= N; i++) {
    let isSoSu = true;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isSoSu = false;
        break;
      }
    }
    if (isSoSu) {
      result.push(i);
    }
  }
  if (result.length) {
    console.log(
      `${result.reduce((acc, cur) => acc + cur)}\n${result.reduce((acc, cur) =>
        acc > cur ? cur : acc
      )}`
    );
  } else {
    console.log(-1);
  }

  process.exit();
});
```
