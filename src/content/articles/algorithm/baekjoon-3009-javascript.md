---
title: "[baekjoon] 3009 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-20"
---

## 문제

세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

## 입력

세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

## 출력

직사각형의 네 번째 점의 좌표를 출력한다.

## 풀이

가로줄 좌표와 세로줄 좌표를 구하고 이를 토대로 겹치는 좌표를 구한다음, 겹치지 않는 값의 x,y 값을 추출하면 된다.

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
  const [x1, y1] = input[0].split(" ").map(i => +i);
  const [x2, y2] = input[1].split(" ").map(i => +i);
  const [x3, y3] = input[2].split(" ").map(i => +i);
  let x4, y4;

  //세로선
  let colLine = [];
  if (x1 === x2) {
    colLine.push([x1, y1]);
    colLine.push([x2, y2]);
  } else if (x1 === x3) {
    colLine.push([x1, y1]);
    colLine.push([x3, y3]);
  } else {
    colLine.push([x2, y2]);
    colLine.push([x3, y3]);
  }

  //가로선
  let rowLine = [];
  if (y1 === y2) {
    rowLine.push([x1, y1]);
    rowLine.push([x2, y2]);
  } else if (y1 === y3) {
    rowLine.push([x1, y1]);
    rowLine.push([x3, y3]);
  } else {
    rowLine.push([x2, y2]);
    rowLine.push([x3, y3]);
  }

  //세로선과 가로선중 같은 값이 아닌 값을 구한다.
  //colLine1 = rowLine=1, colLine1 = rowLine=2, colLine2 = rowLine=1, colLine2 = rowLine=2
  if (colLine[0][0] === rowLine[0][0] && colLine[0][1] === rowLine[0][1]) {
    console.log(`${rowLine[1][0]} ${colLine[1][1]}`);
  }
  if (colLine[0][0] === rowLine[1][0] && colLine[0][1] === rowLine[1][1]) {
    console.log(`${rowLine[0][0]} ${colLine[1][1]}`);
  }
  if (colLine[1][0] === rowLine[0][0] && colLine[1][1] === rowLine[0][1]) {
    console.log(`${rowLine[1][0]} ${colLine[0][1]}`);
  }
  if (colLine[1][0] === rowLine[1][0] && colLine[1][1] === rowLine[1][1]) {
    console.log(`${rowLine[0][0]} ${colLine[0][1]}`);
  }

  // console.log(colLine, rowLine)

  process.exit();
});
```
