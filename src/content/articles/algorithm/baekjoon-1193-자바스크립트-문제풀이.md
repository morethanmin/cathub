---
title: "[baekjoon] 1193 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-02"
---

## 문제

무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

## 출력

첫째 줄에 분수를 출력한다.

## 풀이

대각선 n번째 줄마다 n개의 분수가 나열된다는 점을 이용해 for문을 돌린다. 그리고 돌린 for문에서 문제에서 요구하는 분수로 변환해 출력해주면 된다.

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
  const X = parseInt(input[0]);
  let count = 0;
  let range = 0;
  while (count < X) {
    range++;
    for (let i = 1; i <= range; i++) {
      count++;
      if (count === X) {
        if (range % 2 == 0) console.log(`${i}/${range + 1 - i}`);
        else console.log(`${range + 1 - i}/${i}`);
        break;
      }
    }
  }

  process.exit();
});
```
