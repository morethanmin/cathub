---
title: "[baekjoon] 2775 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-05"
---

## 문제

평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

## 입력

첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다

## 출력

각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

## 풀이

문제에서 요구한 조건대로 호수별 거주민 수를 나열해보면 다음과 같다.

```jsx
/**
 * k n r
 *
 * 0 1 1
 * 0 2 2
 * 0 3 3
 * 0 4 4
 * 0 5 5
 *
 * 1 1 1
 * 1 2 3  1+2
 * 1 3 6  1+2+3
 * 1 4 10 1+2+3+4
 * 1 5 15 1+2+3+4+5
 *
 * 2 1 1
 * 2 2 4  1+3
 * 2 3 10 1+3+6
 * 2 4 20 1+3+6+10
 * 2 5 35 1+3+6+10+15
 *
 * 3 1 1
 * 3 2 5  1+4
 * 3 3 15 1+4+10
 * 3 4 35 1+4+10+20
 * 3 5 70 1+4+10+20+35
 */
```

따라서 해당 조건에 맞도록 반복문을 통해 `k-1` 층 `n` 호까지의 거주민 수를 구한 값을 출력해주면 된다.

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
  const T = parseInt(input[0]);
  for (let i = 1; i <= T; i++) {
    //k층
    const k = input[2 * i - 1];
    //n호
    const n = input[2 * i];
    // console.log(`${k}층${n}호`)
    //0층 n호까지의 인원
    let hoN = [];
    for (let q = 1; q <= n; q++) {
      hoN.push(q);
    }

    //1층부터 k-1층까지
    for (let j = 1; j < k; j++) {
      let newHoN = [1];
      let sum = 1;
      //2호부터 n호까지
      for (let q = 1; q < n; q++) {
        sum += hoN[q];
        newHoN.push(sum);
      }
      hoN = newHoN;
    }
    console.log(hoN.reduce((acc, cur) => acc + cur));
  }
  process.exit();
});
```
