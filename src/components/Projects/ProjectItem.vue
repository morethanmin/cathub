<template>
  <div class="">
    <div class="card">
      <div class="card-content">
        <div class="d-flex justify-space-between">
          <a
            target="_blank"
            :href="`${project.href}`"
            class="text-h6 pinned-link"
            >{{ project.name }}</a
          >
        </div>
        <div class="mb-3 desc color_secondary">
          {{ project.description }}
        </div>
        <div class="d-flex subdesc color_secondary">
          <div class="d-flex mr-3">
            <languege-chip
              v-for="(tag, index) in project.tags"
              :key="index"
              :name="tag.name"
              :color="tag.color"
            />
          </div>
          <!-- <div>{{ project.createdAt }}</div> -->
        </div>
      </div>
      <div class="card-img">
        <v-img
          class="v-img"
          v-for="(img, idx) in project.imgs"
          :key="idx"
          :src="require(`~/static/images/${img}`)"
          :lazy-src="require(`~/static/images/${img}`)"
          :width="100"
          :height="100"
          alt=""
        />
      </div>
    </div>
    <v-divider class="mt-5 mb-5"></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.pinned-link {
  color: #0366d6 !important;
  font-weight: 700 !important;

  :hover {
    cursor: pointer;
  }
}
.pinned-link:hover {
  cursor: pointer;
  text-decoration: underline;
}

.desc {
  font-size: 0.9rem;
}
.subdesc {
  font-size: 0.8rem;
}

.card {
  display: flex;
  justify-content: space-between;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-img {
  display: flex;

  gap: 10px;
  filter: brightness(95%);
  .v-img {
    object-fit: cover !important;
    background: #e2e3e4;
  }
}

@media (max-width: $vt_sm) {
  .card-img {
    display: none;
  }
}
</style>
