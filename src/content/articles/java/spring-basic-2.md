---
title: "[Spring Basic 2] api 작성해보기"
description: "스프링 공부해보기"
category: java
createdAt: "2021-12-18"
---

> spring.io에 있는 document를 보고 나름 정리한 글입니다.
> 소스코드는 [이곳](https://github.com/morethanmin/study-spring/tree/main/%5BSpring%20Basic%202%5D%20api%20%EC%9E%91%EC%84%B1%ED%95%B4%EB%B3%B4%EA%B8%B0) 에서 확인하실 수 있습니다

스프링 기반 웹서비스를 빌드하고 시작하는 부분까지 마쳤으니, RESTful한 api를 구성해 보자.

## 목표

[`http://localhost:8080/greeting`](http://localhost:8080/greeting)주소로 HTTP GET request를 요청했을 때 아래와 같은 JSON을 return하게끔 만들어 볼 것이다.

```json
{ "id": 1, "content": "Hello, World!" }
```

또한 `name` parameter도 넣어 줄 수 있게끔 할 것이다.

```json
{ "id": 1, "content": "Hello, User!" }
```

## **Representation Class 생성**

우리의 웹서비스가 어떠게 동작해야 할지 생각해봅시다. http request가 `route: /greeting` 으로 get 요청이 들어올 때, `status 200` 와 함께 body에 `JSON data`를 넣어주어야 한다.

이를 구현하기 위해 우선 JSON data를 생성할 수 있도록 greeting class를 만들어 주자.

> Greeting.java

```java
package com.example.restservice;

public class Greeting {

	private final long id;
	private final String content;

	public Greeting(long id, String content) {
		this.id = id;
		this.content = content;
	}

	public long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}
}
```

## **Resource Controller Class 생성**

이제 http request를 감지하고 greeting 객체를 보내주는 class를 생성하자. 보통 이러한 클래스를 controller라고 부른다.

각각의 코드들에 내 나름의 주석을 달아두었다.

> GreetingController.java

```java
package com.jade.studyspring;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//GreetingController 클래스를 RestController로 정의해주는 annotation
@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

  //greeting 함수를 /greeting route에 mapping해주는 annotation
	@GetMapping("/greeting")
  //Gretting을 반환하는 greeting 함수 정의, String name의 값엔 annotation에 명시된 값이 들어감.
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}
}
```

spring에서 제공하는 각각의 애노테이션에 대해 추가 설명하겠다.

`@GetMapping` 은 http get request가 요청될 경우 해당 함수를 실행하도록 명시해준다.

좀더 응용해서 `@PostMapping` 은 http post request가 요청될 경우 일 것이고, `@RequestMapping(method=GET)` 다음과 같이 애노테이션을 정의해 줄 수도있다.

물론 이 용어를 다 알고있어야 하는건 아니고, 개념을 이해하고 doc에서 활용해 사용할 수 있기만 하면 될 것이다.

매핑된 함수같은 경우는 `Greeting` 을 반환하는 `greeting` 함수이고, parameter는 `String name` 이 들어가 있는데, 해당 변수에는 `@RequestParam` 이라는 애노테이션이 들어가 있는 형태이고, 해당 애노테이션 이름에서 유추할 수 있듯이 http request에서 name parameter를 가져오고 없는경우엔 `World` 로 선언해주는 것을 볼 수 있다.

이후 Greeting 객체를 반환하고 있는 모습이다. 이때 반환되는 값은 `JSON` 형태여야 하는데 이는 HTTP message converter의 도움으로 알아서 반환해준다고 한다.

## 프로젝트 빌드 및 실행

프로젝트 빌드는 이전에 했던 것처럼 `./gradlew build` 를 입력해 빌드하고, `java -jar {파일명}.jar` 를 입력하여 실행해주면 된다.

이제 [`http://localhost:8080/greeting`](http://localhost:8080/greeting) 으로 접속해보면 정상적으로 동작하는 것을 확인할 수 있다!
