<template>
  <!-- <v-chip class="chip" color="white" small>
      <div></div>
      {{ name }}
    </v-chip> -->
  <div class="wrapper" color="white" small>
    <div></div>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  padding-left: 0px;
  padding-right: 0px;
  margin-right: 5px;
  div {
    margin-right: 5px;
    border-radius: 50%;
    background: #f1e05a;
    width: 10px;
    height: 10px;
  }
}
</style>
