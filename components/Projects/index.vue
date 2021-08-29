<template>
  <div>
    <div class="ma-0 pa-0">
      <v-divider class="mb-4"></v-divider>
      <div v-for="n in 10" :key="n" class="">
        <info-list-box
          title="title"
          desc="description"
          createdAt="Updated 1 hour ago"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
<script>
export default {};
</script>
