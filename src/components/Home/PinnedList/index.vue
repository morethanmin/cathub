<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        class="card-col"
        sm="12"
        md="6"
      >
        <PinnedItem
          :title="item.name"
          :subtitle="item.description"
          :langueges="item.tags"
          :href="item.href"
        />
      </v-col>
    </v-row>
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
      default: () => []
    }
  }
};
</script>
