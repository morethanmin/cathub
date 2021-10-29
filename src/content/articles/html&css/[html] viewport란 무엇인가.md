---
title: "[html] viewport란 무엇인가"
description: "[html] viewport란 무엇인가"
category: html&css
createdAt: "2021-10-29"
---

## 뷰포트가 무엇인가?

웹페이지는 원래 pc에서 보는 화면을 기준으로 만들어졌었지만 모바일 기기들이 등장하면서 사용자가 볼 수 있는 영역의 기준을 설정하는 것이 필요했다.

이때문에 만들어진 meta tag가 뷰포트이다.

## 예시

viewport는 메타태그에서 name을 viewport로 설정해주면 된다. 일반적으로 사용하는 기본 설정은 다음과 같다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 명세

위에 예시에 이어서 각각의 속성을 설명해본다.

뷰포트 너비

### width

뷰포트 너비. 보통 device-width를 넣는다.

### **hight**

뷰포트 높이. 보통 device-height를 넣는다.

### **initial-scale**

브라우저에서 페이지를 처음 로드할 때 확대/축소가 되지 않은 원래 크기 사용 0~10 사이의 값을 가진다

### **user-scalable**

사용자가 화면을 확대 축소할 수 있는지를 지정한다. yes 또는 no 기본 값을 가진다.

### **minimum-scale**

화면을 줄일 수 있는 최소 크기를 지정한다. 0~10 . 기본값 0.25

### **maximum-scale**

화면을 늘릴 수 있는 최대 크기를 지정한다. 0~10 . 기본값 1.6
