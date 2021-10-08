<template>
  <Archive
    :categories="extendedCategories"
    :searchInput="searchInput"
    :onChange="onChange"
  />
</template>

<style lang="scss" scoped></style>
<script>
const formatDate = function(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};

export default {
  async asyncData({ $content, params }) {},
  data: () => ({
    searchInput: "",
    categories: []
  }),
  computed: {
    extendedCategories() {
      return this.categories.map(category => {
        let extendedCategory = category;
        extendedCategory.createdAt = formatDate(category.createdAt);
        return extendedCategory;
      });
    }
  },
  methods: {
    onChange(input) {
      this.searchInput = input;
    }
  },
  watch: {
    async searchInput(searchInput) {
      if (!searchInput) {
        this.categories = await this.$content("categories").fetch();
      } else {
        this.categories = await this.$content("categories")
          .search(searchInput)
          .fetch();
      }
    }
  },
  async mounted() {
    this.categories = await this.$content("categories").fetch();
  }
};
</script>
