---
title: 포트포워딩과 리버스프록시의 차이점
description: "웹 개발에 필요한 네트워크 지식"
category: computerscience
createdAt: "2021-10-17"
---

두 개념 모두 포트를 다른 곳으로 전달해주는 역할을 한다는 것을 배웠다. 그렇다면 두 개념은 어떤 차이점이 있고, 어떻게 쓰이는 것일까.

구글에 검색을 했더니 이렇게 나온다.

**Port forwarding** describes a layer-4 mechanism, operating on TCP connections or UDP packets without necessarily understanding the application data.

**Reverse proxy** suggests a higher-layer (this is where the OSI model doesn't map directly to TCP/IP) application-aware proxy. In the *old days*, a proxy server was most commonly used between users and the Internet; so *reverse* indicates the other way around, used to proxy traffic from the Internet to server(s).

(출처: [https://networkengineering.stackexchange.com/questions/70515/difference-between-reverse-proxy-and-port-forwarding](https://networkengineering.stackexchange.com/questions/70515/difference-between-reverse-proxy-and-port-forwarding))

내가 이해한 대로 적어보자면 다음과 같다.

## 리버스 프록시

리버스 프록시는 프록시서버의 일종이다. 이말은 즉슨 HTTP에 해당하는 계층에서 적용되는 기능에 국한되는 개념이다.

## 포트포워딩

포트포워딩은 TCP/IP에 해당하는 계층에서 공인 ip로 들어오는 요청을 공인 ip 내부의 사설 ip로 포워딩 시켜주는 역할을 한다.

공유기에서 포트포워딩 설정을 할 수 있는데 공인아이피로 왔을 때 내부의 비공인아이피의 특정 포트로 보내주는 역할을 한다.

공유기에 공인 ip의 특정 포트로 http요청이 온 경우,

만약 해당하는 포트가 tcp통신 그리고 특정 내부 ip의 포트로 포트포워딩 설정이 되어있다면 해당 위치로 http요청을 포트포워딩이된다.

이후 리버스 프록시서버가 있다면 프록시서버를 거쳐 작업을 수행한다.
