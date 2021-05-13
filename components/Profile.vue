<template>
  <div class="info-profile">
    <img
      ref="profileImage"
      src="/imgs/face.jpg"
      alt="face"
      class="info-profile-face rounded-circle"
    />
    <div class="info-profile-title">
      <div class="text-h5 font-weight-bold">Lee sang min</div>
      <div class="text-h6">morethanmin</div>
      <button class="mt-3 mb-3 rounded-lg">
        Edit profile
      </button>
    </div>
    <div class="info-profile-follo mb-8 text-body-2">
      <ul>
        <li>
          <v-icon>mdi-account-group-outline</v-icon>
          4 followers
        </li>
        <li>7 following</li>
        <li>
          <v-icon>mdi-star-outline</v-icon>
          34
        </li>
      </ul>
    </div>
    <div class="info-profile-detail text-body-2">
      <ul>
        <li>
          <v-icon>mdi-office-building-outline</v-icon>
          Myongji Univ
        </li>
        <li>
          <v-icon>mdi-map-marker-outline</v-icon>
          Seoul, South Korea
        </li>
        <li>
          <v-icon>mdi-email-outline</v-icon>
          mini4614@gmail.com
        </li>
        <li>
          <v-icon>mdi-link-variant</v-icon>
          https://github.com/morethanmin
        </li>
      </ul>
    </div>
    <v-divider class="mt-3 mb-3"></v-divider>
    <div class="text-body-2">
      <div>Organizations</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.info-profile {
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  .v-icon {
    font-size: 1.2rem;
  }
  /* transform: translateY(-25%); */
}
.info-profile-face {
  object-fit: cover;
  width: 100%;
  z-index: 10;
}
.info-profile-title {
  button {
    width: 100%;
    border: 1px solid #e2e3e4;
    background-color: #fafbfc;
  }
}
.info-profile-follo {
  li {
    float: left;
    margin-right: 5px;
  }
  height: 10px;
}
.info-profile-detail {
  li {
    margin-bottom: 4px;
  }
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
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
