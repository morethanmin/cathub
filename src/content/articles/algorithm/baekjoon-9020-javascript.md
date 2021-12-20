---
title: "[baekjoon] 9020 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-18"
---

## 문제

1보다 큰 자연수 중에서  1과 자기 자신을 제외한 약수가 없는 자연수를 소수라고 한다. 예를 들어, 5는 1과 5를 제외한 약수가 없기 때문에 소수이다. 하지만, 6은 6 = 2 × 3 이기 때문에 소수가 아니다.

골드바흐의 추측은 유명한 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것이다. 이러한 수를 골드바흐 수라고 한다. 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다. 예를 들면, 4 = 2 + 2, 6 = 3 + 3, 8 = 3 + 5, 10 = 5 + 5, 12 = 5 + 7, 14 = 3 + 11, 14 = 7 + 7이다. 10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션은 존재한다.

2보다 큰 짝수 n이 주어졌을 때, n의 골드바흐 파티션을 출력하는 프로그램을 작성하시오. 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.

## 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고 짝수 n이 주어진다.

## 출력

각 테스트 케이스에 대해서 주어진 n의 골드바흐 파티션을 출력한다. 출력하는 소수는 작은 것부터 먼저 출력하며, 공백으로 구분한다.

## 풀이

이전에 풀었던 소수 구하기, 모든 경우의 수 확인하기, 최솟값 구하기를 순차적으로 계산하면 결과값이 나온다.

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
  const T = +input[0];
  for (let i = 1; i <= T; i++) {
    const n = +input[i];
    let sosuList = [];
    //1~n까지의 소수 구하기. 1은 제외이므로 2부터 시작.
    for (let j = 2; j <= n; j++) {
      let isSosu = true;
      //j의 값이 소수인지 판별하기 위한 for문
      for (let k = 2; k <= Math.sqrt(j); k++) {
        //특정 값으로 나누어 떨어진다면 해당 값은 소수가 아님.
        if (j % k === 0) {
          isSosu = false;
          break;
        }
      }
      //소수인경우 리스트에 추가
      if (isSosu) {
        sosuList.push(j);
      }
    }

    //소수 리스트에서 합이 n과 같은 경우 찾기.
    let resultList = [];
    for (let i = 0; i < sosuList.length - 1; i++) {
      for (let j = i; j < sosuList.length; j++) {
        if (sosuList[i] + sosuList[j] === n) {
          resultList.push([sosuList[i], sosuList[j]]);
        }
      }
    }

    //결과 리스트에서 차가 가장 적은 값 출력
    let minDiff = -1,
      idx = -1;
    for (let i = 0; i < resultList.length; i++) {
      const diff = resultList[i][1] - resultList[i][0];
      if (minDiff === -1 || minDiff > diff) {
        minDiff = diff;
        idx = i;
      }
    }
    console.log(resultList[idx].join(" "));
  }
  process.exit();
});
```
