---
title: "[baekjoon] 2839 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-06"
---

## 문제

상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.

상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)

## 출력

상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.

## 풀이

for문을 통해 bongji라는 array에 5kg 봉지와 3kg 봉지로 만들 수 있는 조합을 다 넣어준다. 이후 최소 개수로 조합된 값을 출력해주면 된다.

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
  let bongji = [];
  for (let x = 0; x <= N / 5; x++) {
    for (let y = 0; y <= N / 3; y++) {
      if (5 * x + 3 * y === N) bongji.push([x, y]);
    }
  }
  if (bongji.length) {
    const result = bongji.reduce((acc, cur) =>
      acc[0] + acc[1] < cur[0] + cur[1] ? acc : cur
    );
    console.log(result[0] + result[1]);
  } else console.log(-1);

  process.exit();
});
```
