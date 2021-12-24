<template>
  <v-container class="wrapper ma-0 pa-0">
    <div class="d-flex justify-space-between mb-3">
      <div class="skills color-black">Skills</div>
      <div>
        <!-- <v-icon class="left slide-btn">mdi-chevron-left</v-icon>
        <v-icon class="right slide-btn">mdi-chevron-right</v-icon> -->
      </div>
    </div>

    <div class="slide-box">
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="card-col"
          sm="12"
          md="4"
        >
          <Skill
            :icon="require(`~/static/svgs/${item.icon}`)"
            :title="item.title"
            :subtitle="item.subtitle"
            @click="
              selected = item.id;
              dialog = true;
            "
          />
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="card-col"
          sm="12"
          md="4"
        >
          <Skill
            :icon="require(`~/static/svgs/${item.icon}`)"
            :title="item.title"
            :subtitle="item.subtitle"
            @click="
              selected = item.id;
              dialog = true;
            "
          />
        </v-col>
      </v-row> -->
    </div>
    <div v-for="item in detailItems" :key="item.id">
      <Dialog
        v-if="selected === item.id"
        :icon="require(`~/static/svgs/${item.icon}`)"
        :title="item.title"
        :color="item.color"
        :subtitle="item.subtitle"
        :tags="item.tags"
        :percent="item.percent"
        :dialog="dialog"
        @close="dialog = false"
      />
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .slide-btn {
    // position: absolute;
    font-size: 1.5rem;
    cursor: pointer;
    border: 1px solid #e2e3e4;
    background-color: #fafbfc;
    &:hover {
      color: black;
    }
  }
  .slide-box {
    display: flex;
    // overflow-x: scroll;
    flex-shrink: 0;
  }
}
@media (max-width: $vt_xs) {
  .card-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    detailItems: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    selected: 0,
    dialog: false,
    reactDialog: false,
    vueDialog: false,
    expressDialog: false,
    javascriptDialog: false,
    djangoDialog: false,
    cssDialog: false
  }),
  mounted() {}
};
</script>
