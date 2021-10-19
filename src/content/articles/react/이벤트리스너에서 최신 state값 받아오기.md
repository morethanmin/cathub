---
title: 이벤트리스너에서 최신 state값 받아오기
description: "이벤트리스너에서 최신 state값 받아오기"
category: react
createdAt: "2021-10-15"
---

eventlistener에 특정 이벤트에 실행될 handler를 걸어줄 때 특정 state를 참조하는 경우에는 해당 값이 해당 이벤트 리스너가 생성되는 시점에 고정되게 된다.

다음과같이 state가 변경 될 때마다 이벤트리스너를 갱신해주어야한다.

```jsx
// points가 특정 state라고 가정한다.

const somethingEventHandler = () => {
    console.log(points);
}
useEffect(() => {
    const somethingListener = window.google.maps.event.addListener(marker, 'dragend', somethingEventHandler);
    return () => {
        window.google.maps.event.removeListener(somethingListener );
    }
}, [points];
```
