---
title: "[6주차] 자바스터디 - 상속"
description: "스터디 할래 과제"
category: java
createdAt: "2021-10-23"
---

# 목표

자바의 상속에 대해 학습하세요.

# 학습할 것 (필수)

- 자바 상속의 특징
- super 키워드
- 메소드 오버라이딩
- 다이나믹 메소드 디스패치 (Dynamic Method Dispatch)
- 추상 클래스
- final 키워드
- Object 클래스

## 자바 상속의 특징

### 상속(inheritance)

상속은 하위클래스가 상위클래스로부터 필드와 메소드를 물려받을 수 있는 특징을 가지고 있다.
차량이 있을 때 자전거, 자동차, 기차 등으로 하위클래스를 생성할 수 있다. 이때 하위클래스는 차량으로부터 상속받는다는 의미로 extends 라고 입력한다.

이때 차량에 정의될 수 있는 필드와 메소드는 하위클래스에서 상속받아 사용할 수 있다.

상위클래스를 super 클래스, parent 클래스, 또는 base 클래스라고 부르고
하위클래스를 sub 클래서, child 클래스, derived 클래스라고 칭한다.

Vehicle.java

```java
public class Vehicle {
    public String name = "차량";
    public double speed;
    public int seater;
}
```

Cycle.java

```java
public Cycle extends Vehicle {
    public String name = "자전거";
}
```

Car.java

```java
public Car extends Vehicle {
    public String name = "자동차";
    public int displacement; // 배기량
}
```

Train.java

```java
public Train extends Vehicle {

}
```

### 업 캐스팅

업 캐스팅은 상속관계에서 하위 객체가 상위 객체 변수에 대입하는 것을 말한다.

### 다운 캐스팅

다운 캐스팅은 상속관계에서 상위 객체가 하위 객체 변수에 대입하는 형변환을 말한다.
이런 다운 캐스팅은 반드시 명시적인 형 변환 연산자가 필요하다. 또한 다운캐스팅을하면서 실제 객체가 할당되지 않는다면 에러가 발생하므로 주의하자.

## super 키워드

위에서 예시를 든 Vehicle.java와 Car.java가 있다 둘다 name이라는 같은 이름으로 변수를 선언했기 때문에 자기자신과 상위 객체를 구분해주는 this와 super 키워드를 사용할 필요가 있다.

this는 객체 자신을 의미하는 키워드이고, super는 상위 객체를 의미하는 키워드라고 이해하면 된다.

Car.java

```java
public Car extends Vehicle {
    public String name = "자동차";
    public int displacement; // 배기량

    public void pirintInfo() {
        System.out.println(super.name + ":" + this.name);
    }
}
```

또한 생성자를 호출 할 때 상속을 받는 하위 클래스는 상위 클래스의 생성자를 무조건 호출한다. 이때 하위클래스에서 상위클래스의 생성자를 super()라고 칭한다.

생성자를 작성하지 않으면 자동으로 생성자가 생긴다고 했었는데, 위에서 든 car로 예시를 들면 다음과 같다.

하나 참고해야할 사항은 생성자 호출에 의해 객체가 생성 될 때, 상속을 받고있는 하위 객체는 항상 상위객체를 위한 필드와 메소드마 우선적으로 생성되고 하위객체가 생성된다.

Car.java

```java
public Car extends Vehicle {
    public String name = "자동차";
    public int displacement; // 배기량

    public Car(){
        super();
    }

    public void pirintInfo() {
        System.out.println(super.name + ":" + this.name);
    }
}
```

## 메소드 오버라이딩

메소드 오버라이딩은 상속관계에서 상위 클래스의 동일한 메소드를 하위 클래스에서 다시 정의 할 수 있는 것이다. 메소드 재정의, 메소드 대체라고도 표현한다.

이러한 메소드 오버라이딩을 구현하기 위해서는 몇가지 조건을 충족해야한다.

- 메소드의 반환 타입, 메소드 이름, 매개변수는 같아야한다.
- 접근 지정자는 하위 클래스의 메소드가 같거나 더 공개적이여야한다.
- 상위 클래스의 메소드 수정자가 final, private인 경우 오버라이딩이 될 수 없다.

어떻게 생각하면 당연하다고 볼 수 도 있겠지만 알아두자.

Person.java

```java
    public class Person {
        public String name;
        public long number;

        public void printInfo{
            System.out.println("이름 : " + name + "주민번호 : " + number);
        }
    }
```

male.java

```java
    public class male {
        public String name;
        public long number;
        public String sex = "male";

        public void printInfo{
            System.out.println("이름 : " + name + "주민번호 : " + number + "성별 : " + male);
        }
    }
```

비슷한 이름으로 **메소드 오버로딩**이라는 것이 있는데 메소드 오버로딩은 클래스 내부에서 이름이 같지만, 매게변수가 다른 여러 메소드를 구현하는 것을 메소드 오버로딩이라고 한다.

## 다이나믹 메소드 디스패치

### 메소드 디스패치

메소드 디스패치는 어떠한 메소드를 호출할 지 결정해 실제로 실행시키는 과정이라고 한다. 이러한 메소드 디스패치는 동적 메소드 디스패치와 정적 메소드 디스패치가있다.

