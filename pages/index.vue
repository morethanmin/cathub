<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" sm="12" md="3">
        <profile />
      </v-col>
      <v-col class="align-self-start pa-5" sm="12" md="9">
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div ref="about" class=" color-black">About</div>
          </div>
          <v-card outlined flat class="pa-5 color-black">
            <nuxt-content :document="about" />
          </v-card>
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div ref="skills" class="skills color-black">Skills</div>
          </div>
          <v-card outlined flat class="pa-5 color-black">
            <nuxt-content :document="skills" />
          </v-card>
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div ref="projects" class="projects color-black">Projects</div>
          </div>
          <project-box-list />
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div ref="carrer" class="color-black">Carrer</div>
            <!-- <NuxtLink to="/repositories">
              <div class="text-body-2">more...</div>
            </NuxtLink> -->
          </div>
          <activity-box-list />
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div ref="recommendations" class="color-black">
              Recommendations
            </div>
          </div>
          <v-divider></v-divider>
          <comment-box-list />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: $vt_xs) {
  .col-info {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  async asyncData({ $content, params }) {
    const about = await $content("overview", "about").fetch();
    const skills = await $content("overview", "skills").fetch();
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .fetch();
    const articlesDateList = articles.map(article => article.createdAt);
    const parsedDate = articlesDateList.map(articleDate => {
      const date = new Date(articleDate);
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    });
    const data = {};
    parsedDate.forEach(x => {
      data[x] = (data[x] || 0) + 1;
    });
    const total = articlesDateList.length;
    return {
      about,
      skills,
      data,
      total
    };
  },
  data: () => ({
    data: {},
    total: 0
  }),
  computed: {},
  methods: {
    ...mapMutations({
      initOffset: "setOffset"
    }),
    parseDate(date) {
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    },
    parseArticleDate() {
      const date = this.articlesDateList.map(articleDate => {
        const date = new Date(articleDate);
        return this.parseDate(date);
      });
      const data = {};
      date.forEach(x => {
        data[x] = (data[x] || 0) + 1;
      });

      this.countedDate = data;
    },
    parseTotal() {
      this.total = this.articlesDateList.length;
    },
    getElementY(element) {
      console.log(`${element.offsetParent.offsetTop} + ${element.offsetTop}`);
      return element.offsetParent.offsetTop + element.offsetTop;
    },
    setOffset() {
      const offset = {};
      // window.pageYOffset + element.getBoundingClientRect().top;
      offset.about = this.getElementY(this.$refs.about);
      offset.skills = this.getElementY(this.$refs.skills);
      offset.projects = this.getElementY(this.$refs.projects);
      offset.carrer = this.getElementY(this.$refs.carrer);
      offset.recommend = this.getElementY(this.$refs.recommendations);
      this.initOffset(offset);
    }
  },
  async mounted() {
    console.log("mounted");
    // document.addEventListener("scroll", this.setOffset);
    // this.parseArticleDate()
    // this.parseTotal()

    // md height not calculated in mounted :<
    setTimeout(
      function() {
        this.setOffset();
      }.bind(this),
      500
    );
  }
};
</script>
