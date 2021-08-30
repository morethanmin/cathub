<template>
  <Archive
    :data="data"
    :total="total"
    :articles="articles"
    :categories="categories"
  />
</template>

<style lang="scss" scoped></style>
<script>
const formatDate = function(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};

export default {
  async asyncData({ $content, params }) {
    const articles = (
      await $content("articles")
        .sortBy("createdAt", "desc")
        .fetch()
    ).map(article => {
      let extendedArticle = article;
      extendedArticle.createdAt = formatDate(article.createdAt);
      return extendedArticle;
    });
    const articlesDateList = articles.map(article => article.createdAt);
    const parsedDate = articlesDateList.map(articleDate => {
      const date = new Date(articleDate);
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    });
    const data = {};
    parsedDate.forEach(x => {
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
      categories
    };
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {}
};
</script>
