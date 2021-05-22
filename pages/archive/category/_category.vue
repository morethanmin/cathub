<template>
  <div v-if="articles.length > 0">
    <h1>category: {{ articles[0].category.name }}</h1>
    <p>Bio: {{ articles[0].category.bio }}</p>
    <h3>Here are a list of articles by {{ articles[0].category.name }}:</h3>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink :to="`/archive/${article.slug}`">
          <!-- <img :src="article.img" :alt="article.alt" /> -->
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <p>{{ formatDate(article.updatedAt) }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .where({
        category: params.category,
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
    console.log(articles);
    return {
      articles,
    };
  },
  content: {
    nestedProperties: ["category.name"],
  },
  mounted() {
    console.log(this.articles);
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>