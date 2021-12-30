---
title: "[Spring Basic 1] 시작하기"
description: "스프링 공부해보기"
category: java
createdAt: "2021-12-30"
---

> spring.io에 있는 document를 보고 나름 정리한 글입니다.
> 소스코드는 [이곳](https://github.com/morethanmin/study-spring/tree/main/%5BSpring%20Basic%201%5D%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0) 에서 확인하실 수 있습니다

## 개발환경 설정하기

각자 환경에 맞는 개발환경을 설정해주자. 필수적으로 필요한 프로그램은 ide와 jdk가 되겠다.

## 프로젝트 생성하기

[https://start.spring.io/](https://start.spring.io/) 를 사용해 spring project 시작할 수 있다.

해당 spring initializr를 사용하면 손쉽게 프로젝트를 시작할 수 있지만, 각각이 무슨 역할을 수행해주는지는 짚고 넘어가야한다. 우선 해당 서비스로 프로젝트를 만들면, 기본적으로 스프링 부트가 포함된 프로젝트를 제공한다.

- project
  - marven빌드 도구를 사용할지 gradle 빌드 도구를 사용할지 선택한다. 각각 장단점이 있겠지만 gradle이 여러가지로 이점을 갖고있다.
- languege
  - spring은 java, kotlin, groovy를 지원한다. java선택한다.
- spring boot
  - spring boot version을 선택한다. 이때 snapshot은 개발단계의 프로젝트이다. 최근 릴리즈된 버전 선택하면 된다.
- project metadata : 프로젝트에 대한 데이터를 설정한다.
  - Group : 보통 기업의 도메인 명을 기입한다.
  - Artifact : 빌드 결과물 이름이다.
  - Name : 프로젝트 이름이다.
  - Description : 프로젝트 설명이다.
  - Package name : 패키지 이름이다.
  - Packaging : 배포 형태를 선택한다. (war, jar)
  - Java : 자바 버전 선택하면 된다.
- Dependencies
  - 종석성을 추가할 수 있다. 물론 나중에 build.gardle에 추가할 수도 있다. spring web 종속성을 추가했다.

이제 generate를 누르면 zip파일이 생성된다. 해당 프로젝트를 열어보자.

## 코드 작성하기

프로젝트를 개인의 ide로 열어보면 바깥에는 gradle을 이용한 파일들이 있고, main폴더와 test폴더 각각에 패키지가 생성되어 있다.

application 자바파일에 다음과 같이 코드를 입력해주었다.

```java
package com.jade.studyspring;
//해당 java파일을 패키지로 정의한다.

//spring boot 패키지들을 가져온다.
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//가져온 클래스를 정의한다.
@SpringBootApplication
@RestController
public class StudySpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudySpringApplication.class, args);
	}
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
}
```

## 프로젝트 빌드하기

해당 프로젝트 디렉터리에서 다음과 같이 입력하면 프로젝트가 실행 된다고 한다.

```bash
./mvnw spring-boot:run
```

하지만 실행되지 않는다! 왜냐하면 우리는 gradle로 빌드도구를 설정해 주었기 때문이다. 다음 커맨드를 실행해보자.

```bash
./gradlew build
```

그러면 빌드가 정상적으로 진행이 되는데, gradle이 빌드도구인건 알겠는데 gradlew는 또 뭘까?

바로 gradle wrapper라는 의미를 가지고 있는데, 해당 wrapper로 build를 하게 되면 빌드 환경에 종속되지 않고 java나 gradle을 설치할 필요없이 이미 존재하는 프로젝트를 새로원 환경에서 신속하게 빌드 할 수 있도록 해준다.

물론 개인 local에 gradle을 설치해서 build하고 싶은 경우엔 다음과 같이 입력하면 된다.

```bash
gradle build
```

## 빌드된 프로젝트 시작하기

빌드가 완료되었다면 `./build/libs` 디렉터리에 jar파일이 빌드되어 있을 것이다. 빌드된 파일을 아래 커맨드를 입력하여 실행할 수 있다.

```bash
java -jar {파일명}.jar
```

정상적으로 프로젝트를 실행했다면 `[http://localhost:8080/hello](http://localhost:8080/hello)` 에 접근해보도록 하자. `Hello World!` 가 뜬다면 성공!
