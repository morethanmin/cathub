<template>
  <div>
    <Comment
      v-for="(item, idx) in comments"
      :key="idx"
      :img="require(`~/static/images/${item.img}`)"
      :title="item.title"
      :subTitle="item.subtitle"
      :comment="item.comment"
    />
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  }
};
</script>
