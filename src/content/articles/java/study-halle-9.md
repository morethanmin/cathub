---
title: "[9주차] 자바스터디 - 예외 처리"
description: "스터디 할래 과제"
category: java
createdAt: "2021-11-13"
---

[##_Image|kage@c3qgJh/btqSWacVeY3/Rz3DFOMvMz4lR6kvFpkARK/img.png|alignCenter|data-filename="title.png" data-origin-width="541" data-origin-height="372" data-ke-mobilestyle="widthContent"|||_##]

# 목표

자바의 예외 처리에 대해 학습하세요.

# 학습할 것 (필수)

- 자바에서 예외 처리 방법 (try, catch, throw, throws, finally)
- 자바가 제공하는 예외 계층 구조
- Exception과 Error의 차이는?
- RuntimeException과 RE가 아닌 것의 차이는?
- 커스텀한 예외 만드는 방법

## 자바에서 예외 처리 방법 (try, catch, throw, throws, finally)

### 예외 처리 방법

자바에서 예외처리를 하기 위해서는 try, catch, finally 문을 사용한다.

```java
try{
    예외가 발생할 수 있는 코드
} catch(Exception e1){
    e1 예외가 발생할 경우 코드
} catch(Exception e2){
    e2 예외가 발생할 경우 코드
} finally{
    예외 발생과 관계없이 마지막에 실행되는 코드
}
```

예외를 발생시키기 위해서는 throw 키워드를 사용한다.

```java
Exception error = new Exception("에러 발생");
throw error;
```

이때 catch의 인자는 발생한 예외에 대한 인자이다. catch와 finally는 꼭 넣어야 하는게 아닌 optional이며, 다른 제어문과는 다르게 중괄호({})를 생략할 수 없다는 점은 주의해야한다.

메소드를 선언할 때 throws 키워드를 사용하면 해당 메소드에서 발생할 수 있는 예외를 미리 명시할 수 있다.

```java
public class example{
    static void occurError(){
        try{
            throw new Exception();
        }catchj (e){
            System.out.println("메소드에서 예외 발생!");
        }
    }
    public static void main(String[] args){
        try{
            occurError();
        }catch (e){
            System.out.println("메인에서 예외 발생!")
        }
    }
}
```

다음과같은 코드가 있다. 어떤 내용이 print될까? 정답은 "메인에서 예외 발생!" 이 print 된다. main 메소드에서는 호출된 메소드에서 예외가 발생했다는 사실을 알 수 없기 때문이다. 또한 메소드에서 try / catch 문을 생략할 수 없다. 따라서 throws를 사용한다. 해당 코드를 throws를 사용하면 다음과 같다.

```java
public class example{
    static void occurError() throws Exception{
        throw new Exception();
    }
    public static void main(String[] args){
        try{
            occurError();
        }catch (e){
            System.out.println("메인에서 예외 발생!")
        }
    }
}
```

## 자바가 제공하는 예외 계층 구조

자바에서 발생하는 예외 계층 구조는 다음과같다.

사진

### Checked Exceptions

Checked Exceptions은 말 그대로 컴파일하는 시점에서 확인되는 예외를 말한다. 해당 예외는 컴파일 할 때 예외가 확인이 되면서 컴파일 자체가 안된다.

하지만 try-catch로 예외처리를 해주거나, throws로 예외를 던져주게 되면 컴파일은 가능하다.

### Unchecked Exceptions

확인할 수 없는 예외로 작동시점에서야 발생할 수 있는 예외들을 말한다.

## Exception과 Error의 차이는?

### 오류와 예외

프로그램을 작성하는 동안 작성하는 프로그래밍 언어의 문법에 맞지 않게 작성하면 나타나는 오류는 **문법오류**(syntax error)를 발생시킨다.

하지만 문법에 맞게 작성을 하더라고 프로그램이 실행되면서 예상하지 못한 상황이 생겨 날 수 있고 이는 **오류**와 **예외** 두가지로 구분할 수 있다.

**오류**는 주로 시스템 레벨에서 작동에 문제를 발생시키는 경우이고 실행중인 프로그램을 종료시키게 된다. 이러한 오류는 대부분 미리 예측할 수 가 없기 때문에 오류를 처리할 수 없다.

**예외**도 오류처럼 프로그램을 비정상적으로 종료시키게 되지만, 오류와는 다르게 개발자가 예외가 발생할 수 있는 상황을 예측하여 처리할 수 있다.

## 커스텀한 예외 만드는 방법

Exception도 또한 클래스이기때문에 Exception 클래스를 상속받아 자신만의 예외 클래스를 정의할 수 있다.

```java
class customException extends Runtime Exception {
    ...
}
```
