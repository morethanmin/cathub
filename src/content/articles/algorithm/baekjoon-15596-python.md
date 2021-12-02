---
title: "[baekjoon] 15596 파이썬 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-25"
---

## 문제

정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

작성해야 하는 함수는 다음과 같다.

- `def solve(a: list) -> int`
  - `a`: 합을 구해야 하는 정수 `n`개가 저장되어 있는 리스트 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
  - 리턴값: `a`에 포함되어 있는 정수 `n`개의 합 (정수)

## 풀이

어려운 부분은 전혀 없지만 자바스크립트와는 다르게 기본적으로 함수를 선언할 때 인자의 타입을 명시할 수 있다는 점만 알고가자!!

```python
def solve(a: list):
  sum = 0
  for i in a:
    sum = sum + i
  return sum
```
