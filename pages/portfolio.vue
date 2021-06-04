<template>
  <div>
    <v-row>
      <v-col cols="9">
        <article-box>
          <!-- <h1>{{ article.title }}</h1> -->
          <!-- <p>{{ article.description }}</p> -->
          <!-- <img :src="article.img" :alt="article.alt" /> -->
          <!-- <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> -->

          <nuxt-content :document="article" />
          <!-- <category :category="article.category" /> -->
          <!-- <NuxtLink :to="`/archive`"> 돌아가기 </NuxtLink> -->
        </article-box>
      </v-col>
      <v-col cols="3">
        <track-box>
          <ul>
            <li
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3,
              }"
              v-for="link of article.toc"
              :key="link.id"
            >
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </track-box>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  layout: "detail",
  data: () => ({}),
  async asyncData({ $content, params }) {
    const article = await $content("portfolio", "about-me").fetch();

    return {
      article,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  mounted() {},
};
</script>