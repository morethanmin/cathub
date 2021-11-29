<template>
  <div>
    <div class="callout px-3 py-5 mb-5">
      💡 저의 두뇌는 휘발성이기 때문에, 비 휘발성인 블로그에 개발 관련 내용들을
      저장해 두고 있습니다.
    </div>
    <div class="filter-box pb-5 mb-5">
      <input
        type="text"
        v-model="input"
        placeholder="Find a category... "
        v-on:keyup="onChange(input)"
      />
    </div>
    <div class="mb-5">
      <CategoryList
        v-for="category of categories"
        :key="category.slug"
        :category="category"
        :parsedDate="
          parsedDate.find((item) => item.name === category.name).dates
        "
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.callout {
  background: rgba(245, 245, 245, 0.93);
  border-radius: 5px;
  font-size: 0.9rem;
}
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
      default: () => [],
    },
    searchInput: {
      type: String,
      default: "",
    },
    onChange: {
      type: Function,
      default: () => {},
    },
    parsedDate: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    input: "",
  }),
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    this.input = this.searchInput;
  },
};
</script>
