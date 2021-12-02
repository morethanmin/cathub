---
title: "[baekjoon] 11654 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-29"
---

## 문제

알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

## 입력

알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

## 출력

입력으로 주어진 글자의 아스키 코드 값을 출력한다

## 풀이

javascript에서 제공하는 charCodeAt이라는 함수를 사용하면 된다.

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const A = input[0];
  console.log(A.charCodeAt());
  process.exit();
});
```
