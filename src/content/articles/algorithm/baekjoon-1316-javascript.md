---
title: "[baekjoon] 1316 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-11-24"
---

## 문제

그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

## 출력

단어 하나가 그룹단어인지 확인하는 로직을 짜고 그걸 N번 반복하면 된다.
그룹단어인지 확인하는 로직은 간단하다. 우선 하나씩 set자료형에 넣어주되, 첫 알파벳이 아닌경우, 이전 알파벳과 현재 알파벳이 같지 않은 경우, set자료형에 이미 현재 알파벳이 존재하는 경우에는 해당 단어는 그룹단어가 아닌것이다.

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
  const N = parseInt(input[0]);
  let count = 0;
  for (let i = 1; i <= N; i++) {
    const word = input[i];
    const wordSet = new Set();
    let isGroupWord = true;
    for (j = 0; j < word.length; j++) {
      if (
        j !== 0 &&
        word[j - 1] !== word[j] &&
        Array.from(wordSet).includes(word[j])
      ) {
        isGroupWord = false;
      } else {
        wordSet.add(word[j]);
      }
    }
    if (isGroupWord) count++;
  }
  console.log(count);
  process.exit();
});
```
