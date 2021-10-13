<template>
  <Category :articles="articles" :category="category" />
</template>
<script>
const formatDate = function(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
export default {
  layout: "detail",
  async asyncData({ $content, params }) {
    const category = params.category;
    const articles = (
      await $content("articles", { deep: true })
        .where({
          category: category
        })
        .without("body")
        .sortBy("createdAt", "desc")
        .fetch()
    ).map(article => {
      let extendedArticle = article;
      extendedArticle.createdAt = formatDate(article.createdAt);
      extendedArticle.updatedAt = formatDate(article.updatedAt);
      return extendedArticle;
    });
    return {
      articles,
      category
    };
  },
  data: () => ({}),
  content: {
    nestedProperties: ["category.name"]
  },

  watch: {},
  mounted() {}
};
</script>
