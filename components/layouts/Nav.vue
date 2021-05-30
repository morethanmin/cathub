<template>
  <v-container class="common-wrapper color-black pt-0 pb-0">
    <v-row class="header-row pleft ma-0" align="center">
      <v-col class="show-text pl-5 pr-3" cols="3">
        <transition name="fade">
          <div v-if="$store.getters.getIsOvered" class="d-flex align-center">
            <img
              src="/images/face.jpg"
              alt="face"
              width="30"
              height="30"
              style="border-radius: 50%"
            />
            <span class="ml-2 font-weight-bold">morethanmin</span>
          </div>
        </transition>
      </v-col>
      <v-col align-self="end" class="header-tab pt-0 pb-0 pr-5 pl-3" cols="9">
        <div class="d-flex flex-row text-subtitle-2">
          <div class="">
            <NuxtLink to="/">
              <button
                ref="overview"
                @click="selectedTab = 'overview'"
                :class="[
                  ...(selectedTab === 'overview'
                    ? ['selectedTab', 'font-weight-bold']
                    : []),
                ]"
                class="d-flex flex-row align-center"
              >
                <v-icon>mdi-book-open-outline</v-icon>
                <div class="ml-1">Overview</div>
              </button>
            </NuxtLink>
          </div>
          <!-- <div class="">
            <NuxtLink to="/repositories">
              <button
                ref="repositories"
                @click="selectedTab = 'repositories'"
                :class="[
                  ...(selectedTab === 'repositories'
                    ? ['selectedTab', 'font-weight-bold']
                    : []),
                ]"
                class="d-flex flex-row align-center"
              >
                <v-icon>mdi-book-outline</v-icon>
                <div class="ml-1">Repositories</div>
              </button>
            </NuxtLink>
          </div> -->
          <!-- <div class="">
            <NuxtLink to="/projects">
              <button
                ref="projects"
                @click="selectedTab = 'projects'"
                :class="[
                  ...(selectedTab === 'projects'
                    ? ['selectedTab', 'font-weight-bold']
                    : []),
                ]"
                class="d-flex flex-row align-center"
              >
                <v-icon>mdi-chart-box-outline</v-icon>
                <div class="">Projects</div>
              </button>
            </NuxtLink>
          </div> -->
          <div class="">
            <NuxtLink to="/archive">
              <button
                ref="packages"
                @click="selectedTab = 'archive'"
                :class="[
                  ...(selectedTab === 'archive'
                    ? ['selectedTab', 'font-weight-bold']
                    : []),
                ]"
                class="d-flex flex-row align-center"
              >
                <v-icon>mdi-cube-outline</v-icon>
                <div class="ml-1">Archive</div>
              </button>
            </NuxtLink>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.header-template {
}
.header-row {
  height: 100%;
}

.layout-nav {
  position: fixed;
  width: 100%;
  color: #252a2e;
  background-color: white !important;
  border-bottom: 1px solid black;
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
    border-bottom: 2px solid #d1d5da;
  }
  .v-icon {
    font-size: 1.25rem;
  }
  .selectedTab {
    .v-icon {
      color: black;
    }
    border-bottom: 2px solid red !important;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media (max-width: $vt_sm) {
  .show-text {
    display: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      selectedTab: "overview",
    };
  },
  watch: {
    "$route.fullPath"(log) {
      this.initialSelectedTab();
    },
  },
  methods: {
    initialSelectedTab() {
      const match = this.$route.matched;
      if (Array.isArray(match) === false) return;
      if (match.some((x) => x.path === "")) this.selectedTab = "overview";
      if (match.some((x) => x.path === "/overview"))
        this.selectedTab = "overview";
      if (match.some((x) => x.path === "/repositories"))
        this.selectedTab = "repositories";
      if (match.some((x) => x.path === "/projects"))
        this.selectedTab = "projects";
      if (match.some((x) => x.path === "/archive"))
        this.selectedTab = "archive";
    },
  },
  mounted() {
    this.initialSelectedTab();
  },
};
</script>