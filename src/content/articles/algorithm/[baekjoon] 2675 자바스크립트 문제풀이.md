---
title: "[baekjoon] 2675 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-27"
---

## 문제

문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

QR Code "alphanumeric" 문자는 `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./:` 이다.

## 입력

첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다.

## 출력

각 테스트 케이스에 대해 P를 출력한다.

## 풀이

특별한 개념 없이 for문만 잘 이용하면 바로 풀 수 있는 문제이다.

```js
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line',(line)=>{
  input.push(line)
}).on('close',()=>{
  const T = parseInt(input[0])
  for(i=1; i<=T; i++){
    const [R, S] = input[i].split(' ')
    let result = ""
    for(j=0; j<S.length; j++){
      for(k=0; k<parseInt(R); k++){
        result = `${result}${S[j]}`
      }
    }
    console.log(result);
  }
  process.exit()
})
```
