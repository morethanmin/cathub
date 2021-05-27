<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        <div class="readme mb-5">
          <v-card outlined flat class="pa-3 color-black">
            <v-card-title class="text-h5"> Hi there 👋 </v-card-title>
            <v-card-text class="text-body-2 color_secondary">
              Hello! I'm junior javascript developer. <br>
              안녕하세요! 저는 주니어 자바스크립트 개발자입니다. <br>
              Cathub is my dev archiving area. <br>
              Cathub은 저의 개발 저장공간입니다. <br>
            </v-card-text>
          </v-card>
        </div>
        <div class="pinned mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="color-black">Pinned</div>
            <div class="text-body-2">more..</div>
          </div>
          <v-container class="ma-0 pa-0">
            <v-row>
              <v-col cols="6">
                <info-card
                  icon="mdi-tent"
                  title="mtmcamp"
                  subtitle="개인 프로젝트"
                  desc="Javascript"
                />
              </v-col>
              <v-col cols="6">
                <info-card
                  title="mtmtravel"
                  subtitle="개인 프로젝트"
                  desc="Javascript"
                />
              </v-col>
              <v-col cols="6">
                <info-card
                  title="mtmcamp"
                  subtitle="개인 프로젝트"
                  desc="Javascript"
                />
              </v-col>
              <v-col cols="6">
                <info-card
                  title="remotto"
                  subtitle="개인 프로젝트"
                  desc="Javascript"
                />
              </v-col>
              <v-col cols="6">
                <info-card
                  title="mtmcamp"
                  subtitle="개인 프로젝트"
                  desc="Javascript"
                />
              </v-col>
              <v-col cols="6">
                <info-card
                  title="remotto"
                  subtitle="개인 프로젝트"
                  desc="Javascript"
                />
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="pinned">
          <div class="d-flex justify-space-between mb-3">
            <div class="color-black"> {{total}} articles in cathub</div>
            <div class="text-body-2">
              articles..
              <!-- <v-icon>mdi-menu-down</v-icon> -->
            </div>
          </div>
          <div class="ma-0 pa-0">
            <v-card class="commit" outlined flat>
              <commit-box :countedDate="countedDate" />
            </v-card>
          </div>
        </div>
        <v-container class="main common-wrapper mt-5 pa-0">
          <v-row>
            <v-col class="contribution-main" cols="10">
              <div class="activity">
                <div class="mb-3">Development activity</div>
                <div
                  class="contribution-main-line text-body-2 pa-3 d-flex align-center"
                >
                  <div class=" ">May 2021</div>
                  <v-divider></v-divider>
                </div>
              </div>
            </v-col>
            <v-col class="contribution-side d-flex flex-column mt-2" cols="2">
              <button class="rounded-lg slected pa-1 pl-4 mb-4 text-left">
                2021
              </button>
              <button class="rounded-lg pa-1 pl-4 mb-4 text-left">2022</button>
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
.commit{
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  >*{
  margin-right: 10px;

  }
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

import Profile from "~/components/Profile.vue";
import CommitBox from '../components/CommitBox.vue';

export default {
  components: {
    Profile,
    CommitBox,
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
    .sortBy("createdAt", "desc")
    .fetch();
    const articlesDateList = articles.map((article)=>(article.createdAt))
    return {
      articlesDateList,
    };
  },
  data: () => ({
    countedDate:{},
    total: 0
  }),
  computed: {},
  methods: {
    parseDate(date){
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`
    },
    parseArticleDate(){
      const date = this.articlesDateList.map((articleDate)=>{
        const date = new Date(articleDate)
        return this.parseDate(date)
      })
      const data = {}
      date.forEach(x => {
        data[x] = (data[x]||0)+1;
      });

      this.countedDate = data
    },
    parseTotal(){
      this.total = this.articlesDateList.length
    }
  },
  mounted(){
    this.parseArticleDate()
    this.parseTotal()
  }
};
</script>
