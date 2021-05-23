<template>
  <div>
    <!-- <img :src="category.image" /> -->
    <div>
      <h4>Category</h4>
      <p>{{ category }}</p>
      <!-- <p>{{ category.bio }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>