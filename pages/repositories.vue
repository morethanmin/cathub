<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        <div class="ma-0 pa-0">
          <!-- <div class="d-flex">
            <input type="text" placeholder="Find a repository..." />
            <select name="type" id="">
              <option value="">a</option>
            </select>
            <select name="type" id="">
              <option value="">a</option>
            </select>
            <select name="type" id="">
              <option value="">a</option>
            </select>
            <button>new</button>
          </div> -->
          <v-divider class="mb-4"></v-divider>
          <div v-for="n in 10" :key="n" class="">
            <div class="d-flex mb-5 justify-space-between ">
              <div class="text-h6">cat-hub</div>
              <button class="subtitle-1"></button>
            </div>
            <div class="d-flex body-2 mb-3">
              <div>Vue Updated 1 hour ago</div>
              <button></button>
            </div>
            <v-divider class="mt-5 mb-5"></v-divider>
          </div>
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
  components: {
    Profile
  },
  data: () => ({
    tab: null
  }),
  computed: {
    ...mapGetters({
      isOvered: "getIsOvered"
    })
  },
  methods: {
    ...mapMutations({
      setIsOvered: "setIsOvered"
    }),
    handleScrollEvent() {
      const dom = this.$refs.profileImage;
      const targetScroll = dom.offsetTop + dom.height;

      if (targetScroll < window.scrollY) this.setIsOvered(true);
      else this.setIsOvered(false);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScrollEvent);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScrollEvent);
  }
};
</script>
