<template>
  <div class="header">
    <div class="header-bar justify-start">
      <div class="header-menu d-flex flex-row  align-center pl-3">
        <button v-on:click="toggle = !toggle">
          <v-icon>mdi-menu</v-icon>
        </button>
      </div>
      <div class="header-mainBox justify-center">
        <NuxtLink class="d-flex flex-row  align-center" to="/">
          <v-icon>mdi-cat</v-icon>
          <!-- <span class="title-text text-h6"> Cathub </span> -->
        </NuxtLink>
      </div>
      <div class="header-itemBox justify-end d-flex flex-row align-center">
        <!-- <v-icon>mdi-bell-outline</v-icon>
      <v-icon>mdi-plus</v-icon>
      <v-icon>mdi-menu-down</v-icon> -->
        <toggle />
      </div>
    </div>
    <div v-if="toggle">
      <div v-if="selectedTab === `Portfolio`" class="tab">
        <div class="header-nav text-subtitle-2 font-weight-bold">
          <a @click="handleScroll(offset.about)">About</a>
          <a @click="handleScroll(offset.skills)">Skills</a>
          <a @click="handleScroll(offset.projects)">Projects</a>
          <a @click="handleScroll(offset.carrer)">Carrer</a>
          <a @click="handleScroll(offset.recommend)">Recommendations</a>
        </div>
      </div>
      <div v-else class="tab">
        <div class="header-nav ">
          <search-bar />
          <NuxtLink
            v-for="(category, index) of categories"
            :key="index"
            class="text-subtitle-2 font-weight-bold"
            :to="`/archive/category/${category.name}`"
          >
            {{ category.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    selectedTab: "Portfolio",
    categories: [],
    toggle: false
  }),
  watch: {
    "$route.fullPath"(log) {
      this.initialSelectedTab();
      this.toggle = false;
    }
  },
  computed: {
    ...mapGetters({
      offset: "getOffset"
    })
  },
  methods: {
    async getContent() {
      const { $content } = this;
      this.categories = await $content("categories")
        .only(["name"])
        .fetch();
    },
    initialSelectedTab() {
      const match = this.$route.matched;
      if (Array.isArray(match) === false) return;
      if (match.some(x => x.path === "")) this.selectedTab = "Portfolio";
      if (match.some(x => x.path === "/archive")) this.selectedTab = "archive";
    },
    handleScroll(n) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: n - 45
      });
    }
  },
  async mounted() {
    await this.getContent();
    this.initialSelectedTab();
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  margin-bottom: 15px;
}
.header {
  background-color: #252a2e;
  color: white;
  margin-bottom: 30px;
}
.header-bar {
  width: 100%;
  height: 60px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  > * {
    flex-grow: 1;
  }
}
.tab {
  display: flex;
  align-content: center;
}
.header-menu {
  color: white;
  display: flex;
  align-content: center;
  .v-icon {
    color: white;
    font-size: 2rem;
  }
  //  d-flex flex-row align-center
}
.header-mainBox {
  color: white;
  display: flex;
  align-content: center;
}
.header-itemBox {
  > * {
    padding-right: 10px;
  }
}
.header-nav {
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: 10px 20px;
  > a {
    padding: 7px;
    border-top: 1px solid #444d56;
  }
}

.header-mainBox .v-icon {
  color: white;
  font-size: 2rem;
}

.header-itemBox .v-icon {
  color: white;
  font-size: 1.2rem;
}

.header-nav::-webkit-scrollbar {
  display: none;
}
</style>
