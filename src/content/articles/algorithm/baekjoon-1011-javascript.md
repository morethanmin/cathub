---
title: "[baekjoon] 1011 자바스크립트 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-12-10"
---

## 문제

우현이는 어린 시절, 지구 외의 다른 행성에서도 인류들이 살아갈 수 있는 미래가 오리라 믿었다. 그리고 그가 지구라는 세상에 발을 내려 놓은 지 23년이 지난 지금, 세계 최연소 ASNA 우주 비행사가 되어 새로운 세계에 발을 내려 놓는 영광의 순간을 기다리고 있다.

그가 탑승하게 될 우주선은 Alpha Centauri라는 새로운 인류의 보금자리를 개척하기 위한 대규모 생활 유지 시스템을 탑재하고 있기 때문에, 그 크기와 질량이 엄청난 이유로 최신기술력을 총 동원하여 개발한 공간이동 장치를 탑재하였다. 하지만 이 공간이동 장치는 이동 거리를 급격하게 늘릴 경우 기계에 심각한 결함이 발생하는 단점이 있어서, 이전 작동시기에 k광년을 이동하였을 때는 k-1 , k 혹은 k+1 광년만을 다시 이동할 수 있다. 예를 들어, 이 장치를 처음 작동시킬 경우 -1 , 0 , 1 광년을 이론상 이동할 수 있으나 사실상 음수 혹은 0 거리만큼의 이동은 의미가 없으므로 1 광년을 이동할 수 있으며, 그 다음에는 0 , 1 , 2 광년을 이동할 수 있는 것이다. ( 여기서 다시 2광년을 이동한다면 다음 시기엔 1, 2, 3 광년을 이동할 수 있다. )

![https://www.acmicpc.net/upload/201003/rlaehdgur.JPG](https://www.acmicpc.net/upload/201003/rlaehdgur.JPG)

김우현은 공간이동 장치 작동시의 에너지 소모가 크다는 점을 잘 알고 있기 때문에 x지점에서 y지점을 향해 최소한의 작동 횟수로 이동하려 한다. 하지만 y지점에 도착해서도 공간 이동장치의 안전성을 위하여 y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 하려 한다.

김우현을 위해 x지점부터 정확히 y지점으로 이동하는데 필요한 공간 이동 장치 작동 횟수의 최솟값을 구하는 프로그램을 작성하라.

## 입력

입력의 첫 줄에는 테스트케이스의 개수 T가 주어진다. 각각의 테스트 케이스에 대해 현재 위치 x 와 목표 위치 y 가 정수로 주어지며, x는 항상 y보다 작은 값을 갖는다. (0 ≤ x < y < 231)

## 출력

각 테스트 케이스에 대해 x지점으로부터 y지점까지 정확히 도달하는데 필요한 최소한의 공간이동 장치 작동 횟수를 출력한다.

## 풀이

주어진 조건 안에서, 가장 빠르게 이동할 수 있는 케이스를 구해야하므로 현재 이동할 수 있는 범위에서 가장 큰 값부터 작은값순서대로 해당 이동값으로 이동 할 수 있는지를 확인해주며 이동해준다.

이때 이동하려는 값이 조건에 맞는지 확인하기 위한 로직으로는 해당 값으로 이동했을 때, 남은 거리가 해당 이동값의 팩토리얼 보다 작거나 같은지를 확인하면 된다.

왜냐하면 팩토리얼은 이동하려는 값에서 가장 빠르게 1로 이동했을 때의 값이기 때문이다.

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

//팩토리얼 구하는 함수
const getSum = n => (n * (n + 1)) / 2;

rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const T = parseInt(input[0]);
  for (let i = 1; i <= T; i++) {
    {
      //x 현재위치, y 이동거리
      const [x, y] = input[i].split(" ").map(k => parseInt(k));
      // 이동해야 할 거리.
      let distance = y - x;
      // 이동 할 수 있는 거리.
      let moveAmount = 0;
      // 이동한 횟수.
      let count = 0;

      while (distance !== 0) {
        if (getSum(moveAmount + 1) <= distance) {
          moveAmount = moveAmount + 1;
          distance = distance - moveAmount;
        } else if (getSum(moveAmount) <= distance) {
          moveAmount = moveAmount ? moveAmount : 1;
          distance = distance - moveAmount;
        } else if (getSum(moveAmount - 1) <= distance) {
          moveAmount = moveAmount - 1;
          distance = distance - moveAmount;
        }
        count++;
      }
      console.log(count);
    }
  }
  process.exit();
});
```
