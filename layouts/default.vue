<template>
  <v-app>
    <v-app-bar flat class="header" hide-on-scroll app>
      <div class="header-mainBox d-flex flex-row align-center">
        <NuxtLink class="d-flex flex-row align-center" to="/">
          <v-icon>mdi-cat</v-icon>
          <span class="text-h6">
            Cathub
          </span>
        </NuxtLink>

        <input
          class="header-search rounded-lg pa-3 ml-5"
          type="text"
          placeholder="Search or jump to..."
        />
        <div
          class="header-nav d-flex flex-row align-center text-body-2 font-weight-bold"
        >
          <div class="ma-3 ">Pull requests</div>
          <div class="ma-0">Issues</div>
          <div class="ma-3">Marketplace</div>
          <div>Explore</div>
        </div>
      </div>
      <div class="header-itemBox d-flex flex-row align-center">
        <v-icon>mdi-bell-outline</v-icon>
        <v-icon>mdi-plus</v-icon>
        <v-icon>mdi-menu-down</v-icon>
        <img
          src="/imgs/face.jpg"
          alt="face"
          width="30"
          height="30"
          style="border-radius: 50%;"
        />
        <v-icon>mdi-menu-down</v-icon>
      </div>

      <template class="header-template" v-slot:extension>
        <v-container class=" common-wrapper pt-0 pb-0">
          <v-row class="header-row pleft ma-0" justify="center" align="center">
            <v-col class="pl-5 pr-3" cols="3">
              <transition name="fade">
                <div
                  v-if="$store.getters.getIsOvered"
                  class="d-flex align-center"
                >
                  <img
                    src="/imgs/face.jpg"
                    alt="face"
                    width="30"
                    height="30"
                    style="border-radius: 50%;"
                  />
                  <span class="ml-2 font-weight-bold">morethanmin</span>
                </div>
              </transition>
            </v-col>
            <v-col
              align-self="end"
              class="header-tab pt-0 pb-0 pr-5 pl-3"
              cols="9"
            >
              <div class=" d-flex flex-row text-subtitle-2 ">
                <div class="">
                  <NuxtLink to="/">
                    <button
                      ref="overview"
                      @click="selectedTab = 'overview'"
                      :class="[
                        ...(selectedTab === 'overview'
                          ? ['selectedTab', 'font-weight-bold']
                          : [])
                      ]"
                      class="d-flex flex-row align-center"
                    >
                      <v-icon>mdi-book-open-outline</v-icon>
                      <div class="ml-1 ">
                        Overview
                      </div>
                    </button>
                  </NuxtLink>
                </div>
                <div class="">
                  <NuxtLink to="/repositories">
                    <button
                      ref="repositories"
                      @click="selectedTab = 'repositories'"
                      :class="[
                        ...(selectedTab === 'repositories'
                          ? ['selectedTab', 'font-weight-bold']
                          : [])
                      ]"
                      class="d-flex flex-row align-center"
                    >
                      <v-icon>mdi-book-outline</v-icon>
                      <div class="ml-1">
                        Repositories
                      </div>
                    </button>
                  </NuxtLink>
                </div>
                <div class="">
                  <NuxtLink to="/projects">
                    <button
                      ref="projects"
                      @click="selectedTab = 'projects'"
                      :class="[
                        ...(selectedTab === 'projects'
                          ? ['selectedTab', 'font-weight-bold']
                          : [])
                      ]"
                      class="d-flex flex-row align-center"
                    >
                      <v-icon>mdi-chart-box-outline</v-icon>
                      <div class="">
                        Projects
                      </div>
                    </button>
                  </NuxtLink>
                </div>
                <div class="">
                  <NuxtLink to="/packages">
                    <button
                      ref="packages"
                      @click="selectedTab = 'packages'"
                      :class="[
                        ...(selectedTab === 'packages'
                          ? ['selectedTab', 'font-weight-bold']
                          : [])
                      ]"
                      class="d-flex flex-row  align-center"
                    >
                      <v-icon>mdi-cube-outline</v-icon>
                      <div class="ml-1">
                        Packages
                      </div>
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
    <v-main app>
      <v-container class="main common-wrapper">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <v-divider></v-divider>

      <div class="footer-box d-flex align-center common-wrapper">
        <div
          class="align-center footer-info ma-5 d-flex flex-row justify-space-between"
        >
          <span>&copy; {{ new Date().getFullYear() }} morethanmin, Inc.</span>
          <div><a href="/">Terms</a></div>
          <div><a href="/">Security</a></div>
          <div><a href="/">Status</a></div>
          <div><a href="/">Docs</a></div>
          <div>
            <a href="/"><v-icon>mdi-cat</v-icon></a>
          </div>
          <div><a href="/">Contact Cathub</a></div>
          <div><a href="/">Pricing</a></div>
          <div><a href="/">API</a></div>
          <div><a href="/">Training</a></div>
          <div><a href="/">Blog</a></div>
          <div><a href="/">About</a></div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.header {
  display: block !important;
  background-color: #252a2e !important;
  color: white !important;
}
.header-mainBox {
  color: white;
}
.header-mainBox .v-icon {
  color: white;
  font-size: 2rem;
}

.header-itemBox .v-icon {
  color: white;
  font-size: 1.2rem;
}

.header-template {
  z-index: 5 !important;
}
.header-row {
  height: 100%;
}

.header-search {
  color: white;
  border: 1px solid #444d56;
  height: 1rem;
  width: 200px;

  transition: width 0.25s;
}
.header-search:focus {
  width: 350px;
  color: black;
  background-color: white;
}

.layout-nav {
  position: fixed;
  width: 100%;
  color: #252a2e;
  background-color: white !important;
  border-bottom: 1px s black;
  //height: 100%;
}

.header-tab {
  button {
    height: 45px;
    font-size: 0.9rem;
    transition: border 0.2s;
    padding: 15px;
    border-bottom: 2px solid white;
  }
  button:hover {
    border-bottom: 2px solid black;
  }
  .v-icon {
    font-size: 1.25rem;
  }
  .selectedTab {
    border-bottom: 2px solid red !important;
  }
}
.main {
  margin-top: 40px;
}

.footer-box {
  height: 150px;
}
.footer-info {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
export default {
  data() {
    return {
      selectedTab: "overview"
    };
  },
  methods: {
    initialSelectedTab() {
      const match = this.$route.matched;

      if (Array.isArray(match) === false) return;

      if (match.some(x => x.path === "/overview"))
        this.selectedTab = "overview";
      if (match.some(x => x.path === "/repositories"))
        this.selectedTab = "repositories";
      if (match.some(x => x.path === "/projects"))
        this.selectedTab = "projects";
      if (match.some(x => x.path === "/packages"))
        this.selectedTab = "packages";
    }
  },
  mounted() {
    this.initialSelectedTab();
  }
};
</script>
