<template>
  <div class="info-profile black--text">
    <img
      ref="profileImage"
      src="/images/face.jpg"
      alt="face"
      class="info-profile-face rounded-circle"
    />
    <div class="info-profile-title">
      <div class="text-h5 font-weight-bold">Lee sang min</div>
      <div class="text-h6 font-weight-thin">morethanmin</div>
      <a
        href="https://drive.google.com/file/d/14nCRNLFrW6macCUp4ImfaYqcs7vORfF-/view?usp=sharing"
      >
        <button
          class="mt-3 mb-3 pa-1 rounded-lg font-weight-bold text-subtitle-2"
        >
          resume
        </button>
      </a>
    </div>
    <!-- <div class="info-profile-follo mb-8 text-body-2">
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
    </div> -->
    <div class="info-profile-detail text-body-2">
      <div class="d-flex flex-column flex-nowrap">
        <div>
          <v-icon>mdi-laptop</v-icon>
          Frontend engineer
        </div>
        <div>
          <v-icon>mdi-office-building-outline</v-icon>
          Myongji Univ
        </div>
        <div>
          <v-icon>mdi-map-marker-outline</v-icon>
          Seodul, South Korea
        </div>
        <div>
          <v-icon>mdi-email-outline</v-icon>
          mini4614@gmail.com
        </div>
        <!-- <div>
          <v-icon>mdi-link-variant</v-icon>
          https://github.com/morethanmin
        </div> -->
      </div>
    </div>
    <v-divider class="mt-3 mb-3"></v-divider>
    <div class="text-body-1 font-weight-bold mb-3">Corporations</div>
    <a href="http://www.giantcorp.co.kr/">
      <img class="corp-img" src="/images/giant.png" alt="" />
    </a>
    <a href="http://wepla.net/">
      <img class="corp-img" src="/images/weplanet.png" alt="" />
    </a>
    <a href="http://www.trigit.com/">
      <img class="corp-img" src="/images/trigit.png" alt="" />
    </a>
    <!-- <div class="text-body-1 font-weight-bold mb-3">Organizations</div>
    <img class="corp-img" src="" alt="" />
    <img class="corp-img" src="" alt="" />
    <img class="corp-img" src="" alt="" /> -->
  </div>
</template>
<style lang="scss" scoped>
.info-profile-detail {
  > div {
    padding: 0;
    > div {
      list-style-type: none;
      display: flex;
      margin-bottom: 8px;
    }
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
.corp-img {
  background: #e2e3e4;
  width: 45px;
  height: 45px;
  border-radius: 15px;
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isOvered: "getIsOvered",
    }),
  },
  methods: {
    ...mapMutations({
      setIsOvered: "setIsOvered",
    }),
    handleScrollEvent() {
      const dom = this.$refs.profileImage;
      const targetScroll = dom.offsetTop + dom.height;

      if (targetScroll < window.scrollY) this.setIsOvered(true);
      else this.setIsOvered(false);
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScrollEvent);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScrollEvent);
  },
};
</script>
