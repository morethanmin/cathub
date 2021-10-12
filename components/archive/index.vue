<template>
  <div>
    <div class="filter-box pb-5 mb-5">
      <input
        type="text"
        v-model="input"
        placeholder="Find a category... "
        v-on:keyup="onChange(input)"
      />
    </div>

    <div class="mb-5">
      <CategoryItem
        v-for="(category, index) of categories"
        :key="index"
        :category="category"
        :parsedDate="parsedDate.find(item => item.name === category.name).dates"
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
    categories: {
      type: Array,
      default: () => []
    },
    searchInput: {
      type: String,
      default: ""
    },
    onChange: {
      type: Function,
      default: () => {
        console.log("!");
      }
    },
    parsedDate: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    input: ""
  }),
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    this.input = this.searchInput;
  }
};
</script>
