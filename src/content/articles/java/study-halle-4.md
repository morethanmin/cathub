---
title: "[4주차] 자바스터디 - 제어문"
description: "스터디 할래 과제"
category: java
createdAt: "2021-10-09"
---

[##_Image|kage@c3qgJh/btqSWacVeY3/Rz3DFOMvMz4lR6kvFpkARK/img.png|alignCenter|data-filename="title.png" data-origin-width="541" data-origin-height="372" data-ke-mobilestyle="widthContent"|||_##]

# 목표

자바가 제공하는 제어문을 학습하세요.

# 학습할 것 (필수)

선택문  
반복문

# 과제 (옵션)

## 과제 0. JUnit 5 학습하세요.

- 인텔리J, 이클립스, VS Code에서 JUnit 5로 테스트 코드 작성하는 방법에 익숙해 질 것.
- 이미 JUnit 알고 계신분들은 다른 것 아무거나!
- [더 자바, 테스트](https://www.inflearn.com/course/the-java-application-test?inst=86d1fbb8)강의도 있으니 참고하세요~

## 과제 1. live-study 대시 보드를 만드는 코드를 작성하세요.

- 깃헙 이슈 1번부터 18번까지 댓글을 순회하며 댓글을 남긴 사용자를 체크 할 것.
- 참여율을 계산하세요. 총 18회에 중에 몇 %를 참여했는지 소숫점 두자리가지 보여줄 것.
- [Github 자바 라이브러리](https://github-api.kohsuke.org/)를 사용하면 편리합니다.
- 깃헙 API를 익명으로 호출하는데 제한이 있기 때문에 본인의 깃헙 프로젝트에 이슈를 만들고 테스트를 하시면 더 자주 테스트할 수 있습니다.

## 과제 2. LinkedList를 구현하세요.

- LinkedList에 대해 공부하세요.
- 정수를 저장하는 ListNode 클래스를 구현하세요.
- ListNode add(ListNode head, ListNode nodeToAdd, int position)를 구현하세요.
- ListNode remove(ListNode head, int positionToRemove)를 구현하세요.
- boolean contains(ListNode head, ListNode nodeTocheck)를 구현하세요.

## 과제 3. Stack을 구현하세요.

- int 배열을 사용해서 정수를 저장하는 Stack을 구현하세요.
- void push(int data)를 구현하세요.
- int pop()을 구현하세요.

## 과제 4. 앞서 만든 ListNode를 사용해서 Stack을 구현하세요.

- ListNode head를 가지고 있는 ListNodeStack 클래스를 구현하세요.
- void push(int data)를 구현하세요.
- int pop()을 구현하세요.

## 과제 5. Queue를 구현하세요.

- 배열을 사용해서 한번
- ListNode를 사용해서 한번.

# 제어문이란?

코드는 일반적으로 위에서 아래로 작동합니다. 이러한 코드의 실행방식을 일정한 조건을 주어 제어하도록 도와주는 문장을 제어문이라고 합니다.

제어문은 조건문과 반복문으로 나누어볼 수 있습니다.

## 조건문

조건문은 일정한 조건에 맞는 코드를 실행하는 명령입니다.

### if문

if문은 주어진 조건문이 true 일때, 주어진 명령문을 실행합니다.

```java
if(조건식1)명령문;  //한줄일때는 괄호를 사용하지 않아도 된다.
if(조건식1){
    명령문1;
    명령문2;
}  //여러 줄일때는 괄호를 사용해 표현한다.
```

또한 else를 사용하여 조건문이 false일경우 명령어를 실행할 수 도 있습니다.

```java
if(조건식1){
    명령문1;    //조건식이 true인경우
    명령문2;
} else {
    명령문3;    //조건식이 false인경우
}
```

마지막으로 else if를 사용하여 다시 여러번 조건문을 사용할 수 있습니다.

```java
if(조건식1){
    명령문1;    //조건식이 true인경우
    명령문2;
} else if(조건식2) {
    명령문3;    //조건식이 false인경우
}
```

해장 조건문은 중첩이 가능한 점을 참고해야합니다.

### switch문

선택문으로는 switch문이 있다. if / else 문과 같이 주어진 조건 값에 따라 다른 명령을 수행하기 위해 사용된다.

switch 문의 조건 값은 int형으로 승격 가능한 값만 사용이 가능하다고 한다. (byte, short, char, int 형을 가진 변수나 리터럴 값)

또한 데이터를 객체로 포장해주는 래퍼 클래스에서도 int형으로 승격이 가능하면 사용할 수 있다.

마지막으로 **enum 키워드**를 사용한 **열거체**와 String 클래스의 객체에서도 사용 할 수 있다.

기본적인 사용법은 다음과 같다.

```java
switch(조건) {
    case 값A:
        값이 A일때 실행할 내용;
        break; //break를 하지 않으면 아래 코드도 실행하게 된다.
    case 값B:
        값이 B일때 실행할 내용;
        break; //break를 하지 않으면 아래 코드도 실행하게 된다.
    default:
        나머지 경우에 실행할 내용;
        break;
}
```

## 반복문

반복문은 같은 명령을 반복하여 수행할 때 사용합니다.

### while문

while문은 조건식이 false 일때까지 해당 명령을 반복하여 수행합니다.

```java
while(조건식) {
    명령문; //참인경우에만 계속 실행된다.
}
```

조건식이 처음부터 false인 경우 한번도 명령문을 수행하지 않습니다.

### do/ while문

do / while문은 while문과 동일하지만 조건식을 마지막에 확인합니다.

```java
do {
    명령문;
} while (조건식);
```

조건식이 처음부터 false여도 한번은 명령문이 실행되게 됩니다.

### for 문

for문도 while문과 마찬가지로 조건식이 true일때만 명령문을 실행하지만, 해당 조건문을 바꿔주는 명령식과 초기값을 할당해줄 수 있습니다.

```java
for(초기값; 조건식; 명령식){
    명령문
}
```

(optional 추가 예정)

### Enhanced for 문

### 숙제
