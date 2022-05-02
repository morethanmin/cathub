<template>
  <Home
    :about="about"
    :projects="projects"
    :skills="skills"
    :skillsDetail="skillsDetail"
    :activitys="{
      careers: careers,
      activities: activities,
      certificates: certificates,
      awards: awards,
    }"
    :comments="comments"
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
      projects,
    };
  },
  head() {
    return {
      title: `about - morethanmin`,
      meta: [
        {
          hid: `description`,
          name: `description`,
          content: `몰댄민의 포트폴리오 페이지`,
        },
        {
          property: "og:title",
          content: "about - morethanmin",
        },
        {
          property: "og:description",
          content: "몰댄민의 포트폴리오 페이지",
        },
      ],
    };
  },
  data: () => ({
    skills: [
      {
        id: 1,
        icon: "react.svg",
        title: "React & Next.js",
        subtitle:
          "재 사용성을 고려한 Component와 Custom Hook을 만들어요. Next.js를 주로 사용하고 있어요.",
      },
      {
        id: 2,
        icon: "vue.svg",
        title: "Vue & Nuxt.js",
        subtitle:
          "Vuex를 통해 전역적 상태관리를 하고, Nuxt를 이용해 SSR Application을 만들 수 있어요.",
      },
      {
        id: 3,
        icon: "express.svg",
        title: "Express",
        subtitle: "DB(mongo,sql)과 연결하여 REST API를 만들 수 있어요.",
      },
      {
        id: 4,
        icon: "django.svg",
        title: "Django",
        subtitle: "장고를 사용해 간단한 웹서비스를 개발할 수 있어요.",
      },
      {
        id: 5,
        icon: "javascript.svg",
        title: "Javascript & Typescript",
        subtitle:
          "ES6 + 문법에 익숙하고 비동기 처리가 가능해요. typescript를 사용한 서비스 경험이 있어요.",
      },
      {
        id: 6,
        icon: "html.svg",
        title: "HTML & CSS",
        subtitle:
          "웹 표준과 semantic UI를 준수하려 노력해요. 다양한 CSS 라이브러리/전처리기를 사용할 수 있어요.",
      },
    ],
    skillsDetail: [
      {
        id: 1,
        icon: "react.svg",
        color: "#61DAFB",
        percent: 80,
        tags: [`react`, `redux`, `next.js`, `redux-saga`, `redux-thunk`, `recoil`],
        title: "React",
        subtitle:
          "재 사용성을 고려하여 Component와 Custom Hook을 만들어 사용해요. 지역적 상태 관리와 reducer, Context api, Redux를 통한 전역적 상태관리에 익숙해요. 체이닝 방식으로 작동하는 redux 미들웨어의 원리를 이해하고 다양한 미들웨어를 사용하고 적용해요. CSR과 SSR을 이해하고, Next.js를 이용해 SSR을 개발할 수 있어요.",
      },
      {
        id: 2,
        icon: "vue.svg",
        color: "#4FC08D",
        percent: 70,
        tags: [`vue`, `vuex`, `vuetify`, `nuxt.js`],
        title: "Vue",
        subtitle:
          "Vuex를 이용해 전역적 상태관리를 할 수 있어요. Nuxt를 이용해 SSR을 개발할 수 있어요.",
      },
      {
        id: 3,
        icon: "express.svg",
        color: "#000000",
        percent: 70,
        tags: [`mongo`, `mongoose`, `sql`, `sequelize`],
        title: "Express",
        subtitle:
          "Express를 통해 데이터베이스와 연동하여 REST API를 구현할 수 있어요.",
      },
      {
        id: 4,
        icon: "django.svg",
        color: "#092E20",
        percent: 40,
        tags: ["django", "python"],
        title: "Django",
        subtitle: "장고를 사용해 간단한 웹서비스를 개발할 수 있어요.",
      },
      {
        id: 5,
        icon: "javascript.svg",
        color: "#F7DF1E",
        percent: 80,
        tags: [`typescript`, "node.js", "webpack", "babel"],
        title: "Javascript",
        subtitle:
          "ES6+ 문법에 익숙해요. 동기 단일 스레드로 동작하는 원리를 이해하고 비동기 처리가 가능해요. webpack과 babel을 통한 개발 환경을 이해하고 구축 할 수 있어요. typescript를 사용할 수 있고, 서비스 경험이 있어요. 디자인 시스템과 atomic 디자인에 대한 이해도가 높습니다.",
      },
      {
        id: 6,
        icon: "html.svg",
        color: "#1572B6",
        percent: 80,
        tags: [`styled component`, `sass`, `emotion`, `materialUI`, `antd`],
        title: "HTML & CSS",
        subtitle:
          "웹 표준과 semantic UI를 준수하려 노력해요. 다양한 CSS 라이브러리를 사용할 수 있어요. 다양한 CSS 전처리기을 사용하고 활용할 수 있어요.",
      },
    ],
    careers: [
      {
        img: "mobileentropy.png",
        title: "Mobileentropy - Web Developer",
        href: "http://entropykorea.com",
        contents: [{ text: `2021.12 산업기능요원 편입` }],
      },
      {
        img: "opengallery.png",
        title: "Opengallery - Web Developer",
        href: "https://www.opengallery.co.kr",
        contents: [
          {
            text: `산업기능요원 재배정TO를 전제로 입사하였으나 회사에서 TO가 발생하지 않아 이직`,
          },
        ],
      },
      {
        img: "giant.png",
        title: "Giant - Frontend Intern",
        href: "https://giantcorp.co.kr",
        type: "company",
        contents: [
          { text: `삶기술학교`, href: `https://hansan.slowtech.ac` },
          { text: `커뮤니티호텔H`, href: `https://hotelh1500.com` },
        ],
      },
      {
        img: "weplanet.png",
        title: "Weplanet - Frontend Intern",
        href: "https://www.opengallery.co.kr",
        type: "company",
        contents: [
          { text: `양재동 코드랩`, href: `https://www.codelabs.kr` },
          { text: `중고 맥북 마켓 BARO`, href: `https://www.mybaro.com` },
          { text: `Styleplus`, href: `https://www.styleplus.me/` },
        ],
      },
      {
        img: "trigit.png",
        title: "Trigit Software - Freelancer",
        href: "http://www.trigit.com",
        type: "company",
        contents: [
          { text: `자사 홈페이지 개발`, href: `http://www.trigit.com` },
          {
            text: `e-learning contents`,
            href: ``,
          },
        ],
      },
    ],
    activities: [
      {
        icon: "mdi-book-open-outline",
        title: "Jext",
        href: "https://zext.oopy.io",
        contents: [{ text: `유학생 커뮤니티 Int'ly 프론트엔드 개발` }],
      },
      {
        img: "j2kb.png",
        title: "J2KB",
        href: "https://github.com/J2KB-3rd-Season",
        contents: [
          { text: `전국 코딩 연합 동아리 3기 수료` },
          { text: `유니콘 팀 프로젝트 Dev-in 프론트엔드 개발 (React)` },
        ],
      },
      {
        icon: "mdi-book-open-outline",
        title: "STUDY HALLE",
        href: "https://moredevmin.tistory.com/category/JAVA/STUDY%20HALLE",
        contents: [{ text: `백기선 님과 함께하는 온라인 자비스터디 수료` }],
      },
      {
        img: "doongji.png",
        title: "Doongji",
        href: "https://github.com/Doong-Ji",
        contents: [{ text: `현업 개발자 모임에서 부리더로 활동` }],
      },
      {
        icon: "mdi-laptop",
        title: "Web Developer Bootcamp",
        href: "https://drive.google.com/file/d/1dtc6Hg3zBDtCgO9iK9cn67LSI_QghRzK/view?usp=sharing",
        contents: [
          {
            text: `mtm camp`,
            href: `https://github.com/morethanmin/mtmcamp`,
          },
        ],
      },
      {
        img: "MyongJi.jpeg",
        title: "Myongji university",
        href: "https://www.mju.ac.kr/sites/mjukr/intro/intro.html",
        contents: [
          { text: `Information Communication Engineering (3rd year leave)` },
        ],
      },
    ],
    certificates: [
      {
        icon: "mdi-certificate-outline",
        title: "정보처리산업기사",
      },
      {
        icon: "mdi-certificate-outline",
        title: "TOEIC 730 score",
      },
    ],
    awards: [
      {
        title: "유니콘 금상",
        href: "https://drive.google.com/file/d/1UNwF63XqPNjEgAzGTOG3aOe0jR3bebD0/view?usp=sharing",
        contents: [
          {
            text: `J2KB에서 주최한 해커톤에서 프론트엔드 리더로 참가해 금상을 수상했습니다.`,
          },
        ],
      },
      {
        title: "동아리 공모전 우수상",
        contents: [
          {
            text: `동아리 공모전에서 재정이의 모험이라는 게임을 출품해 우수상을 수상했습니다.`,
          },
        ],
      },
    ],
    comments: [
      {
        img: "dohyun.jpeg",
        title: "안도현",
        subtitle: "Giant web-developer",
        comment:
          "이상민 개발자는 끊임없이 배우며 항상 성장합니다. 배운 내용을 공유하여 조직 또한 함께 성장할 수 있도록 하며, 저 또한 그로부터 많은 영감을 얻을 수 있었습니다. 조직 내에 성장동력을 부여하고 앞으로도 스스로 성장할 개발자를 찾으신다면, 이상민 개발자를 추천드립니다.",
      },
      {
        img: "user.png",
        title: "Jay",
        subtitle: "Weplanet frontend-developer",
        comment:
          "Jade는 개발이라는 업무를 일로 생각하지않고 즐기는 개발자였어요. 항상 현재에 안주하지 않고 끊임없이 성장하는 모습을 보면 찐 개발자라고 생각하면서도 다방면에서 뛰어난 감각을 가지고 있는 사람이여서 잠깐이였지만 팀에 정말 많은 영향을 주었어요. 다재다능한 개발자를 찾으신다면 추천드립니다!",
      },
      {
        img: "user.png",
        title: "이성현",
        subtitle: "Trigit-Software development leader",
        comment:
          "상민님과 짧은 기간동안 협업을 하면서 느꼈던 점은 개발에 대한 높은 관심과 빠른 습득력을 가진 개발자라는것입니다. 짦은 기간 인턴으로 함께한다는 것이 아쉬울 정도로 커뮤니티 능력, 개발 능력에 있어서 높은 가능성을 보여주었습니다.",
      },
    ],
  }),
  mounted() {},
};
</script>
