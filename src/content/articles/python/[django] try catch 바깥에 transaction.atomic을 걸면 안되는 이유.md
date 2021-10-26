---
title: "[django] try catch 바깥에 transaction.atomic을 걸면 안되는 이유"
description: "trouble shooting"
category: python
createdAt: "2021-10-26"
---

django에서는 자체적으로 제공하는 orm을 통해 database를 제어하고 있다. 이때 트랜잭션의 단위를 처리하기 위해서는 `transaction.atomic` 을 사용해야 한다.

이때 주의해야할 점은 `transaction.atomic` scope안에 try catch이 있으면 안된다는 것이다. 왜 안되는지에 대해서 공식 문서에서는 다음과 같이 설명한다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5d30efc7-fc05-4c3e-bd58-ee8b91d65755/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211026T055722Z&X-Amz-Expires=86400&X-Amz-Signature=3c9f2202db391a30b759a740797512e294b91b04c7e46e063882693019c7bafd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

한마디로, 트랜잭션이 실패하게 되는경우 database error를 뱉어내게 되는데 해당 에러를 감지하지 못하고 rollback이 진행이 안되기 때문이다.

따라서 try catch 안쪽에 `transaction.atomic` 을 걸어주도록 하자!!!!
