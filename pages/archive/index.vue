<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        <div>
          <div class="pinned mb-5">
            <div class="d-flex justify-space-between mb-3">
              <div class="">Categories</div>
              <!-- <div class="text-body-2">Customize your pins</div> -->
            </div>
            <v-container class="ma-0 pa-0">
              <v-row>
                <v-col
                  v-for="(category, index) of categories"
                  :key="index"
                  cols="6"
                >
                  <info-card
                    icon=""
                    :title="category.name"
                    :subtitle="category.description"
                    :link="`/archive/category/${category.name}`"
                  />
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div>
          <div class="d-flex justify-space-between mb-3">
            <div class="">Recently Added</div>
            <!-- <div class="text-body-2">Customize your pins</div> -->
          </div>
          <v-divider class="mb-4"></v-divider>
          <div v-for="article of articles" :key="article.slug">
            <NuxtLink :to="`/archive/${article.slug}`">
              <info-list-box
                :title="article.title"
                :desc="article.description"
                :createdAt="formatDate(article.createdAt)"
              />
            </NuxtLink>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped></style>
<script>
import Profile from "~/components/Profile.vue";

export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "asc")
      .fetch();
    const categories = await $content("categories")
      .only(["name", "description"])
      .sortBy("createdAt", "asc")
      .fetch();

    console.log(categories);

    return {
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
  mounted() {
    console.log(this.articles);
  },
};
</script>
