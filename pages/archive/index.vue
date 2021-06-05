<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="card col-info pa-5" sm="12" md="3">
        <Profile />
      </v-col>
      <v-col class="card align-self-start pa-5" sm="12" md="9">
        <div class="pinned mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="color-black">{{ total }} Articles posted</div>
          </div>
          <div class="ma-0 pa-0">
            <v-card class="commit" outlined flat>
              <commit-box :countedDate="data" />
            </v-card>
          </div>
        </div>
        <div class="pinned mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="">Categories</div>
            <!-- <div class="text-body-2">Customize your pins</div> -->
          </div>
          <v-container class="ma-0 pa-0">
            <v-row>
              <v-col
                class="card"
                v-for="(category, index) of categories"
                :key="index"
                sm="12"
                md="6"
              >
                <info-card
                  icon=""
                  :title="category.name"
                  :subtitle="category.description"
                  :link="`/archive/category/${category.name}`"
                  :desc="[]"
                />
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div>
          <div class="d-flex justify-space-between mb-3">
            <div class="">Recently Added</div>
            <!-- <div class="text-body-2">Customize your pins</div> -->
          </div>
          <v-row>
            <v-col
              class="card"
              v-for="article of articles"
              :key="article.slug"
              sm="12"
              md="6"
            >
              <NuxtLink :to="`/archive/${article.slug}`">
                <article-card
                  :title="article.title"
                  :desc="article.description"
                  :category="article.category"
                  :date="formatDate(article.createdAt)"
                />
              </NuxtLink>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.commit {
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  > * {
    margin-right: 10px;
  }
}
@media (max-width: $vt_sm) {
  .card {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (max-width: $vt_xs) {
  .card {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
<script>
import Profile from "~/components/Profile.vue";

export default {
  async asyncData({ $content, params }) {
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
    const categories = await $content("categories")
      .only(["name", "description"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      data,
      total,
      articles,
      categories,
    };
  },
  components: {
    Profile,
  },
  data: () => ({}),
  computed: {},
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  mounted() {},
};
</script>
