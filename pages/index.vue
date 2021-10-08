<template>
  <Home
    :about="about"
    :projects="projects"
    :skills="skills"
    :skillsDetail="skillsDetail"
  />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const about = await $content("overview", "about").fetch();
    const projects = await $content("projects")
      .where({ pinned: true })
      .sortBy("sort")
      .fetch();

    return {
      about,
      projects
    };
  },
  data: () => ({
    skills: [
      {
        id: 1,
        icon: "react.svg",
        title: "React",
        subtitle:
          "재 사용성을 고려한 Component와 Custom Hook을 만들어 사용하고,리덕스와 미들웨어를 활용해요."
      },
      {
        id: 2,
        icon: "vue.svg",
        title: "Vue",
        subtitle:
          "Vuex를 통해 전역적 상태관리를 하고, Nuxt를 이용해 SSR Application을 만들 수 있어요."
      },
      {
        id: 3,
        icon: "express.svg",
        title: "Express",
        subtitle: "DB(mongo,sql)과 연결하여 REST API를 만들 수 있어요."
      },
      {
        id: 4,
        icon: "django.svg",
        title: "Django",
        subtitle: "장고를 사용해 간단한 웹서비스를 개발할 수 있어요."
      },
      {
        id: 5,
        icon: "javascript.svg",
        title: "Javascript",
        subtitle:
          "ES6 + 문법에 익숙하고 비동기 처리가 가능해요. typescript를 사용한 서비스 경험이 있어요."
      },
      {
        id: 6,
        icon: "html.svg",
        title: "HTML & CSS",
        subtitle:
          "웹 표준과 semantic UI를 준수하려 노력해요. 다양한 CSS 라이브러리/전처리기를 사용할 수 있어요."
      }
    ],
    skillsDetail: [
      {
        id: 1,
        icon: "react.svg",
        color: "#61DAFB",
        percent: 80,
        tags: [`react`, `redux`, `next`, `redux-saga`, `redux-thunk`],
        title: "React",
        subtitle:
          "재 사용성을 고려하여 Component와 Custom Hook을 만들어 사용해요. 지역적 상태 관리와 reducer, Context api, Redux를 통한 전역적 상태관리에 익숙해요. 체이닝 방식으로 작동하는 redux 미들웨어의 원리를 이해하고 다양한 미들웨어를 사용하고 적용해요. CSR과 SSR을 이해하고, Next.js를 이용해 SSR을 개발할 수 있어요."
      },
      {
        id: 2,
        icon: "vue.svg",
        color: "#4FC08D",
        percent: 70,
        tags: [`vue`, `vuex`, `vuetify`, `nuxt`],
        title: "Vue",
        subtitle:
          "Vuex를 이용해 전역적 상태관리를 할 수 있어요. Nuxt를 이용해 SSR을 개발할 수 있어요."
      },
      {
        id: 3,
        icon: "express.svg",
        color: "#000000",
        percent: 70,
        tags: [`mongo`, `mongoose`, `sql`, `sequelize`],
        title: "Express",
        subtitle:
          "Express를 통해 데이터베이스와 연동하여 REST API를 구현할 수 있어요."
      },
      {
        id: 4,
        icon: "django.svg",
        color: "#092E20",
        percent: 40,
        tags: ["django", "python"],
        title: "Django",
        subtitle: "장고를 사용해 간단한 웹서비스를 개발할 수 있어요."
      },
      {
        id: 5,
        icon: "javascript.svg",
        color: "#F7DF1E",
        percent: 80,
        tags: [`typescript`],
        title: "Javascript",
        subtitle:
          "ES6+ 문법에 익숙해요. 동기 단일 스레드로 동작하는 원리를 이해하고 비동기 처리가 가능해요. webpack과 babel을 통한 개발환경을 이해하고 구축 할 수 있어요. typescript를 사용할 수 있고, 서비스 경험이 있어요. 디자인 시스템과 atomic 디자인에 대한 이해도가 높습니다."
      },
      {
        id: 6,
        icon: "html.svg",
        color: "#1572B6",
        percent: 80,
        tags: [`material`, `antd`, `styled component`, `sass`],
        title: "HTML & CSS",
        subtitle:
          "웹 표준과 semantic UI를 준수하려 노력해요. 다양한 CSS 라이브러리를 사용할 수 있어요. 다양한 CSS 전처리기을 사용하고 활용할 수 있어요."
      }
    ]
  }),
  mounted() {
    console.log(this.skillsDetail);
  }
};
</script>
