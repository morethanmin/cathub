<template>
  <div>
    <div class="filter-box pb-5 mb-5">
      <input type="text" placeholder="Find a project... " />
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
  props: {
    projects: {
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
