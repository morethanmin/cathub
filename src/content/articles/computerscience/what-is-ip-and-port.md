---
title: ip와 port에 대한 개념
description: "네트워크 개념 이해하기"
category: computerscience
createdAt: "2021-10-18"
---

## ip

일반적으로 인터넷 네트워크는 TCP/IP라는 프로토콜을 사용해 통신을 한다.

이러한 인터넷 네트워크 중 우리가 흔히 브라우저를 통해 사용하고 있는 웹 서비스는 http를 사용해 통신을 한다고 이해하면 된다.

이를 그림으로 살펴보면 다음과 같다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b7d63a5d-f2b2-421d-b521-64767d089b5c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211018T021650Z&X-Amz-Expires=86400&X-Amz-Signature=8031681af9381bb04b6c44023c5ab3d2fd4bb4edb836c44bb8f18a414ac56aaf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

(출처 : [https://cordingdiary.tistory.com/entry/웹-웹-기초-1-HTTP-TCPIP](https://cordingdiary.tistory.com/entry/%EC%9B%B9-%EC%9B%B9-%EA%B8%B0%EC%B4%88-1-HTTP-TCPIP))

이때 사용되는 TCP/IP에서 IP는 internet protocol의 약자로 인터넷 통신, 말 그대로 인터넷에서 통신하기위해 사용되는 규약을 말한다.

ip 주소란 TCP/IP 프로토콜을 통신에서 송신자와 수신자를 구별하기 위해 만들어진 고유의 주소이다. 네트워크상에서의 전화번호라고 이해해도 좋을 것 같다.

이러한 ip주소는 IPv4였지만 할당량을 넘어 현재에는 IPv6까지 확장되었다.

이중에는 이미 용도가 정해져있는 주소도 존재한다. localhost(127.0.0.1)은 자기 자신의 local pc를 지칭하고, 0.0.0.0과 255.255.255.255은 로컬 네트워크에서 접속된 모든 장치와 소통할 수 있는 주소이다.

## Port

port란 ip내부에서 프로세스 구분을 위해 사용하는 번호이다.

포트 또한 다음과같이 정해진 포트가 있다. 22는 ssh, 80은 http, 443은 https이다

- tcp/ip는 일반적으로 인터넷 네트워크에서 사용하는 통신규약이다.
- tcp/ip서비스를 활용한 통신으로 http가 있고, http를 사용하는 형태의 서비스가 웹서비스다.
- ip주소는 네트워크 상에서 컴퓨터를 식별하는 고유 주소를 말한다.
- port는 특정한 ip로 접속한 pc내부에서 프로세스를 식별하는 16비트의 논리적 할당이다.
