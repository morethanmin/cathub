<template>
  <Projects :projects="extendedProjects" :onChange="onChange" />
</template>

<style lang="scss" scoped></style>
<script>
const formatDate = function(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
export default {
  head() {
    return {
      title: `projects - morethanmin`,
      meta: [
        {
          hid: `projects - morethanmin`,
          name: `projects - morethanmin`,
          content: `projects - morethanmin`
        }
      ]
    };
  },
  data: () => ({
    searchInput: "",
    projects: []
  }),
  computed: {
    extendedProjects() {
      return this.projects.map(project => {
        let extendedProject = project;
        extendedProject.createdAt = formatDate(project.createdAt);
        return extendedProject;
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
        this.projects = await this.$content("projects").fetch();
      } else {
        this.projects = await this.$content("projects")
          .search(searchInput)
          .fetch();
      }
    }
  },
  async mounted() {
    this.projects = await this.$content("projects").fetch();
  }
};
</script>
