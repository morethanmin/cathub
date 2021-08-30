<template>
  <div class="">
    <div class="card-content">
      <div>
        <div class="d-flex justify-space-between">
          <a
            target="_blank"
            :href="`${project.href}`"
            class="text-h6 pinned-link"
            >{{ project.name }}</a
          >
          <button class="subtitle-1"></button>
        </div>
        <div class="mb-3 desc color_secondary">
          {{ project.description }}
        </div>
        <div class="d-flex subdesc mb-3 color_secondary">
          <div class="d-flex mr-3">
            <languege-chip
              v-for="(tag, index) in project.tags"
              :key="index"
              :name="tag.name"
              :color="tag.color"
            />
          </div>
          <div>{{ project.createdAt }}</div>
        </div>
      </div>
      <div class="card-img">
        <img
          v-for="(img, idx) in project.imgs"
          :key="idx"
          :src="require(`~/static/images/${img}`)"
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
      default: () => ({})
    }
  }
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

.card-content {
  display: flex;
  justify-content: space-between;
}

.card-img {
  display: flex;

  gap: 10px;
  filter: brightness(95%);
  img {
    object-fit: cover;
    width: 100px;
    height: 100px;
  }
}

@media (max-width: $vt_sm) {
  .card-img {
    display: none;
  }
}

</style>
