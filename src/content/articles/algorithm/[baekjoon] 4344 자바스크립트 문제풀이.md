---
title: "[baekjoon] 4344 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-20"
---

## 문제

대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

## 입력

첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

## 출력

각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

## 풀이

문제에서 시키는 대로 하면 되고, 특별하게 소수점 3째 짜리 출력을 해야하는데, 소수점이 없는 경우에도 .000으로 출력되어야 한다는 점 정도만 고려하면 될 듯 하다. toFixed라는 메서드를 활용하면 쉽게 구현이 가능하다.

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
  const C = parseInt(input[0]);
  for (i = 1; i <= C; i++) {
    const TC = input[i].split(" ").map(item => parseInt(item));
    const N = parseInt(TC[0]);
    let sum = 0;
    for (j = 1; j <= N; j++) {
      sum += TC[j];
    }
    let avg = sum / N;
    const mtAvg = (TC.slice(1).filter(item => item > avg).length / N) * 100;
    console.log(`${mtAvg.toFixed(3)}%`);
  }
  process.exit();
});
```
