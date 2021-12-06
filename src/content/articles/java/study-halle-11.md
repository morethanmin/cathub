---
title: "[11주차] 자바스터디 - Enum"
description: "스터디 할래 과제"
category: java
createdAt: "2021-11-27"
---

# 목표

자바의 열거형에 대해 학습하세요.

# 학습할 것 (필수)

- enum 정의하는 방법
- enum이 제공하는 메소드 (values()와 valueOf())
- java.lang.Enum
- EnumSet

## enum 정의하는 방법

JDK 1.5 버전 이전에는 자바에서 열거체를 사용할 수 없었지만 JDK 1.5 버전 이후부터는 열거체를 정의한 Enum 클래스를 사용할 수 있게 되었습니다.

자바의 열거체는 열거체를 비교할 때 타입까지도 체크하고, 상숫값이 재정의 되더라도 컴파일 할 필요가 없다는 장점을 가지고 있습니다.

자바에서 열거체를 정의하는 방법은 enum 키워드를 사용하는 방법입니다.

```java
enum 열거체명 {
    상수1,
    상수2,
    ...
    상수N;
}
```

```java
enum School{
    CLASS1,
    CLASS2,
    ...
    CLASSN;
}
```

다음과 같이 정의된 열거체의 상숫값은 0부터 설정되어 1씩 증가되며 설정됩니다.

정의한 열거체를 사용하는 방법은 아래와 같습니다.

```java
열거체명.상수명
```

```java
School.CLASS1
```

원하는 상숫값으로 열거체를 선언하고 싶으면 이름 오른쪽에 괄호를 넣어 상숫값을 명시하면 됩니다.

```java
public enum School{
    CLASS1(24),
    CLASS2(30),
    ...
    CLASSN(13);
}
```

열거체에 선언된 상숫값을 받아오는 방법은 다음과 같이 getValue 메소드를 선언하여 쉽게 받아올 수 있습니다.

```java
public enum School{
    CLASS1(24),
    CLASS2(30),
    ...
    CLASSN(13);

    private final int count;

    School(int count) { //constructer
        this.count = count;
    }
    public int getValue() { //getValue method
        return value;
    }
}
```

## enum이 제공하는 메소드 values()와 valueOf())

자바 열거체의 조상 클래스인 java.lang.Enum 클래스에는 열거체를 다루기 위한 메소드가 포함되어있습니다.

### values()

value() 메소드는 열거체의 모든 상수를 배열로 저장하여 반환하는 메소드입니다.

```java
enum School{
    A,
    B,
    C;
}

public class Main{
    public static void main(String[] args){
        School[] values = School.values();
        for(School value : values){
            System.out.println(value);
        }
    }
}
```

실행 결과:

```
A
B
C
```

### valueOf()

valueOf() 메소드는 문자열을 인수로 받아 문자열과 일치하는 열거체의 상수를 반환하는 메소드입니다.

```java
enum School{
    A,
    B,
    C;
}

public class Main{
    public static void main(String[] args){
        School value = School.valueOf("A");
        System.out.println(value);
    }
}
```

실행결과

```
A
```

## java.lang.Enum

Enum 클래스의 다른 대표적인 메소드는 다음과 같습니다.
|Method|description|
|------|-----------|
|static E values()|열거체를 배열로 반환|
|static E valueOf(String name)|name에 해당하는 열거체 상수를 반환|
|protected void finalize()|해당 Enum클래스가 final 메소드를 갖지 못하게 됨|
|String name()|열거체 상수 이름 반환|
|int ordinal()|열거체 상수의 정의된 순서 반환|

## EnumSet

java.util.EnumSet 클래스는 AbstractSet클래스를 상속하고 있으며 Set 자료구조의 특징을 가지고 있는 클래스이다.

```java
enum School{
    A,
    B,
    C;
}

public class Main{

    public static void main(String[] args){
        EnumSet<School> set;
        set = EnumSet.allOf(School.class);
        System.out.println(set1);
    }
}
```

실행결과

```
set = [A,B,C];
```
