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
        <toggle
          :menuItems="[
            {
              type: `link`,
              href: `https://github.com/morethanmin`,
              text: `Github`
            },
            {
              type: `link`,
              href: `https://www.linkedin.com/in/morethanmin`,
              text: `LinkedIn`
            },
            {
              type: `link`,
              href: `https://www.instagram.com/more_dev_min/`,
              text: `Instagram`
            },
            {
              type: `link`,
              href: `mailto:morethanmin.dev@gmail.com`,
              text: `Contact`
            }
          ]"
        >
          <img
            src="~/static/images/face.jpg"
            alt="face"
            width="25"
            height="25"
            style="border-radius: 50%"
          />
        </toggle>
      </div>
    </div>
    <div v-if="toggle">
      <div v-if="selectedTab === `about`" class="tab">
        <div class="header-nav text-subtitle-2 font-weight-bold">
          <a @click="handleScroll(`.about`)">About</a>
          <a @click="handleScroll(`.skills`)">Skills</a>
          <a @click="handleScroll(`.projects`)">Projects</a>
          <a @click="handleScroll(`.carrer`)">Carrer</a>
          <a @click="handleScroll(`.recommendations`)">Recommendations</a>
        </div>
      </div>
      <div v-else class="tab">
        <div class="header-nav ">
          <search-bar />
          <NuxtLink
            v-for="(category, index) of categories"
            :key="index"
            class="text-subtitle-2 font-weight-bold"
            :to="`/archive/${category.name}`"
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
    selectedTab: "",
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
      if (match.some(x => x.path === "")) this.selectedTab = "about";
      if (match.some(x => x.path === "/projects"))
        this.selectedTab = "projects";
      if (match.some(x => x.path === "/archive")) this.selectedTab = "archive";
    },
    handleScroll(classname) {
      const element = document.querySelector(classname);
      const top = element.offsetParent.offsetTop + element.offsetTop;
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: top - 45
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
