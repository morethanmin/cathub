<template>
  <Category :articles="articles" :category="category" />
</template>
<script>
const formatDate = function(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
export default {
  async asyncData({ $content, params }) {
    const articles = (
      await $content("articles")
        .where({
          category: params.category
        })
        .without("body")
        .sortBy("createdAt", "asc")
        .fetch()
    ).map(article => {
      let extendedArticle = article;
      extendedArticle.createdAt = formatDate(article.createdAt);
      extendedArticle.updatedAt = formatDate(article.updatedAt);
      return extendedArticle;
    });
    return {
      articles
    };
  },
  data: () => ({
    category: ""
  }),
  content: {
    nestedProperties: ["category.name"]
  },
  mounted() {
    this.category = this.$route.params.category;
  },
  methods: {}
};
</script>
