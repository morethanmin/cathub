<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" sm="12" md="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" sm="12" md="9">
        <div class="readme mb-5">
          <v-card outlined flat class="pa-5 color-black">
            <nuxt-content :document="readme" />
          </v-card>
        </div>
        <div class="pinned mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="color-black">Projects</div>
            <!-- <NuxtLink to="/repositories">
              <div class="text-body-2">more...</div>
            </NuxtLink> -->
          </div>
          <v-container class="ma-0 pa-0">
            <v-row>
              <v-col class="card-col" sm="12" md="6">
                <info-card
                  icon="mdi-cat"
                  title="cathub"
                  subtitle="Nuxt기반의 내 블로그"
                  :desc="[`vue`, `nuxt`]"
                  link="https://github.com/morethanmin/cat-hub"
                />
              </v-col>
              <v-col class="card-col" sm="12" md="6">
                <info-card
                  title="dev-in"
                  subtitle="팀 프로젝트 (J2KB 유니콘 대회)"
                  :desc="[`react`]"
                  link="https://github.com/morethanmin/dev-in"
                />
              </v-col>
              <v-col class="card-col" sm="12" md="6">
                <info-card
                  icon="mdi-alien-outline"
                  title="remotto"
                  subtitle="개인 프로젝트"
                  :desc="[`node js`, `ejs`, `express`]"
                  link="https://github.com/morethanmin/remotto"
                />
              </v-col>
              <v-col class="card-col" sm="12" md="6">
                <info-card
                  icon="mdi-tent"
                  title="mtmtravel"
                  subtitle="공부용 프로젝트"
                  :desc="[`node js`, `react`, `express`]"
                  link="https://github.com/morethanmin/mtmtravel"
                />
              </v-col>
              <v-col class="card-col" sm="12" md="6">
                <info-card
                  icon="mdi-tent"
                  title="mtmcamp"
                  subtitle="개인 프로젝트"
                  :desc="[`node js`, `ejs`, `express`]"
                  link="https://github.com/morethanmin/mtmcamp"
                />
              </v-col>
              <v-col class="card-col" sm="12" md="6">
                <info-card
                  title="until-offline"
                  subtitle="개인 프로젝트 (진행중)"
                  :desc="[`react`, `next`]"
                  link="https://github.com/morethanmin/until-offline"
                />
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="pinned">
          <div class="d-flex justify-space-between mb-3">
            <div class="color-black">{{ total }} articles in cathub</div>
            <NuxtLink to="/archive">
              <div class="text-body-2">more...</div>
            </NuxtLink>
          </div>
          <div class="ma-0 pa-0">
            <v-card class="commit" outlined flat>
              <commit-box :countedDate="data" />
            </v-card>
          </div>
        </div>
        <v-container class="main common-wrapper mt-5 pa-0">
          <v-row>
            <v-col class="contribution-main" sm="12" md="10">
              <div class="activity">
                <div class="mb-3">Development activity</div>
                <div
                  class="contribution-main-line text-body-2 pa-3 d-flex align-center"
                >
                  <div class="">May 2021</div>
                  <v-divider></v-divider>
                </div>
                <ActivityBox
                  img="~/static/images/giant.png"
                  title="Giant frontend-developer (산업기능요원 재배정 대기중)"
                  :contents="[
                    `sloker members 개발 (vue, nuxt, express, my-sql)`,
                    `sloker id 유지보수 (vue, nuxt, express, my-sql)`,
                  ]"
                />
                <ActivityBox
                  icon="mdi-laptop"
                  title="J2KB 3기 활동 (전국 코딩 연합 동아리)"
                  :contents="[
                    `유니콘 팀 프로젝트 Dev-in 프론트엔드 개발 (React)`,
                  ]"
                />
                <ActivityBox
                  img="~/static/images/weplanet.png"
                  title="Weplanet frontend-developer (인턴)"
                  :contents="[
                    `Cash Fi Admin Page 개발 (react)`,
                    `밑고맡겨 Landing Page 개발`,
                    `kkoit Admin Page 개발 (react)`,
                  ]"
                />
                <ActivityBox
                  icon="mdi-book-open-outline"
                  title="STUDY HALLE 활동 (자바 스터디)"
                  :contents="[
                    `1주차~13주차 참여 (후기 및 주차별 글은 블로그에 게시)`,
                  ]"
                />
                <ActivityBox
                  img="~/static/images/trigit.png"
                  title="Trigit Software front-developer (인턴)"
                  :contents="[`E-learning Contents 개발`]"
                />
                <ActivityBox
                  icon="mdi-bird"
                  title="둥지 개발팀 부리더 (현업 개발자 모임)"
                  :contents="[`둥지톡 백엔드 개발(중단)`]"
                />
                <ActivityBox
                  icon="mdi-laptop"
                  title="Web Developer Bootcamp"
                  :contents="[
                    `udemy-web-developer-bootcamp 수강`,
                    `mtm-camp 개발`,
                  ]"
                />
                <ActivityBox
                  icon="mdi-school-outline"
                  title="명지대학교 정보통신공학과 휴학 (3학년)"
                />
              </div>
            </v-col>
            <v-col
              class="contribution-side d-flex flex-column mt-2"
              sm="0"
              md="2"
            >
              <button class="rounded-lg slected pa-1 pl-4 mb-4 text-left">
                2021
              </button>
              <!-- <button class="rounded-lg pa-1 pl-4 mb-4 text-left">2022</button> -->
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.contribution-side {
  .slected {
    background-color: #0366d6;
    color: white;
  }
}
.commit {
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  > * {
    margin-right: 10px;
  }
}
@media (max-width: $vt_sm) {
  .contribution-side {
    display: none !important;
  }
}
@media (max-width: $vt_xs) {
  .card-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

import Profile from "~/components/Profile.vue";
import CommitBox from "../components/CommitBox.vue";

export default {
  components: {
    Profile,
    CommitBox,
  },
  async asyncData({ $content, params }) {
    const readme = await $content("portfolio", "introduce").fetch();
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .fetch();
    const articlesDateList = articles.map((article) => article.createdAt);
    const parsedDate = articlesDateList.map((articleDate) => {
      const date = new Date(articleDate);
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    });
    const data = {};
    parsedDate.forEach((x) => {
      data[x] = (data[x] || 0) + 1;
    });
    const total = articlesDateList.length;
    return {
      readme,
      data,
      total,
    };
  },
  data: () => ({
    data: {},
    total: 0,
  }),
  computed: {},
  methods: {
    parseDate(date) {
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    },
    parseArticleDate() {
      const date = this.articlesDateList.map((articleDate) => {
        const date = new Date(articleDate);
        return this.parseDate(date);
      });
      const data = {};
      date.forEach((x) => {
        data[x] = (data[x] || 0) + 1;
      });

      this.countedDate = data;
    },
    parseTotal() {
      this.total = this.articlesDateList.length;
    },
  },
  mounted() {
    // this.parseArticleDate()
    // this.parseTotal()
  },
};
</script>
