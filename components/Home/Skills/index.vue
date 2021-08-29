<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/react.svg')"
          title="React"
          subtitle="재 사용성을 고려한 Component와 Custom Hook을 만들어 사용하고,리덕스와 미들웨어를 활용해요."
          @click="reactDialog = true"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/vue.svg')"
          title="Vue"
          subtitle="Vuex를 통해 전역적 상태관리를 하고, Nuxt를 이용해 SSR Application을 만들 수 있어요."
          @click="vueDialog = true"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/express.svg')"
          title="Express"
          subtitle="DB(mongo,sql)과 연결하여 REST API를 만들 수 있어요."
          @click="expressDialog = true"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/django.svg')"
          title="Django"
          subtitle="장고를 사용해 간단한 웹서비스를 개발할 수 있어요."
          @click="djangoDialog = true"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/javascript.svg')"
          title="Javascript"
          subtitle="ES6 + 문법에 익숙하고 비동기 처리가 가능해요. typescript를 사용한 서비스 경험이 있어요."
          @click="javascriptDialog = true"
        />
      </v-col>

      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/html.svg')"
          title="HTML & CSS"
          subtitle="웹 표준과 semantic UI를 준수하려 노력해요. 다양한 CSS 라이브러리/전처리기를 사용할 수 있어요."
          @click="cssDialog = true"
        />
      </v-col>
    </v-row>
    <Dialog
      :icon="require('~/static/svgs/react.svg')"
      color="#61DAFB"
      title="React"
      :percent="80"
      :tags="[`react`, `redux`, `next`, `redux-saga`, `redux-thunk`]"
      subtitle="재 사용성을 고려하여 Component와 Custom Hook을 만들어 사용해요.

지역적 상태 관리와 reducer, Context api, Redux를 통한 전역적 상태관리에 익숙해요.

체이닝 방식으로 작동하는 redux 미들웨어의 원리를 이해하고 다양한 미들웨어를 사용하고 적용해요.

CSR과 SSR을 이해하고, Next.js를 이용해 SSR을 개발할 수 있어요."
      :dialog="reactDialog"
      @close="reactDialog = false"
    />
    <Dialog
      :icon="require('~/static/svgs/vue.svg')"
      color="#4FC08D"
      title="Vue"
      :percent="70"
      :tags="[`vue`, `vuex`, `vuetify`, `nuxt`]"
      subtitle="Vuex를 이용해 전역적 상태관리를 할 수 있어요.

Nuxt를 이용해 SSR을 개발할 수 있어요."
      :dialog="vueDialog"
      @close="vueDialog = false"
    />
    <Dialog
      :icon="require('~/static/svgs/express.svg')"
      color="#000000"
      title="Express"
      :percent="70"
      :tags="[`mongo`, `mongoose`, `sql`, `sequelize`]"
      subtitle="Express를 통해 데이터베이스와 연동하여 REST API를 구현할 수 있어요."
      :dialog="expressDialog"
      @close="expressDialog = false"
    />
    <Dialog
      :icon="require('~/static/svgs/javascript.svg')"
      color="#F7DF1E"
      title="Javascript"
      :percent="80"
      :tags="[`typescript`]"
      subtitle="ES6+ 문법에 익숙해요.

동기 단일 스레드로 동작하는 원리를 이해하고 비동기 처리가 가능해요.

webpack과 babel을 통한 개발환경을 이해하고 구축 할 수 있어요.

typescript를 사용할 수 있고, 서비스 경험이 있어요.

디자인 시스템과 atomic 디자인에 대한 이해도가 높습니다."
      :dialog="javascriptDialog"
      @close="javascriptDialog = false"
    />
    <Dialog
      :icon="require('~/static/svgs/django.svg')"
      color="#092E20"
      title="Django"
      :percent="40"
      :tags="['django', 'python']"
      subtitle="장고를 사용해 간단한 풀스택 웹서비스를 개발할 수 있어요."
      :dialog="djangoDialog"
      @close="djangoDialog = false"
    />
    <Dialog
      :icon="require('~/static/svgs/html.svg')"
      color="#1572B6"
      title="CSS"
      :percent="70"
      :tags="[`material`, `antd`, `styled component`, `sass`]"
      subtitle="
      웹 표준과 semantic UI를 준수하려 노력해요.
      다양한 CSS 라이브러리를 사용할 수 있어요.

다양한 CSS 전처리기을 사용하고 활용할 수 있어요."
      :dialog="cssDialog"
      @close="cssDialog = false"
    />
  </v-container>
</template>

<style lang="scss" scoped>
@media (max-width: $vt_xs) {
  .card-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>

<script>
export default {
  data: () => ({
    reactDialog: false,
    vueDialog: false,
    expressDialog: false,
    javascriptDialog: false,
    djangoDialog: false,
    cssDialog: false
  })
};
</script>
