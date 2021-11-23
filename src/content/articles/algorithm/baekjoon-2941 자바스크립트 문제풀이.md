---
title: "[baekjoon] 2941 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-11-23"
---

## 문제

예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.

## 입력

첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 '-', '='로만 이루어져 있다.

단어는 크로아티아 알파벳으로 이루어져 있다. 문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다.

## 출력

입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

## 풀이

문자열을 for문을 돌리면서 크로아티아 알파벳이 존재하는지 하나씩 check해준다. 그러다가 발견이 될경우 2글자를 차지하는경우 index를 1 높이고, 3글자인경우 index를 2높여 해당 문자는 counting되지않도록 해주면서 계산해주면 된다.

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const sentence = input[0];
  let count = 0;
  for (let j = 0; j < sentence.length; j++) {
    let find = false;
    if (j - 1 !== sentence.length)
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i].length === 3) {
          if (
            `${sentence[j]}${sentence[j + 1]}${sentence[j + 2]}` === alphabet[i]
          ) {
            find = true;
            count++;
            j = j + 2;
            break;
          }
        } else {
          if (`${sentence[j]}${sentence[j + 1]}` === alphabet[i]) {
            find = true;
            count++;
            j++;
            break;
          }
        }
      }
    if (find === false) {
      count++;
    }
  }
  console.log(count);
  process.exit();
});
```
