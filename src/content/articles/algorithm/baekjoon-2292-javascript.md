---
title: "[baekjoon] 2292 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-01"
---

## 문제

위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.

## 입력

첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.

## 출력

입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.

## 풀이

생각보다 간단하게 풀 수 있다. 1 이하인 경우, 답은 1이다. 7이하인 경우, 답은 2이다. 19이하인 경우, 답은 3이다. 이를 보면 알다시피 한 층에 생길 수 있는 육각형의 개수가 6의 배수만큼 늘어나는 규칙을 갖고있다는 것을 알 수 있다. 이를 코드로 짜면 다음과 같다.

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
  let range = 1;
  let count = 1;
  while (N > range) {
    range = range + 6 * count;
    count = count + 1;
  }
  console.log(count);

  process.exit();
});

// 1 7 19 37 61
// +6 +12 +18
```
