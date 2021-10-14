<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="`/archive/${prev.category}/${prev.slug}`"
      class="text-primary font-bold hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="`/archive/${next.category}/${next.slug}`"
      class="font-bold hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  mounted() {
    console.log(this.prev);
    console.log(this.next);
  }
};
</script>
