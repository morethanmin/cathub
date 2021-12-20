---
title: "[baekjoon] 1085 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-19"
---

## 문제

한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 x, y, w, h가 주어진다.

## 출력

첫째 줄에 문제의 정답을 출력한다.

## 풀이

네 변의 이동가능한 경우의 수를 다 구한다음 최솟값을 출력한다.

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
  const [x, y, w, h] = input[0].split(" ").map(i => +i);
  let dis = [];
  dis.push(Math.abs(x - w));
  dis.push(Math.abs(y - h));
  dis.push(x);
  dis.push(y);
  let min = 1000;
  for (let i = 0; i < dis.length; i++) {
    if (dis[i] < min) min = dis[i];
  }
  console.log(min);
  process.exit();
});
```
