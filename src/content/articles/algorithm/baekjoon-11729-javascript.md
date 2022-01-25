---
title: "[baekjoon] 11729 하노이 탑 이동 순서 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-26"
---

## 문제

세 개의 장대가 있고 첫 번째 장대에는 반경이 서로 다른 n개의 원판이 쌓여 있다. 각 원판은 반경이 큰 순서대로 쌓여있다. 이제 수도승들이 다음 규칙에 따라 첫 번째 장대에서 세 번째 장대로 옮기려 한다.

1. 한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다.
2. 쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 한다.

이 작업을 수행하는데 필요한 이동 순서를 출력하는 프로그램을 작성하라. 단, 이동 횟수는 최소가 되어야 한다.

아래 그림은 원판이 5개인 경우의 예시이다.

## 입력

첫째 줄에 첫 번째 장대에 쌓인 원판의 개수 N (1 ≤ N ≤ 20)이 주어진다.

## 출력

첫째 줄에 옮긴 횟수 K를 출력한다.

두 번째 줄부터 수행 과정을 출력한다. 두 번째 줄부터 K개의 줄에 걸쳐 두 정수 A B를 빈칸을 사이에 두고 출력하는데, 이는 A번째 탑의 가장 위에 있는 원판을 B번째 탑의 가장 위로 옮긴다는 뜻이다.

```jsx
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

/**
 * @param {*} num 원반의 수
 * @param {*} from 원반들이 위치한 곳의 번호
 * @param {*} to 원반들을 옮길 목적지 번호
 * @param {*} other 나머지 한 곳(목적지가 아닌) 곳 번호
 * @returns
 */

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  function hanoi(num, from, to, other) {
    // 모두 옮겼으면 종료
    if (num === 0) return

    // 가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
    hanoi(num - 1, from, other, to)

    // 가장 아래 원반을 목적지로 옮김
    result += `${from} ${to}\n`
    count++

    // 목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
    hanoi(num - 1, other, to, from)
  }
  const N = +input[0]
  let count = 0
  let result = ''
  hanoi(N, 1, 3, 2)

  console.log(count)
  console.log(result)
  process.exit()
})
```