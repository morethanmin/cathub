<template>
  <Projects :projects="extendedProjects" :onChange="onChange" />
</template>

<style lang="scss" scoped></style>
<script>
const formatDate = function (date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("projects").fetch();

    return {
      projects,
    };
  },
  head() {
    return {
      title: `projects - morethanmin`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "몰댄민의 프로젝트 페이지",
        },
        {
          property: "og:title",
          content: "projects - morethanmin",
        },
        {
          property: "og:description",
          content: "몰댄민의 프로젝트 페이지",
        },
      ],
    };
  },
  data: () => ({
    searchInput: "",
    projects: [],
  }),
  computed: {
    extendedProjects() {
      return this.projects.map((project) => {
        let extendedProject = project;
        extendedProject.createdAt = formatDate(project.createdAt);
        return extendedProject;
      });
    },
  },
  methods: {
    onChange(input) {
      this.searchInput = input;
    },
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
    },
  },
  async mounted() {
    this.projects = await this.$content("projects").fetch();
  },
};
</script>
