---
title: "[baekjoon] 2869 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-03"
---

## 문제

땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.

달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.

달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)

## 출력

첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.

## 풀이

우선 문제에서 제시한 상황을 반복문을 이용해 그대로 적어서 풀어내면 다음과 같다.

```jsx
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [A, B, V] = input[0].split(' ').map((i) => parseInt(i))

  const days = Math.ceil(V/A)
  if(days*A===V){
    console.log(days);
  }else

  let height = 0
  let days = 0

  while (true) {
    days++
    height = height + A
    if (height >= V) break
    height = height - B
  }
  console.log(days)

  process.exit()
})
```

하지만 시간제한이 있어 초과가 발생한다. 따라서 for문이 아닌 수식으로 문제를 풀어야한다. 문제의 조건을 수식으로 정리하면 다음과 같다.

`(A-B)*X + A >= V`

다음날 낮에 올라가서 도착하는 것 까지 고려해야한다. 이 식을 정리해서 X값의 최솟같을 구하고 1을 더해주면 된다.

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
  const [A, B, V] = input[0].split(" ").map(i => parseInt(i));

  console.log(Math.ceil((V - A) / (A - B)) + 1);

  process.exit();
});
```
