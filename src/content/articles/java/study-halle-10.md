---
title: "[10주차] 자바스터디 - 멀티쓰레드"
description: "스터디 할래 과제"
category: java
createdAt: "2021-11-20"
---

# 목표

자바의 멀티쓰레드 프로그래밍에 대해 학습하세요.

# 학습할 것 (필수)

- Thread 클래스와 Runnable 인터페이스
- 쓰레드의 상태
- 쓰레드의 우선순위
- Main 쓰레드
- 동기화
- 데드락

## Thread 클래스와 Runnable 인터페이스

스레드에 대해 이해하기 위해서는 우선 프로세스라는 개념에 대해 알 필요가 있다.
우선 개념 정리를 해보자

### 프로세스(process)

프로세스는 실행중인 프로그램을 말하는 것으로, OS의 메모리를 할당받아 실행 중인 것을 의미한다.
프로세스는 데이터와 메모리 따위의 자원과 스레드로 구성된다.

### 스레드(thread)

스레드는 프로세스에서 작업을 수행하는 실체를 말한다. 모든 프로세스 안에는 한개 이상의 스레드가 존재한다.

이러한 스레드를 구현하는 방법은 스레드 클래스(Thread Class)를 상속받아 구현하는 방법과 Runnable 인터페이스를 구현하는 방법이 있다.

두 방식 모두 run() 메소드를 실체화 함으로서 구현이 가능하다.

### Thread 클래스

스레드 클래스를 통해 구현하는 방법은 다음과 같다.

```java
class classThread extends Thread {
    @Override
    public void run(){
        for (int i = 0; i < 5; i++) {
            System.out.println("I'm classThread! ");
        }
    }
}
```

### Runnable 인터페이스

Runnable 인터페이스를 통해 스레드를 구현하는 방법은 다음과 같다.

```java
public class runnableThread implements Runnable{
    @Override
    public void run(){
        for (int i = 0; i < 5; i++) {
            System.out.println("I'm runnableThread! ");
        }
    }

}
```

---

구현

```java
public class Main{
    public static void main(String[] args){
        classThread thread1 = new classThread();
        Thread thread2 = new Thread(new runnableThread());
        thread1.start();
        thread2.start();
    }
}
```

출력

```
I'm classThread!
I'm runnableThread!
I'm classThread!
I'm runnableThread!
I'm classThread!
I'm runnableThread!
I'm classThread!
I'm runnableThread!
I'm classThread!
I'm runnableThread!
```

순서대로 실행되지 않고 번갈아가며 실행되고있는 것을 알 수 있다.

### 쓰레드의 상태

스레드의 상태는 객체 생성, 실행 대기, 일시 정지, 종료로 크게 4가지로 구분할 수 있으며, 해당 상태를 알수 있게 해주는 메소드인 `getState()`를 통해 확인 할 수 있다.

getState()의 스레드 상태에 따라서 Thread.state의 열거 상수는 다음과 같다.

사진

#### Thread.join()

해당 메소드는 스레드가 종료될 때까지 기다려주는 메소드이다.

#### interrupt()

해당 메소드는 수행중인 스레드를 InterruptedException 예외를 발생시키며 중단시키는 메소드이다.

### 쓰레드의 우선순위

각 스레드는 우선순위에 대한 자신만의 필드를 가지고있다. 우선순위에 따라 스레드간에 우선순위를 결정 할 수 있다.

| 필드                     | 설명                                                |
| ------------------------ | --------------------------------------------------- |
| static int MAX_PRIORITY  | 스레드가 가질 수 있는 최대 우선순위에 대한 명시     |
| static int MIN_PRIORITY  | 스레드가 가들 수 있는 최소 우선순위에 대한 명시     |
| static int NORM_PRIORITY | 스레드가 생성될 때 가지는 기본 우선순위에 대한 명시 |

해당 우선순위에 대해서는 getPriority() 메소드와 setPriority() 메소드를 사용하여 우선순위 값을 조작할 수 있다.

우선순위를 가질 수 있는 범위는 1 ~ 10으로 값이 커질수록 우선순위가 높아지는 형식이다.

하지만 이 값이 절대적인 비례값이 아닌 상대적인 값이라는 것을 인지해야한다.

## Main 쓰레드

java는 jvm이라는 자바 가상 머신 프로세스에서 돌아가고, java를 실행하기 위해서 우리가 매번 실행하는 main()메소드가 바로 메인 스레드 이다.

다른 스레드 메소드를 실행하지 않고 main() 메소드만을 실행하는 것을 **싱글 스레드 애플리케이션** 이라고 말한다.

main스레드 이외에 다른 스레드를 사용하게 되면 **멀티 스레드 애플리케이션** 이라고 말한다.

main 스레드의 보조적인 역할을 하기위해 생겨난 스레드는 **Daemon Thread** 이다. 해당 스레드는 _setDeamon(true)_ 를 통해 해당 스레드를 Daemon 스레드로 만들어 줄 수있으며, Main 스레드가 종료되면 데몬 스레드도 강제적으로 종료된다.

## 동기화

동기화(Synchronize)란 여러개의 스레드를 사용하는 멀티스레드인 상황에서 하나의 리소스를 사용하려 할 때, 한 스레드에서만 리소스에 접근이 가능한 것을 말한다.

이것을 **Thread-safe** 말한다.

동기화(Synchronize)를 하는 방법은 **Synchronized 키워드**를 사용하는 방법, **Atomic 클래스**를 사용하는 방법, **Volatile 키워드**를 사용하는 방법 3가지가 있다.

### Synchronized 키워드

Java 예약어 중 하나이고, 변수명이나, 클래스 명으로 사용은 불가능하다.

#### Synchronized 사용

Synchronized 키워드로 메소드를 선언하는 방법과 메소드 내의 특정한 문장을 Synchronized로 감싸는 방법이 있다.

## 데드락

교착상태라는 뜻을 가지고 있는 Deadlock은 두개 이상의 스레드가 lock을 얻기 위해 대기할 때 lock을 잡고 있는 스레드도 다른 lock 기다리면서 blcok 상태에 놓이게 되는 상태를 말한다.
