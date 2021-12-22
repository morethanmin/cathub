---
title: "[baekjoon] 1002 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-22"
---

## 문제

조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.

이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.

조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고, 조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 이루어져 있다.

한 줄에 x1, y1, r1, x2, y2, r2가 주어진다. x1, y1, x2, y2는 -10,000보다 크거나 같고, 10,000보다 작거나 같은 정수이고, r1, r2는 10,000보다 작거나 같은 자연수이다.

## 출력

각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다. 만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 -1을 출력한다.

## 풀이

반지름의 합과 차, 그리고 두 점사이의 거리를 이용해 비교하면 된다.

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

rl.on("line", line => {
  inputs.push(line);
}).on("close", () => {
  const T = +inputs[0];
  for (let i = 1; i <= T; i++) {
    const [x1, y1, r1, x2, y2, r2] = inputs[i].split(" ").map(i => +i);
    const 두점사이의거리 = Math.sqrt(
      Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)
    );
    const 반지름의합 = r1 + r2;
    const 반지름의차 = Math.abs(r1 - r2);
    if (반지름의차 > 두점사이의거리) {
      console.log(0);
    } else if (반지름의차 < 두점사이의거리 && 반지름의합 > 두점사이의거리) {
      console.log(2);
      //내접, 외접인경우
    } else if (반지름의차 === 두점사이의거리 || 반지름의합 === 두점사이의거리) {
      if (x1 === x2 && y1 === y2) console.log(-1);
      else console.log(1);
    } else if (반지름의합 < 두점사이의거리) {
      console.log(0);
    }
  }

  process.exit();
});
```
