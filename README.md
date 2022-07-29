![cat (1)](https://user-images.githubusercontent.com/72514247/173262530-f875ae62-d6f5-4f41-aa62-1e325f008a29.png)

# [cathub](https://morethanmin.web.app/)

![chrome-capture-2022-3-1](https://user-images.githubusercontent.com/72514247/161201534-0c7f889a-ac52-4e43-aa99-abef6afbb2b2.gif)

## 만든 이유

협업 및 소스코드를 관리하는 공간인 github을 통해 TIL(Today I Learned)등의 공부한 내용을 올리거나, ReadMe를 통해 내 자신을 소개하는게 불편하다고 생각했습니다. (어찌보면 git 저장소이기에 당연한 부분) 
또한 공부한 내용을 다른 사람에게 효과적으로 공유하지 못한다는 점이 아쉬웠습니다.

이러한 부분을 해소하고자 배운내용을 정리하고 기록하는 동시에 나를 소개할 수 있는 별도의 서비스인 cathub을 만들게 되었습니다.

## Features

- markdown 기반 글 작성, 수정
- 게시글 검색 기능
- 카테고리별 게시글 작성 내역 시각화 (github의 잔디처럼 작성내역이 표시됩니다)
- 검색엔진 최적화 (SEO)
- 댓글 작성 기능 (utteranc.es)
- 게시글 Navigation 기능
- 등등 ....

## Getting started

### Install

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### deploy

```bash
# install firebase CLI
$ npm install -g firebase-tools

# login
$ firebase login

# deploy
$ npm run deploy

```

## Tech and libraries

- Vue
- Vuex
- Vuetify
- Sass
- Nuxt
- Nuxt/content
- Firebase (for hosting)

## License

This project is licensed under the MIT License - see the LICENSE.md for details.
