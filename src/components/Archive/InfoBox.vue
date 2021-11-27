<template>
  <div class="bg-blue-500 text-white p-4 mb-4">
    <NuxtLink :to="`/infoboxtest/123`">dasdas</NuxtLink>

    <p><slot name="info-box">default</slot></p>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
