---
title: "[3주차] 자바스터디 - 연산자"
description: "스터디 할래 과제"
category: java
createdAt: "2021-10-02"
---

[##_Image|kage@c3qgJh/btqSWacVeY3/Rz3DFOMvMz4lR6kvFpkARK/img.png|alignCenter|data-filename="title.png" data-origin-width="541" data-origin-height="372" data-ke-mobilestyle="widthContent"|||_##]

## **목표**

---

자바가 제공하는 다양한 연산자를 학습하세요.

## **학습할 것**

---

- 산술 연산자
- 비트 연산자
- 관계 연산자
- 논리 연산자
- instanceof
- assignment(=) operator
- 화살표(->)연산자
- 3항 연산자
- 연산자 우선 순위
- (optional) Java 13. switch 연산자

## 0\.연산자의 정의

---

다양한 연산자에 대해서 알아보기 전에 연산자의 개념을 알아볼 필요가 있다.

연산자(operator)는 +,-,\*,/ 같이 이미 정의되어있는 연산을 수행하는 문자 또는 문자 조합의 기호를 말한다.

피연산자(operand)는 연산(operation)에 참여하는 변수나 상수를 말한다.

연산자와 피연산자로 이루어진 연산식을 우리는 표현식 이라고 한다.

## **1\.산술 연산자**

---

**산술 연산자**의 종류는 +, -, \*, /, % 가 있다. 이를 테이블로 정리하면 다음과 같다.

| 연산자 | 의미   | 예시 | 결과 | 비고                                                                                      |
| ------ | ------ | ---- | ---- | ----------------------------------------------------------------------------------------- |
| +      | 더하기 | 3+7  | 10   | +와 -는 **부호 연산자**로 사용되기도 한다. 또한 **문자열을 연결하는 기능**을 하기도 한다. |
| -      | 빼기   | 3-7  | -4   |
| \*     | 곱하기 | 3\*7 | 21   |
| /      | 나누기 | 7/2  | 3    | 정수끼리의 나누기는 결과도 정수                                                           |
| %      | 나머지 | 7%2  | 1    | 백분율이 아님                                                                             |

산술 연산자는 대입연산자와 함깨 **축약**하여 표현 할 수 있다.

```java
x += y; // x = x+y 와 같은 의미
x -= y; // x = x-y 와 같은 의미
x *= y; // x = x*y 와 같은 의미
x /= y; // x = x/y 와 같은 의미
x %= y; // x = x%y 와 같은 의미
```

+연산자와 -연산자를 두번 쓰면 **증감 연산자**로 사용된다. 변수의 앞에쓰면 전위연산자, 뒤에쓰면 후위연산자 이고 연산되는 방식이 다르므로 주의해서 사용해야 한다.

## **2\.비트 연산자**

---

비트연산자는 **비트이동연산자**와 **비트논리연산자**로 크게 두가지로 나눌수 있다.

**비트 논리 연산자**는 피연산자의 값을 비트 단위로 논리연산을 수행한다. 따라서 결과도 정수로 반환된다. &(AND), |(OR), ^(XOR) , ~(complement)로 총 4가지가 있다.

### &(AND)

피연산자를 비트 단위로 변환했을 때 (2진수로 변환) 그 값에서 AND 연산을 수행한다.

```java
3&5
//3은 비트(2진수)로 011
//5는 비트(2진수)로 101
//AND 연산 수행 = 001
//정수로 반환 = 1
```

그림

### |(OR)

피연산자를 비트 단위로 변환했을 때 (2진수로 변환) 그 값에서 OR 연산을 수행한다.

```java
3|5
//3은 비트(2진수)로 011
//5는 비트(2진수)로 101
//OR 연산 수행 = 111
```

### ^(XOR)

피연산자를 비트 단위로 변환했을 때 (2진수로 변환) 그 값에서 XOR 연산을 수행한다.

```java
3^5
//3은 비트(2진수)로 011
//5는 비트(2진수)로 101
//XOR 연산 수행 = 110
```

자바에서 음수는 2의 보수로 표현하고 있기 때문에 정수 x에서 음수는 ~x+1로 표현된다. 또한 음의 정수의 MSB(가장 왼쪽 비트)는 항상 1이다.

### |(OR)

피연산자를 비트 단위로 변환했을 때 (2진수로 변환) 그 값에서 OR 연산을 수행한다.

보수 연산자는 단항 연산자로 한 개의 피연산자만 필요로 한다.

```java
^3
//3은 비트(2진수)로 00000000 000 ~(비트생략) 011
//3의 보수 = 11111111 111 ~(비트생략) 100

```

**비트이동연산자**는 비트를 이동시키는 연산자이다. 이때 비트를 이동시키면서 생기는 새로운 비트는 0으로 채워진다.

그림

**비트 축약 대입 연산자**는 산술연산자의 축약과 같은 의미로 작용한다.

## **3\.관계 연산자**

---

관계연산자는 2개의 피연산자의 크기를 비교하는 연산자이다. 연산 결과는 항상 true와 false로 출력된다.

그림

## **4\.논리 연산자**

---

논리연산자는 비트 논리연산자에서 연산자를 하나 더 붙인 모양을 가지고 있으며, 그 의미는 다음과 같다.

그림

한가지 알아두어야 할 것은, 논리연산자에서 피연산자 두개중 왼쪽 피연산자 만으로 결과값이 도출이 된다면 오른쪽 피연산자는 수행되지 않는다. 별로 중요하지 않다고 여길 수도 있지만 증감연산자와 같이 사용하는 경우에는 예상한 값과 결과값이 다르게 나올 수 있기때문에 조심해서 사용하자.

## **5\.instanceof**

---

instanceof는 클래스로부터 나온 객체타입을 확인하는데 사용한다. 클래스가 붕어빵틀이라면 객체는 붕어빵인거 알고있지? 반환값은 true 또는 false를 반환한다.

```java
class A{}
class B extends A{}
class instanceofEx01 {



public static void main(String[] args) {

  A a = new A();
  B b = new B();



  System.out.println("a instanceof A : " + (a instanceof A));
  System.out.println("b instanceof A : " + (b instanceof A));
  System.out.println("a instanceof B : " + (a instanceof B));
  System.out.println("b instanceof B : " + (b instanceof B));

  }

}

```

<결과>

a instanceof A : true
b instanceof A : true
a instanceof B : false
b instanceof B : true

## **6\.assignment(=) operator**

---

- 연산자의 오른쪽 값을 왼쪽 변수에 저장하는 연산자다.
- 대입 연산자의 왼쪽은 반드시 값을 저장할 수 있는 변수이다.
  - 대입 연산자는 할당 또는 치환 연산자라고도 부른다.

```java
int day = 365;
```

## **7\.화살표(->)연산자**

---

화살표 연산자는 자바 8부터 생겨난 람다식이다. 람다식은 식별자 없이 실행 가능한 함수라고 보면 이해하기 쉽다. 람다식의 사용법은 다음과 같다.

```
(매개변수1,매개변수2, ...) -> {내용...}
```

인데 자바스크립트에 있었던 문법과 같은 것 같다. 다음과 같이 메소드를 람다 표현식을 활용하여 표현하게 되면 클래스를 작성하고 객체를 생성하지 않아도 바로 메소드를 사용 할 수 있다.

## **8\.3항 연산자**

---

삼항연산자는 자바에서 유일하게 피연산자를 세 가지나 가지는 조건 연산자라고 한다. 문법은 다음과 같다.

```
조건식 ? 반환값A: 반환값B
```

true나 false를 가져다 줄수 있는 조건식을 쓰고 만약 true이면 반환값A, false이면 반환값B를 가져옵니다.

## **9\.연산자 우선 순위**

---

여려 연산자가 섞여있다면, 연산자 우선순위에 의해 계산 순서가 결정되는데, 기본적인건 알고 있는 것이 좋다.
사진

## **10\.(optional) Java 13. switch 연산자**

---

Java 12부터 switch 연산자가 추가되었다고 한다. 원래 존재했었던 switch 조건문이아니라 연산자가 추가된 것이다.

기존에 switch statement에서는 break를 사용하고, return값이 존재 할 수 없었었지만 switch operator는 break를 사용하지 않아도 되고 return 값이 존재할 수 있다.

```java

public class Main {
    public static void main(String[] args) {

        //Java 12 이전
        int num = 1;
        int returnNum = 0;
        switch(num){
            case 1:
                returnNum = 1;
                System.out.println("1들어옴");
                break;
            case 2:
                returnNum = 2;
                System.out.println("2들어옴");
                break;
            case 3:
                returnNum = 3;
                System.out.println("3들어옴");
                break;
        }
        System.out.println("returnNum : [ " + returnNum + " ]");

        //Java 12
        returnNum = switch(num){
            case 1 -> 1;
            case 2 -> 2;
            default -> throw new IllegalStateException("Unexpected value: " + num);
        };
        System.out.println("returnNum : [ " + returnNum + " ]");


        //Java13
        returnNum = switch(num){
            case 1 : yield 3;
            default : throw new IllegalStateException("unexpected value : " + num);
        };

        System.out.println("returnNum : [ " + returnNum + " ]");

    }
}

```

결과는 다음과같다.

1들어옴
returnNum : [ 1 ]
returnNum : [ 1 ]
returnNum : [ 3 ]

switch 연산자 참고 : https://castleone.tistory.com/6