### 정적 메소드 디스패치

컴파일하는 시점에서 컴파일러가 어떤 메소드를 호출할지 알고 있는경우를 말한다.

### 동적(Dynamic) 메소드 디스패치

컴파일하는 시점에서 컴파일러가 어떤 메소드를 호출할지 모르고 있는 경우이다. 이 경우에는 런타임 시점에서 결정된다.

## 추상 클래스

추상 클래스(abstract class)는 하나 이상의 추상 메소드를 가진 클래스로, 클래스 계층에서 상위에 위치하고 있으며 실제 구현은 안되있고 추상적으로 명시해놓은 클래스다. 따라서 상속을 통해 구현을 해주어야 사용이 가능하다. 키워드 abstract를 붙여 추상클래스임을 명시해주어야한다.

Shape.java

```java
    public abstract class Shape {
        protected double x,y;

        public void drawCenter() {
            System.out.println("중심좌표 (x,y) = " + x + "," + y);
        }

        public void draw(); //추상 메소드
    }
```

Circle.java

```java
    public class Circle extends Shape {
        double r;

        public void draw() {
            super.drawCenter();
            System.out.println("반지름: " + r);
            System.out.println("원면적: " + r*r*Math.PI);
        }
    }
```

## final 키워드

전에도 final 키워드에 대해서 공부하였었지만 다시한번 정리해보자.

### 클래스와 final

클래스에 final을 사용하게되면 더이상 상속할 수 없게 된다.

### 메소드와 final

메소드의 반환형 앞에 final을 사용하게 되면 더이상 하위클래스에서 오버라이딩을 할 수 없게 된다.

## object 클래스

자바에서 상속이라는 개념을 정말 필수적인 개념이다. 사실 자바에서 모든 클래스는 Object라는 클래스에 상속되어 있다. 자신이 상속을 하지않았더라도 기본적인 기능을 제공하기 위해 기본적으로 상속이 되어있는 것이다. object 클래스의 메소드 목록은 다음과 같다.

사진

기본적인 메소드에 대해서 알아보자

### toString

toString은 객체를 문자열로 표현해주는 메소드이다. 다음의 코드를 살펴보자.

Circle.java

```java
    public class Circle {

        double r;

        public void setOprands(int r){
            this.r = r;
        }

        public static void main(String[] args) {
            Circle A = new Circle();
            A.setOprands(5);
            System.out.println(A);
            System.out.println(A.toString());
        }
    }
```

다음과같이 두가지 방식으로 출력을 하면 같은 결과가 나오게된다.
toString을 명시하지 않아도 A만 입력해도 toString 메소드가 호출이 되도록 자바에서 특별히 취급하고 있는 메소드이다. 물론 toString을 오버라이딩해서 사용할수도 있다.

### equals

equals는 객체간에 같은지를 비교해주는 메소드이다. 문자열을 비교할 때 자주 사용되므로 문자열을 예시로 들어보자. 우선 java에서 문자열을 생성하는 방법은 2가지가 있다. **new 연산자**를 이용하는 방식과 **리터럴**을 이용하는 방식이다.

객체 생성 연산자인 new연산자를 이용하는 방식부터 살펴보자.

```java
String A = new String("morethenmin");
String B = new String("morethenmin");
System.out.println(A == B);
```

다음결과는 무엇이나올까? 정답은 false이다. ==연산자는 프리미티브 타입에 대해서는 값을 비교한다. 왜냐하면 프리미티브타입은 값을 저장하는 타입이니까.

래퍼런스타입 즉 참조타입은 그 값에 주소를 저장하는 타입이라고 배웠다. 그렇기때문에 당연히 주소값을 비교하게되고 A와 B는 같은 클래스에서 나온 다른 객체이므로 false가 나오는 것이다.

이때 Stirng 클래스에서 내용을 비교하기위해 equals메서드를 오버라이딩 하여서 쉽게 문자열을 비교할 수 있다.

```java
System.out.println(A.equals(B));    //true
```

이러한 객체들은 힙 영역에 저장된다.

리터럴로 문자열을 선언하는 경우는 다음과 같다.

```java
String C = "morethenmin";
String D = "morethenmin";
System.out.println(C == D);
```

다음 결과는 무엇이 나올까? 여기에서는 true가 출력된다. 리터럴은 상수로서 변하지 않는 특성을 가지고 있고 A에 리터럴 문자열을 대입시킨것이다.

따라서 A와 B는 같은 리터럴 문자열 상수를 대입받고 있으므로 둘의 주소는 동일하다.

참고로 이러한 상수들은 메모리의 상수플(Stirng Constant Pool)에 저장된다. 이런 문자열 리터럴은 선언할 때 내부적으로 intern()이라는 메소드를 사용한다. 해당 메소드는 해당 문자열이 상수풀에 있는경우 해당 문자열의 주소를 반환한다. 따라서 new 연산자로 생성된 문자열도 intern을 이용할 수 있다.

```java
A = A.intern();
System.out.println(A == C);
```

이렇게 하면 A객체의 주소도 상수풀에 해당주소를 반환 받기때문에 true를 출력하게 된다.

### clone

클론은 이름 그대로 객체를 복제해주는 기능이다.
