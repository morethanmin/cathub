---
title: "[baekjoon] 1065 파이썬 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-10-27"
---

## 문제

어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

## 출력

첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

## 풀이

숫자를 string으로 바꾸어 연속된 두 개의 수의 차이를 Set에 저장하고, 해당 Set의 length가 1인 경우에는 한수이다.

```python
def isHanSu(n):
  strN = str(n)
  if len(strN) == 1:
    return True
  else:
    chaSet = set()
    for i in range(len(strN) - 1):
      chaSet.add(int(strN[i]) - int(strN[i+1]))
    if len(list(chaSet)) == 1:
      return True
    else:
      return False

N = int(input())
count = 0
for i in range(N):
  if isHanSu(i+1):
    count = count + 1

print(count)
```
