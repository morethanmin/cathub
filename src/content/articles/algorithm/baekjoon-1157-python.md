---
title: "[baekjoon] 1157 파이썬 문제풀이"
description: 알고리즘 문제풀이
category: algorithm
createdAt: "2021-11-04"
---

## 문제

알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

## 입력

첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

## 출력

첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

## 풀이

우선 알파벳이 담겨있는 배열을 선언한다. 사실 마지막에 대문자로 출력을 해야하기에 대문자로 선언해주는게 맞지만 하나하나 작성하기 귀찮아서 소문자로 예전에 선언해두었던 걸 사용했다.

그리고 단어를 입력받아 단어에 각각의 알파벳이 몇 개씩 들어있는지를 for문을 이용해 확인한다. 이후 들어간 개수의 최대값을 구하고, 구한 최대값이 1개인지, 2개인지 확인해주어서 1개인경우에는 그대로 출력해주고, 두개(또는 두개 이상) 인경우에는 ?를 출력해주면 된다.

```python
word = input().lower()
alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
counts = []
for iIdex, i in enumerate(alphabets):
  counts.append(0)
for iIdx, i in enumerate(word):
  for jIdx, j in enumerate(alphabets):
    if i == j:
      counts[jIdx] = counts[jIdx] + 1
max = max(counts)
maxone = 0
maxtwo = 0
result = 0
try:
  maxone = counts.index(max)
  maxtwo = counts.index(max,maxone+1)
except:
  result = alphabets[maxone].upper()
else:
  result = "?"
print(result)
})
```
