<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/react.svg')"
          color="#61DAFB"
          title="React"
          :percent="80"
          subtitle="재 사용성을 고려한 Component와 Custom Hook을 만들어 사용하고,리덕스와 미들웨어를 활용해요."
          :desc="[`vue`, `nuxt`]"
          link="https://github.com/morethanmin/cat-hub"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/vue.svg')"
          color="#4FC08D"
          title="Vue"
          :percent="70"
          subtitle="Vuex를 통해 전역적 상태관리를 하고, Nuxt를 이용해 SSR Application을 만들 수 있어요."
          :desc="[`react`, `redux`, `redux-saga`]"
          link="https://github.com/morethanmin/memo"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/express.svg')"
          color="#000000"
          title="Express"
          :percent="60"
          subtitle="DB(mongo,sql)과 연결하여 REST API를 만들 수 있어요."
          :desc="[`node js`, `react`, `express`]"
          link="https://github.com/morethanmin/mtmtravel"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/javascript.svg')"
          color="#F7DF1E"
          title="Javascript"
          :percent="80"
          subtitle="ES6 + 문법에 익숙하고 비동기 처리가 가능해요. typescript를 사용한 서비스 경험이 있어요."
          :desc="[`node js`, `ejs`, `express`]"
          link="https://github.com/morethanmin/remotto"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/html.svg')"
          color="#E34F26"
          title="HTML"
          :percent="90"
          subtitle="웹 표준과 semantic UI를 준수하려 노력해요."
          :desc="[`node js`, `ejs`, `express`]"
          link="https://github.com/morethanmin/mtmcamp"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="4">
        <Skill
          :icon="require('~/static/svgs/css.svg')"
          color="#1572B6"
          title="CSS"
          :percent="70"
          subtitle="다양한 CSS 라이브러리를 사용할 수 있어요. 다양한 전처리기 또한 사용하고 활용할 수 있어요."
          :desc="[`react`, `next`]"
          link="https://github.com/morethanmin/until-offline"
        />
      </v-col>
    </v-row>
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
