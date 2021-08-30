<template>
  <Home :about="about" :projects="projects" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const about = await $content("overview", "about").fetch();
    const projects = await $content("projects")
      .where({ pinned: true })
      .sortBy("sort")
      .fetch();
    return {
      about,
      projects
    };
  }
};
</script>
