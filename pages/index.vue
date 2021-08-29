<template>
  <Home :about="about" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const about = await $content("overview", "about").fetch();
    return {
      about
    };
  }
};
</script>
