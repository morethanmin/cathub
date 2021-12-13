---
title: "[baekjoon] 1978 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-13"
---

## 문제

주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

## 입력

첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

## 출력

주어진 수들 중 소수의 개수를 출력한다.

## 풀이

문제를 풀기 위해선 우선 소수가 무엇인지 알아야한다. 소수는 1이 아닌 수중에서 1외에 수로 나누어 지지않는 수를 의미한다. 따라서 해당 값이 특정 값으로 나누어지면 소수가 아닌 것이고, 나누어지지 않는다면 소수인 것이다. 이때 해당 값의 절반 까지의 값만 확인하면 된다.

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
  const nums = input[1].split(" ").map(i => parseInt(i));
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    let isSosu = true;
    if (nums[i] === 1) continue;
    for (j = 2; j <= Math.ceil(nums[i] / 2); j++) {
      if (nums[i] % j === 0) {
        isSosu = false;
        break;
      }
    }
    if (isSosu) {
      count++;
    }
  }
  console.log(count);
  process.exit();
});
```
