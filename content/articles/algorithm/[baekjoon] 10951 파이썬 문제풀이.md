---
title: "[baekjoon] 10951 파이썬 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-15"
---

## 문제

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

## 입력

입력은 여러 개의 테스트 케이스로 이루어져 있다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

## 출력

각 테스트 케이스마다 A+B를 출력한다.

# 풀이

다른 A+B와 다른 점이 크게는 없지만 입력이 끝날 때까지 A+B를 출력하는 문제이다. EOF에 대해서 알아보라고 나와있다.

특별한 테스트 케이스 입력되지 않아도 스크립트가 종료될 수 있도록 `try except`로 예외처리를 해주면 된다.

```python
while True:
  try:
    A,B = map(int, input().split())
    print(A+B)
  except:
    break
```
