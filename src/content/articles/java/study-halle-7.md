---
title: "[7주차] 자바스터디 - 패키지"
description: "스터디 할래 과제"
category: java
createdAt: "2021-10-30"
---

# 목표

자바의 패키지에 대해 학습하세요.

# 학습할 것 (필수)

- package 키워드
- import 키워드
- 클래스패스
- CLASSPATH 환경변수
- \-classpath 옵션
- 접근지시자

# package 키워드

## pakage?

자바에서 패키지(pakage)란 클래스와 인터페이스를 묶어놓은 집합입니다. 클래스와 인터페이스를 묶어놓음으로써 좀더 효율적으로 관리 할 수 있습니다.

물리적인 의미로는 하나의 경로를 의미하게됩니다.

디렉터리를 의미하고 있기 때문에 패키지에 속해있는 클래스나 인터페이스 파일들은 모두 해당 패키지 명의 디렉터리에 포함되어 있습니다.

패키지는 다른 패키지를 포함할 수 있고 점으로 구분할 수 있습니다.

다음 예제는 Scanner 클래스의 패키지 이름입니다.

```java
java.util.Scanner
```

위의 내용으로 Scanner 클래스는 java.util에 속해있음을 알 수 있습니다. 다음과같이 자바에서는 여러 기본적인 패키지를 개발자에게 재공하고 잇습니다.

예를 들어, java.lang은 자주 사용되는 패키지 이지만 한번도 import하여 사용하지는 않습니다.

즉, 기본적인 패키지는 import하지 않아도 자동적으로 자바에서 불러옵니다.

## pakage 선언

패키지를 선언하는 방법은 아래와 같습니다.

```java
pakage 해당패키지명;
```

자바의 클래스는 반드시 하나 이상의 패키지에 포함되어야 합니다.

만약 어떠한 패키지의 선언도 되어있지않다면, 컴파일러는 이름없는 패키지를 포함하여 컴파일 하게 됩니다.

따라서, 패키지명을 기재하지않은 모든 클래스는 다 이름없는 패키지에 포함되어있다고 불 수 있습니다.

# import 키워드

## import?

위에서 배운 방법대로 선언된 패키지에 속한 여러 클래스를 다른 파일에서 이용하기 위해서는 패키지의 경로를 포함하여 명시해 사용해야합니다.

하지만 매번 경로를 포함해 명시하는 것은 비 효율적이기 때문에 import문을 이용해 간단하게 표기해줄 수 있습니다.

import문을 통해 컴파일러는 클래스의 패키지에 관한 정보들을 미리 제공받습니다.

## import 선언

import를 선언하는 방법은 다음과 같습니다.

```java
import pakagename.classname; //패키지에 있는 classname이라는 클래스에 접근할 수 있게 된다.
import pakagename.* //패키지에 포함되어있는 모든 클래스에 접근할 수 있게 된다.
```

# 클래스패스

## classpath?

클래스가 위치하는 경로를 지정해서 자바가 필요로하는 클래스를 로드할 수 있도록하는 것이다. 말로하면 어려우니 직접 실습을 해보자

우선 빈 디렉터리에 다음과같은 test.java 파일을 만들어 코드를 작성한다.

```java
class test{

}
class A{

}
```

해당 파일을 컴파일 해보도록 하자. 그러면 다음과 같이 두개의 파일이 생성되는 것을 알 수 있다.

- test.class
- A.class

이때, A라는 클래스 파일을 folder라는 폴더를 만들어 해당 디렉터리에 넣고 실행을 해보자.

```
java test
```

그러면 에러가 나타나게 된다. 클래스를 찾을 수 없도록 다른 폴더에 옮겨두었으니 당연하다. 이때 클래스패스를 이용 할 수있다.

```
java -classpath ".;folder" test
```

해당 명령어로 클래스패스를 지정해 클래스의 위치를 지정해주게 되면 정상적으로 실행할 수 있게 된다.

이와같이 클래스 패스는 자바를 실행하게 될 때 클래스의 위치를 지정하는 역할을 하고 있다.

## 환경변수

위와같이 자바를 실행할 때 마다 클래스패스를 지정하는것이 불편할 수있다. 이때 CLASSPATH 환경변수를 지정하면 편리하다.

자바에서 사용하는 환경변수는 다음과 같다.

### path

OS에서 명령어를 실행 할때 순위를 지정하는 환경변수.

### CLASSPATH

자바 가상 머신이 작동할 때 JVM의 클래스 로더에서 해당 환경 변수를 호줄하여 설정되어있는 디렉토리가 호출되면, 해당 디렉토리에 있는 클래스 파일들을 먼저 JVM에 로드하게 된다.

따라서 CALSSPATH 환경 변수에는 필수적인 클래스가 있는 디렉토리를 등록하는 것이 일반적이다.

### JAVA_HOME

자바 개발환경이 설치된 디렉토리를 설정하기 위한 환경 변수이다.

# 접근 제어 지시자

필드와 메소드는 접근제어 지시자를 이용해 접근 범위를 지정해 줄 수 있습니다.

사진
