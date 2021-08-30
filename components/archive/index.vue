<template>
  <div>
    <!-- <div class="pinned mb-5">
      <div class="d-flex justify-space-between mb-3">
        <div class="color-black">{{ total }} Articles posted</div>
      </div>
      <div class="ma-0 pa-0">
        <v-card class="commit" outlined flat>
          <commit-box :countedDate="data" />
        </v-card>
      </div>
    </div> -->
    <div class="pinned mb-5">
      <!-- <div class="d-flex justify-space-between mb-3">
        <div class="">Categories</div>
      </div> -->
      <v-container class="ma-0 pa-0">
        <v-row>
          <v-col
            class="card"
            v-for="(category, index) of categories"
            :key="index"
            sm="12"
            md="6"
          >
            <project
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
    <!-- <div>
      <div class="d-flex justify-space-between mb-3">
        <div class="">Recently Added</div>
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
              :date="article.createdAt"
            />
          </NuxtLink>
        </v-col>
      </v-row>
    </div> -->
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
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    total: {
      type: Number,
      default: 0
    },
    articles: {
      type: Array,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  mounted() {}
};
</script>
