<template>
  <v-container class="main common-wrapper mt-5 pa-0">
    <v-row>
      <v-col class="contribution-main" sm="12" md="10">
        <div class="activity">
          <div
            class="contribution-main-line text-body-2 pa-3 d-flex align-center"
          >
            <div class="">May 2021</div>
            <v-divider></v-divider>
          </div>
          <ActivityBox
            :img="require('~/static/images/giant.png')"
            title="Giant frontend-developer (산업기능요원 재배정 대기중)"
            :contents="[
              `sloker members (vue, nuxt, express, my-sql)`,
              `sloker id (vue, nuxt, express, my-sql)`,
            ]"
          />
          <ActivityBox
            icon="mdi-laptop"
            title="J2KB 3기 (전국 코딩 연합 동아리)"
            :contents="[`유니콘 팀 프로젝트 Dev-in 프론트엔드 개발 (React)`]"
          />
          <ActivityBox
            :img="require('~/static/images/weplanet.png')"
            title="Weplanet frontend-developer (인턴)"
            :contents="[
              `Cash Fi Admin Page (react)`,
              `밑고맡겨 Landing Page`,
              `kkoit Admin Page (react)`,
            ]"
          />
          <ActivityBox
            icon="mdi-book-open-outline"
            title="STUDY HALLE (자바 스터디)"
            :contents="[
              `1주차~13주차 참여 (후기 및 주차별 글은 블로그에 게시)`,
            ]"
          />
          <ActivityBox
            :img="require('~/static/images/trigit.png')"
            title="Trigit Software front-developer (인턴)"
            :contents="[`E-learning Contents 개발`]"
          />
          <ActivityBox
            icon="mdi-bird"
            title="둥지 개발팀 (현업 개발자 모임)"
            :contents="[`둥지톡 백엔드 개발(중단)`]"
          />
          <ActivityBox
            icon="mdi-laptop"
            title="Web Developer Bootcamp"
            :contents="[`udemy-web-developer-bootcamp 수강`, `mtm-camp`]"
          />
          <ActivityBox
            icon="mdi-school-outline"
            title="명지대학교 정보통신공학과 휴학 (3학년)"
          />
        </div>
      </v-col>
      <v-col class="contribution-side d-flex flex-column mt-2" sm="0" md="2">
        <button class="rounded-lg slected pa-1 pl-4 mb-4 text-left">
          2021
        </button>
        <!-- <button class="rounded-lg pa-1 pl-4 mb-4 text-left">2022</button> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@media (max-width: $vt_sm) {
  .contribution-side {
    display: none !important;
  }
}
.contribution-side {
  .slected {
    background-color: #0366d6;
    color: white;
  }
}
</style>