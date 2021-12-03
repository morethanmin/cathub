---
title: "[2주차] 자바스터디 - 자바 데이터 타입, 변수 그리고 배열"
description: "스터디 할래 과제"
category: java
createdAt: "2021-09-25"
---

[##_Image|kage@xqzFw/btqSXkGsMIo/zDKuwpILZwSMmX1LGyGIqk/img.png|alignCenter|width="100%" data-origin-width="541" data-origin-height="372" data-ke-mobilestyle="widthContent"|||_##]

## **목표**

---

자바의 프리미티브 타입, 변수 그리고 배열을 사용하는 방법을 익힙니다.

## **학습할 것**

---

- 프리미티브 타입 종류와 값의 범위 그리고 기본 값
- 프리미티브 타입과 레퍼런스 타입
- 리터럴
- 변수 선언 및 초기화하는 방법
- 변수의 스코프와 라이프타임
- 타입 변환, 캐스팅 그리고 타입 프로모션
- 1차 및 2차 배열 선언하기
- 타입 추론, var

## **1\. 프리미티브 타입 종류와 값의 범위 그리고 기본 값**

---

### 데이터 타입

컴퓨터에서 어떤 값을 저장할 때 비트단위로 저장된다. 쉽게말하면 0과 1로 저장하는것이다. 그렇지만 현실에는 0과 1말고도 다양한 데이터가 존재한다. 10진수 8진수 등등...

따라서 데이터 타입은 컴퓨터에 저장된 데이터를 어떻게 쓰일지 결정한다.

자바의 데이터 타입은 프리미티브 타입(Primitive type)과 레퍼런스 타입(Reference type)으로 나누어져 있다.
우선 프리미티브 타입 종류에 대해서 알아보자.

### 피리미티브 타입이란?

프리미티브 타입은 메모리공간에 직접 데이터를 담는 타입의 데이터를 말한다. 프리미티브 타입의 데이터타입은 다음과 같다.

- 정수형
  - byte(1byte) - 0
  - short(2byte) - 0
  - int(4byte) - 0
  - long(8byte) - 0L
- 논리형
  - boolean(1byte) - false
- 실수형
  - float(4byte) - 0.0F
  - double(8byte) - 0.0
- 문자형
  - char(2byte) -'\\u0000'

메모리크가가 바이트 단위이고 바이트는 8비트이다. 그리고 컴퓨터에는 비트단위로 정된다고 하였으므로 표현할수 있는 범위의 크기는 1바이트 당 2의 8승이 되겠다.

컴퓨터에서 양수 음수를 표현하는 방법은 MSB(Most Significant Bit)으로 최상위 비트이다. 이때 최상위 비트는 가장 왼쪽에 위치한 비트를 말한다. 해당 비트가 0이면 양수, 1이면 음수를 나타낸다.

## **2\. 프리미티브 타입과 레퍼런스 타입**

---

데이터 타입은 두가지로 나누어 진다고 하였는데 위에서 프리미티브 타입에 대해 알아보았으니 레퍼런스 타입에 대해 알아보자.

### 레퍼런스 타입이란?

Reference type은 이름에서 알 수 있듯이 참조하는 타입니다. 실제로 데이터값이 저장되는 것이 아니라 실제 값이 저장되어있는 데이터의 주소를 나타낸다. 참조 타입의 종류로는 클래스, 인터페이스, 배열, 열거 타입이 있다.

이렇게 생성된 데이터 타입은 1주차에 공부한 JVM의 Runtime Date Area에서 런타임 스택 영역과 가비지 컬렉션 힙 영역에 저장된다고 한다.

## **3\. 리터럴**

---

리터럴이란 데이터 그 자체를 말하는 것이다. 이해하기 어려울 수 있지만 코드 내에서 내가 직접 작성한 값을 리터럴 이라고 한다.

## **4\. 변수 선언 및 초기화하는 방법**

---

변수를 선언하는 방법은 변수의 타입 그리고 변수의 이름으로 선언을 한다. 변수의 이름을 짓는 규칙은 여러가지가 있지만 생략하도록 한다.

```java
int value1;
int A, B, C;
```

변수를 초기화하는 방법은 등호를 사용한다. 초기화한다는 것은 데이터를 넣는다는 의미와 같다.

```java
value = 1;
A = 99;
```

## **5\. 변수의 스코프와 라이프타임**

---

### 프리미티브 타입

자바는 다른 언어들과 같은 중괄호를 사용해 스코프를 표현한다. 스코프는 변수 입장에서 해당 변수를 사용할 수 있는 범위라고 볼 수 있다.

만약 스코프가 중첩되어 있다면 어떻게 될까? 예상한대로 그안에 스코프는 바깥 스코프의 범위 안에서 작동한다. 이는 한마디로 바깥 스코프에서 변수를 선언하더라도 안에 있는 스코프에서 선언하지 않는 한 변수가 있는걸로 본다.

### 레퍼런스 타입

레퍼런스타입의 변수는 Gabage Collector와 관련이 있다. 힙 영역에 메모리가 부족하면 GC가 해당영역을 스캔한 다음 참조되지 않고 있는 객체를 없앤다.

## **6\. 타입 변환, 캐스팅 그리고 타입 프로모션**

---

### Primitive type

- Widening type cast: 더 넓은 타입으로의 형 변환하는 경우

  - ex. int to long, byte to short

  ```java
  int value = 10;
  long value2 = value;
  ```

- Narrow type cast: 더 좁은 타입으로의 형 변환하는 경우

  - 값이 손실될 수 있다.
  - ex. long to int, short to byte

  ```java
  long value = 10;
  int value2 = value;
  ```

### Reference type

- Inheritance 관계에서만 가능
- Upcast : subclass → superclass
  - 모든 subclass 는 superclass 의 컨텐츠를 가지고 있으므로 superclass 로의 casting 이 가능하다.
- Downcast: superclass → subclass
  - 모든 superclass 는 subclass 의 **컨텐츠를 가지고 있지 않을 수도 있다.** 그러므로 오류 발생 가능성이 증가한다.

## **7\. 1차 및 2차 배열 선언하기**

---

```java
class ArrayExample {
	public static void main(String[] args) {
        //1차원 배열
        int[] oneDimensionArrayEx1 = {1, 2, 3, 4, 5};
        int[] oneDimensionArrayEx2;
        oneDimensionArrayEx2 = new int[10];

        //2차원 배열
        int[][] twoDimensionArrayEx1 = {{1, 2}, {3, 4}};
        int[][] twoDimensionArrayEx2;
        twoDimensionArrayEx2 = new int[10][10];
    }
}
```

- 1차원 배열
  - oneDimensionArrayEx1 은 Runtime Stack 영역의 힙 영역 주소값을 가진다.
  - Heap 영역에 int 타입 크기의 요소 5개를 할당하여 사용된다.

* 2차원 배열
  - Runtime Stack 영역의 twoDimensionArrayEx1 은 2개의 요소 크기(2개 요소에 주소값을 가지고 있음)를 가진 힙 영역 주소값을 가짐
  - 힙 영역에는 실제 값이 들어있는 요소들과 주소값이 들어있는 요소들로 존재하게 된다.

참고 : https://www.notion.so/2-38b5d67c7f5a48238529bb8f1617ea0d

## **8\. 타입 추론, var**

---

타입 추론은 값을 보고 컴파일러가 어떤 데이터 타입인지 추론한다는 의미이다.

웹개발할 때 자주 쓰이게 되는 javascript는 모든 변수를 var을 사용하는데 이것이 바로 타입추론이다.

타입추론을 사용할 경우 local 변수이여야 하고 선언과 동시에 값이 할당되어야 한다.
