<template>
  <div class="search-box ml-5">
    <input
      class="search  "
      v-on:focus="handleFocusOn"
      v-on:blur="handleFocusOff"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search or jump to..."
    />
    <ul class="result " v-if="focused">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="`/archive/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: [],
        focused: false
      }
    },
    methods:{
      handleFocusOn(){
        this.focused = true
      },
      handleFocusOff(){
        setTimeout(() => {
        this.focused = false
          
        }, 250);
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = await this.$content('articles').fetch()
        } else {
          this.articles = await this.$content('articles')
          .limit(1)
          .search(searchQuery)
          .fetch()
        }
      }
    },
    async mounted(){
      this.articles = await this.$content('articles').fetch()
    }
  }
</script>

<style lang="scss" scoped>
.search-box{
  z-index: 99;
  position: relative;
}
.search {
  color: white;
  border: 1px solid #444d56;
  background-color: #252a2e;
  height: 1rem;
  padding: 15px;
  width: 200px;
  border-radius: 8px;
  transition: width 0.25s ease;
  /* transition: background-color 0.25s step-end; */
}
.search:focus {
  width: 350px;
  border: none;
  outline: none;
  color: black;
  background-color: white;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  .result{
    
  }
}
.result{
  z-index: 99;
  position: absolute;
  min-height: 300px;
  width: 100%;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: black;
}
</style>>
