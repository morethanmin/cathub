---
title: "[12주차] 자바스터디 - 애노테이션"
description: "스터디 할래 과제"
category: java
createdAt: "2021-12-04"
---

[##_Image|kage@c3qgJh/btqSWacVeY3/Rz3DFOMvMz4lR6kvFpkARK/img.png|alignCenter|data-filename="title.png" data-origin-width="541" data-origin-height="372" data-ke-mobilestyle="widthContent"|||_##]

# 목표

자바의 애노테이션에 대해 학습하세요.

# 학습할 것 (필수)

- 애노테이션 정의하는 방법
- @retention
- @target
- @documented
- 애노테이션 프로세서

## 애노테이션 정의하는 방법

### Annotation 이란?

자바 개발을 하면서 다들 @Overrive 같은 표시들을 봐왔다. 이것이 바로 애노테이션인데 이 애노테이션은 JEE 5부터 추가된 요소이다.

애노테이션을 통해 데이터의 유효성 검사 등 다양한 목적으로 쓰이고 있지만, 메타 데이터의 비중이 가장 크다고 한다.

여기서 메타데이터는 데이터를 설명하기 위한 데이터를 말한다.

### 애노테이션 정의하는 방법

애노테이션은 보기와 같이 @키워드 를 통해 정의하고 사용할 수 있다.

### java에서 제공하는 애노테이션

#### @Override

- 선언 된 메소드가 오버라이드 되었음을 나타낸다.
- 상위 클래스에서 메소드를 찾을 수 없을 경우 에러를 발생시킨다.

만약 해당 애노테이션을 사용하지 않는다면 오버라이드 되었음을 컴파일러는 알 수 없게 되는 경우가 생길 수 있는데 그런 경우를 방지할 수 있는 것 같다.

#### @Deprecated

- 해당 메소드는 더이상 사용하지 않는다고 표시한다.
- 해당 메소드를 사용할 경우 경고를 발생시킨다.

#### @SuprressWarnings

해당 애노테이션을 사용할 경우 컴파일 경고를 무시한다.

#### @SafeVarargs

Java7부터 생긴 애노테이션으로 제너릭과 같은 가변인자의 매개변수를 사용할 때 경고를 무시한다.

#### @FunctionalInterface

- Java8부터 생긴 애노테이션으로 함수형 인터페이스임을 지정하는 애노테이션이다.
- 함수형 인터페이스의 형태를 갖지 않을 경우 오류를 발생시킨다.

## 애노테이션의 구성

애노테이션의 구조를 보기 위해 아래의 커스텀 애노테이션을 보자

```java

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface CustomAnnotation {
	boolean isCheck() default true;
}

```

위에서 두줄에 코드에 있는 @Target과 @Runtime은 메타 애노테이션이다. 먼저 메타애노테이션에 대해서 알아보자.

### @Retention

애노테이션이 어느 시점까지 영향을 주는지를 결정할 수 있다. 다음과 같은 종류가 있다.

- RetentionPolicy.SOURCE
- RetentionPolicy.CLASS
- RetentionPolicy.RUNTIME

첫번째는 컴파일 이전까지만 애노테이션이 영향을 주고, 두번째는 컴파일러가 클래스를 참조하는 시점까지 애노테이션이 영향을 주며, 세번째는 런타임시점까지 애노테이션이 영향을 준다.

### @Target

애노테이션이 적용될 타겟을 결정할수 있다. 다음과 같은 종류가 있다.

- ElementType.PACKAGE
- ElementType.TYPE
- ElementType.ANNOTATION_TYPE
- ElementType.CONSTRUCTOR
- ElementType.FIELD
- ElementType.LOCAL_VARIABLE
- ElementType.METHOD
- ElementType.PARAMETER
- ElementType.TYPE_PARAMETER
- ElementType.TYPE_USE

### @Documented

애노테이션을 Javadoc에 포함시키는 메타 애노테이션이다.

## 어노테이션 프로세서

자바의 컴파일 단계에서 정의된 애노테이션들을 분석하고 처리하기 위해 사용되는 훅을 말한다.

### 애노테이션 프로세서 사용

대표적으로 룸복이 있다.

외에 참고 https://elfinlas.github.io/2017/12/14/java-annotation/
