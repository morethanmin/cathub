---
title: "[baekjoon] 2331 분해합 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-28"
---

## 문제

어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 따라서 245는 256의 생성자가 된다. 물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 반대로, 생성자가 여러 개인 자연수도 있을 수 있다.

자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.

## 입력

첫째 줄에 자연수 N(1 ≤ N ≤ 1,000,000)이 주어진다.

## 출력

첫째 줄에 답을 출력한다. 생성자가 없는 경우에는 0을 출력한다.

## 풀이

구하고자하는 분해합에서 순차적으로 내려가며 생성자를 찾는다. 이중에서 가장 작은 생성자를 출력하면 된다.

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
  let N = +input[0]
  let result = 0
  for (let i = N - 1; i > 0; i--) {
    let nums = []
    let curVal = i
    while (curVal !== 0) {
      const nmg = curVal % 10
      curVal = parseInt(curVal / 10)
      nums.push(nmg)
    }
    if (N === i + nums.reduce((acc, cur) => acc + cur)) {
      result = i
    }
  }
  console.log(result)

  process.exit()
})
```