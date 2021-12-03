---
title: "[8주차] 자바스터디 - 인터페이스"
description: "스터디 할래 과제"
category: java
createdAt: "2021-11-06"
---

[##_Image|kage@c3qgJh/btqSWacVeY3/Rz3DFOMvMz4lR6kvFpkARK/img.png|alignCenter|data-filename="title.png" data-origin-width="541" data-origin-height="372" data-ke-mobilestyle="widthContent"|||_##]

# 목표

자바의 인터페이스에 대해 학습하세요.

# 학습할 것 (필수)

- 인터페이스 정의하는 방법
- 인터페이스 구현하는 방법
- 인터페이스 레퍼런스를 통해 구현체를 사용하는 방법
- 인터페이스 상속
- 인터페이스의 기본 메소드 (Default Method), 자바 8
- 인터페이스의 static 메소드, 자바 8
- 인터페이스의 private 메소드, 자바 9

## 인터페이스 정의하는 방법

### 인터페이스 정의

하위 클래스가 여러 상위 클래스를 상속 받을 수 있다면 더 다양한 동작을 구현할 수 있다. 하지만 클래스를 이용해 다중 상속을 하게 되면 여러가지 문제점이 생겨나 자바에서는 클래스를 이용한 다중상속은 지원하지 않는다.

이런 다중 상속의 이점을 이용하기 위해 자바에서 인터페이스를 통해 다중상속을 지원하고 있고, 이러한 인터페이스는 클래스를 작성하는 기본적인 틀을 제공하며, 다른 클래스간의 매개 역할을 담당하는 추상 클래스 역할도 하게 된다.

### 인터페이스 정의하는 방법

인터페이스를 정의하는 방법은 다음과 같다.

```java
접근제어자 interface 인터페이스명 {
    public static final 타입 변수명 = 값;
    //상수여야하며 public static final만 허용하고, 생략해도 public staitc final로 간주한다.

    public abstract void 메소드명();
    //추상이어야하며, public abstract만 허용하고, 생략해도 phblic abstract로 간주한다.
}
```

### 인터페이스 구현하는 방법

인터페이스는 추상 클래스의 일종으로 자신이 직접 인스턴스를 생성할 수는 없다. 구현이 되어있지 않기 때문에 추상 메소드를 구현해 줄 클래스를 선언해주어야 한다.

자바에서 인터페이스를 구현하는 방법은 다음과 같다.

```java
class 클래스명 implements 인터페이스명 {

}
```

만약 구현하지 않은 추상메소드가 있다면 abstract를 선언해 추상클래스로 만들어주어야 한다.

### 인터페이스 레퍼런스를 통해 구현체를 사용하는 방법

인터페이스를 사용하는 예제는 다음과 같다.

```java
interface vehicle {
    public abstract void info();
}

class cycle implements vehicle {
    public void info(){
        System.out.println("I'm vehicle!");
    }
}

class car implements vehicle {
    public void info(){
        System.out.println("I'm car!");
    }
}

public class road {
    public static void main(String[] args){
        cycle a = new cycle();
        car b = new car();
        a.info();
        b.info();
    }
}
```

### 인터페이스 상속

인터페이스는 인터페이스간에 상속이 가능하고 `extends`키워드를 사용하여 상속한다.

또한 인터페이스와 클래스간에는 `implemets`를 사용해 상속을 할수 있으며 이 경우 다중 상속이 가능하다.

```java
interface chicken(){
    void fry();
}

interface pizza(){
    void bake();
}

interface food extends chicken, pizza{

}

class myfood implements food{
    @Override
    public void fry(){

    }
    @Override
    public void bake(){

    }
}
```

### 인터페이스의 기본 메소드 (Default Method), 자바 8

Java 8부터 도입된 개념으로 인터페이스에 구현이 가능한 메소드를 정의 할 수 있게 되었고 `@Override`를 통해 오버라이딩이 가능하고, 오버라이딩을 하지 않는 경우 인터페이스의 구현을 사용할 수 있다.

```java
interface food{
    public default void info(){
        System.out.println("I'm food!");
    }
}

class kimchi implements food{

}

public class Main{
    public static void main(String[] args) {
        kimchi a = new kimchi();
        a.info();
    }
}
```

한가지 조심할 점은 여러 인터페이스를 다중 상속받는 경우 같은 default메소드가 정의되어있다면 필수로 구현을 해주어야한다.

## 인터페이스의 static 메소드, 자바 8

Java 8부터 도입된 개념으로 다른 static처럼 인터페이스에서 함수구현은 가능하지만 상속이 불가능 해진다.

## 인터페이스의 private 메소드, 자바 9

Java 9부터 도입된 개념으로 인터페이스에서 함수구현은 가능하지만 상속이 불가능해진다. static가 다른 점은, 외부에서 메소드를 호출할 수 없게 된다는 것이다.
