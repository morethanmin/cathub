<template>
  <!-- 
       리스트 오른족에는 해당 프로젝트의 이미지를 보여준다.
     -->
  <Projects :projects="projects" />
</template>

<style lang="scss" scoped></style>
<script>
const formatDate = function(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
export default {
  async asyncData({ $content, params }) {
    const projects = (
      await $content("projects")
        .sortBy("createdAt")
        .fetch()
    ).map(projects => {
      let extendedProjects = projects;
      extendedProjects.createdAt = formatDate(projects.createdAt);
      return extendedProjects;
    });
    return {
      projects
    };
  },
  data: () => ({
    tab: null
  }),
  computed: {},
  methods: {}
};
</script>
