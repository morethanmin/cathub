---
title: "[baekjoon] 10872 팩토리얼 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-23"
---

## 문제

0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.

## 출력

첫째 줄에 N!을 출력한다.

## 풀이

재귀를 이용해 풀면 간단하게 풀 수 있는 문제이다.

```jsx
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const getFactorial = (N) => {
  if (N < 2) return 1

  return N * getFactorial(N - 1)
}

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = +input[0]
  console.log(getFactorial(N))
  process.exit()
})
```