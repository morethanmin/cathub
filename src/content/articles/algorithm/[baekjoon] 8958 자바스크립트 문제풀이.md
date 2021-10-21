---
title: "[baekjoon] 8958 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-21"
---

## 문제

"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.

## 출력

각 테스트 케이스마다 점수를 출력한다.

## 풀이

각각의 케이스에서 문자를 하나씩 확인하며 점수를 더하면 되는데, O인경우에는 더해지는 점수가 1점씩 올라가고, X인 경우에는 다시 더해지는 점수를 0으로 바꾼다.

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
  const T = parseInt(input[0])
  let result = ''
  for (i = 1; i <= T; i++) {
    let score = 0
    let sum = 0
    for (j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'O') {
        score = score + sum + 1
        sum++
      } else {
        sum = 0
      }
    }
    result = result + `${score}\n`
  }
  console.log(result)
  process.exit()
})

});
```
