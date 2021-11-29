<template>
  <v-container class="ma-0 pa-0">
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
      default: () => [],
    },
    detailItems: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    selected: 0,
    dialog: false,
    reactDialog: false,
    vueDialog: false,
    expressDialog: false,
    javascriptDialog: false,
    djangoDialog: false,
    cssDialog: false,
  }),
  mounted() {},
};
</script>
