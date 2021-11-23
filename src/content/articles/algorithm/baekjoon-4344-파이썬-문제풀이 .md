---
title: "[baekjoon] 4344 파이썬 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-22"
---

## 문제

대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

## 입력

첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

## 출력

각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

## 풀이

문제에서 시키는 대로 하면 되고, filter나 map같은 메서드를 사용하는 경우에 꼭 다시 list로 변환해주도록 하자. 또한 format을 사용해야 소수점이 0인 경우에도 3째 자리까지 표현해줄 수 았다.

```python
C = int(input())
for i in range(C):
  T = list(map(int,input().split()))
  N = T[0]
  scores = T[1:N+1]
  sum = 0
  for j in range(N):
    sum = sum + scores[j]
  avg = sum/N
  result = format(len(list(filter(lambda x: x>avg, scores)))/N * 100, ".3f")
  print(f"{result}%")
```
