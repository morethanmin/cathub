<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        <div>
          <h1>카테고리</h1>
            <ul>
              <li v-for="(author, index) of authors" :key="index">
                <!-- <NuxtLink :to="{ name: 'archive', params: { slug: article.slug } }"> -->
                <NuxtLink :to="`/archive/author/${author}`">
                  {{author}}
                </NuxtLink>
              </li>
            </ul>
        </div>
        <div>
          <h1>최근 글</h1>
          <ul>
            <li v-for="article of articles" :key="article.slug">
              <!-- <NuxtLink :to="{ name: 'archive', params: { slug: article.slug } }"> -->
              <NuxtLink :to="`/archive/${article.slug}`">
                <!-- <img :src="article.img" /> -->
                <div>
                  <h2>{{ article.title }}</h2>
                  <p>by {{ article.author.name }}</p>
                  <p>{{ article.description }}</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped></style>
<script>
import { mapGetters, mapMutations } from "vuex";

import Profile from "~/components/Profile.vue";

export default {
  async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
  },
  components: {
    Profile
  },
  data: () => ({
    authors: []
  }),
  computed: {},
  methods: {},
  mounted(){
    this.authors = this.articles.map((article)=>{
      return article.author.name
    })
    this.authors  = [...new Set(this.authors)]
  }
};
</script>
