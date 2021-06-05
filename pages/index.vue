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
          <projects />
        </div>
        <div class="pinned mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="color-black">Carrer</div>
            <!-- <NuxtLink to="/repositories">
              <div class="text-body-2">more...</div>
            </NuxtLink> -->
          </div>
          <development-activity />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
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
    const readme = await $content("overview", "morethanmin").fetch();
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
