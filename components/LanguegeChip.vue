<template>
  <v-chip color="white" small>
    <div></div>
    {{name}}
  </v-chip>
</template>

<script>
export default {
  props: {
    name:{
      type:String,
      default:""
    }
  }
}
</script>

<style lang="scss" scoped>
.v-chip{
  padding-left: 0px;
  padding-right: 0px;
  margin-right: 5px;
  div{
    margin-right: 5px;
    border-radius: 50%;
    background: #f1e05a;
    width: 10px;
    height: 10px;
  }
}
</style>