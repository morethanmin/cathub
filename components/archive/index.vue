<template>
  <div>
    <div class="filter-box pb-5 mb-5">
      <input type="text" placeholder="Find a category... " />
    </div>

    <div class="mb-5">
      <CategoryItem
        v-for="(category, index) of categories"
        :key="index"
        :category="category"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-box {
  border-bottom: 1px solid #e4e4e4;
}
input {
  border: 1px solid #d0d7de;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  width: 100%;
  outline: none;
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
  methods: {},
  mounted() {}
};
</script>
