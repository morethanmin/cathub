<template>
  <div>
    <div class="filter-box pb-5 mb-5">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Find a project... "
      />
    </div>
    <div class="mb-5">
      <ProjectItem
        v-for="(project, index) of projects"
        :key="index"
        :project="project"
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
  props: {},
  data: () => ({
    searchQuery: "",
    projects: []
  }),
  computed: {},
  methods: {},
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.projects = await this.$content("projects").fetch();
      } else {
        this.projects = await this.$content("projects")
          .search(searchQuery)
          .fetch();
      }
    }
  },
  async mounted() {
    this.projects = await this.$content("projects").fetch();
  }
};
</script>
