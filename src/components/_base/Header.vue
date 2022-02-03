<template>
  <div class="header">
    <div class="header-mainBox">
      <NuxtLink class="d-flex flex-row align-center" to="/">
        <v-icon>mdi-cat</v-icon>
        <!-- <span class="title-text text-h6"> Cathub </span> -->
      </NuxtLink>

      <div v-if="selectedTab === `About`" class="tab">
        <div
          class="header-nav text-body-2 font-weight-bold d-flex flex-row align-center"
        >
          <a @click="handleScroll(`.about`)">About</a>
          <a @click="handleScroll(`.projects`)">Projects</a>
          <a @click="handleScroll(`.skills`)">Skills</a>
          <a @click="handleScroll(`.carrer`)">Experience</a>
          <a @click="handleScroll(`.recommendations`)">Recommendations</a>
        </div>
      </div>
      <div
        v-if="
          selectedTab === `Projects` ||
            selectedTab === `Archive` ||
            selectedTab === `Other`
        "
        class="tab"
      >
        <div class="d-flex align-center">
          <SearchBar />
          <div
            class="header-nav d-flex flex-row align-center text-body-2 font-weight-bold"
          >
            <NuxtLink
              v-for="(category, index) of categories"
              :key="index"
              class="ml-4"
              :to="`/archive/${category.name}`"
            >
              {{ category.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="header-itemBox d-flex flex-row align-center">
      <toggle
        :menuItems="[
          {
            type: `link`,
            href: `https://github.com/morethanmin`,
            text: `Github`
          },
          {
            type: `link`,
            href: `https://www.linkedin.com/in/sangmin-lee-80703b229/`,
            text: `LinkedIn`
          },
          {
            type: `link`,
            href: `https://www.instagram.com/more_dev_min/`,
            text: `Instagram`
          },
          {
            type: `link`,
            href: `mailto:mini4614@gmail.com`,
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
        <v-icon>mdi-menu-down</v-icon>
      </toggle>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedTab: "",
    categories: []
  }),
  watch: {
    "$route.fullPath"(log) {
      this.getSelectedTab();
    }
  },
  computed: {},
  methods: {
    async getContent() {
      const { $content } = this;
      this.categories = await $content("categories")
        .only(["name"])
        .fetch();
    },
    getSelectedTab() {
      const match = this.$route.matched;
      if (Array.isArray(match) === false) return;
      else if (match.some(x => x.path === "")) this.selectedTab = "About";
      else if (match.some(x => x.path === "/projects"))
        this.selectedTab = "Projects";
      else if (match.some(x => x.path === "/archive"))
        this.selectedTab = "Archive";
      else this.selectedTab = "Other";
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
    this.getSelectedTab();
    await this.getContent();
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #252a2e;
  color: white;
  width: 100%;
  height: 60px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.tab {
  display: flex;
  align-content: center;
}
.header-mainBox {
  color: white;
  display: flex;
  align-content: center;
  margin-left: 20px;
  > * {
    margin-right: 20px;
  }
  //  d-flex flex-row align-center
}
.header-itemBox {
  > * {
    margin-right: 15px;
  }
}
.header-nav {
  > * {
    margin-right: 10px;
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
