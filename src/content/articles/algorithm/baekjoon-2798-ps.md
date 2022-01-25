---
title: "[baekjoon] 2798 블랙잭 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-30"
---

## 문제

카지노에서 제일 인기 있는 게임 블랙잭의 규칙은 상당히 쉽다. 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임이다. 블랙잭은 카지노마다 다양한 규정이 있다.

한국 최고의 블랙잭 고수 김정인은 새로운 블랙잭 규칙을 만들어 상근, 창영이와 게임하려고 한다.

김정인 버전의 블랙잭에서 각 카드에는 양의 정수가 쓰여 있다. 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다. 그런 후에 딜러는 숫자 M을 크게 외친다.

이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다. 블랙잭 변형 게임이기 때문에, 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다.

N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.

## 입력

첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)이 주어진다. 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는 양의 정수이다.

합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.

## 출력

첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력한다.

## 풀이

주어진 배열내에서 3장을 뽑아 최대값을 만드는 문제인데, 단순 for문을 중첩시켜 최대값을 구할 수 있다. 만약 3장을 뽑는 것이 아니라 입력에따라 뽑는 장수도 다르다면, 조합을 구현해서 경우의수를 찾아내야한다. 그렇지만 해당문제에서는 그렇게 구현되어 있지 않기 때문에 단순 반복문을 사용해 구현했다.

```jsx
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
  // N : 카드의 수, M : 목표 수
}).on('close', () => {
  const [N, M] = input[0].split(' ').map((i) => +i)
  const cards = input[1].split(' ').map((i) => +i)
  let result = 0
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const sum = cards[i] + cards[j] + cards[k]
        if (M - sum >= 0 && M - sum < M - result) result = sum
      }
    }
  }
  console.log(result)
  process.exit()
})
```