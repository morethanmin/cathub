<template>
  <v-container class="main common-wrapper mt-5 pa-0">
    <v-row>
      <v-col class="contribution-main" sm="12" md="10">
        <div class="activity">
          <div class="contribution-main-line text-body-2 d-flex align-center">
            <div class="">May 2021</div>
            <v-divider></v-divider>
          </div>
          <Activity
            :img="require('~/static/images/gdg.jpg')"
            title="GDG (Google Developer Group) Korea 지부 활동 "
            :contents="[``]"
          />
          <Activity
            :img="require('~/static/images/giant.png')"
            title="Giant - Frontend Developer (산업기능요원 재배정 대기)"
            href="https://giantcorp.co.kr/"
            type="company"
            :contents="[
              { text: `Sloker Admin`, href: `` },
              { text: `Sloker Members`, href: `` }
            ]"
          />
          <Activity
            icon="mdi-laptop"
            title="J2KB 3기 (전국 코딩 연합 동아리)"
            :contents="[`유니콘 팀 프로젝트 Dev-in 프론트엔드 개발 (React)`]"
          />
          <Activity
            :img="require('~/static/images/weplanet.png')"
            title="Weplanet - Frontend Developer (intern)"
            href="http://wepla.net/"
            type="company"
            :contents="[
              { text: `양재동 코드랩`, href: `https://www.codelabs.kr` },
              { text: `중고 맥북 마켓 BARO`, href: `https://www.mybaro.com` },
              { text: `Styleplus`, href: `https://www.styleplus.me/` }
            ]"
          />
          <Activity
            icon="mdi-book-open-outline"
            title="STUDY HALLE (자바 스터디)"
            href="https://moredevmin.tistory.com/category/JAVA/STUDY%20HALLE"
            :contents="[``]"
          />
          <Activity
            :img="require('~/static/images/trigit.png')"
            title="Trigit Software - Frontend Developer (intern)"
            type="company"
            href="http://www.trigit.com/"
            :contents="[
              { text: `자사 홈페이지`, href: `http://www.trigit.com` },
              {
                text: `e-learning 컨텐츠 개발`,
                href: ``
              }
            ]"
          />
          <Activity
            icon="mdi-bird"
            title="둥지 개발팀 (현업 개발자 모임)"
            :contents="[`둥지톡 백엔드 개발(중단)`]"
          />
          <Activity
            icon="mdi-laptop"
            title="Web Developer Bootcamp"
            :contents="[
              {
                text: `mtm camp`,
                href: `https://github.com/morethanmin/mtmcamp`
              }
            ]"
          />
          <Activity
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
