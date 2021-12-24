<template>
  <div>
    <Callout
      text="개인적으로 진행했던 프로젝트를 정리해두고있습니다. 클릭하면 해당 repository로 이동됩니다!"
    />
    <div class="filter-box pb-5 mb-5">
      <input
        type="text"
        v-model="input"
        placeholder="Find a project..."
        v-on:keyup="onChange(input)"
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
  props: {
    projects: {
      type: Array,
      default: () => []
    },
    searchInput: {
      type: String,
      default: ""
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    input: ""
  }),
  mounted() {
    this.input = this.searchInput;
  }
};
</script>
