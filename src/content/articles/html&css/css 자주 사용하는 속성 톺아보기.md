---
title: css 자주 사용하는 속성 톺아보기
description: 자주 사용하는데 자꾸 까먹는 것들
category: html&css
createdAt: "2021-10-20"
---

## 가로 중앙 정렬

```css
margin: 0 auto;
```

## masonry layout

```css
```

## 스크룰바 스타일 제거

```css
.box {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.box::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
```

## 반응형 정사각형

```css
`<div class="square">
  <div class="inner">내부 컨텐츠</div>
</div>`

`.square {
  width: 50%;
  position: relative;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.inner {
  position: absolute;
  width: 100%;
  height: 100%;
}`
```

## border를 이용해 삼각형 만들기

```css
.tri {
  width: 0;
  height: 0;
  border-right: 100px solid transparent;
  border-bottom: 100px solid green;
  border-left: 100px solid transparent;
}
```

## a tag 스타일 제거

```css
a:link {
  color: red;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: none;
}
a:hover {
  color: blue;
  text-decoration: underline;
}
```
