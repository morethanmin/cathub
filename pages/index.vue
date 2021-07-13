<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" sm="12" md="3">
        <profile />
      </v-col>
      <v-col class="align-self-start pa-5" sm="12" md="9">
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="about  color-black">About</div>
          </div>
          <v-card outlined flat class="pa-5 color-black">
            <nuxt-content :document="about" />
          </v-card>
        </div>
        <!-- <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="skills color-black">Skills</div>
          </div>
          <v-card outlined flat class="pa-5 color-black">
            <nuxt-content :document="skills" />
          </v-card>
        </div> -->

        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="projects color-black">Projects</div>
            <a
              target="_blank"
              href="https://github.com/morethanmin?tab=repositories"
            >
              <div class="text-body-2">more</div>
            </a>
          </div>
          <ProjectList />
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="skills color-black">Skills</div>
          </div>
          <SkillList />
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="carrer color-black">Develop Activity</div>
          </div>
          <ActivityList />
        </div>

        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="recommendations color-black">
              Recommendations
            </div>
          </div>
          <v-divider></v-divider>
          <CommentList />
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
    }
  },
  async mounted() {
    // document.addEventListener("scroll", this.setOffset);
    // this.parseArticleDate()
    // this.parseTotal()
  }
};
</script>
