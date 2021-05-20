<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>
<script>
export default {
    data: ()=>({

    }),
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    mounted(){
      console.log(this.article);
    }
  }
</script>