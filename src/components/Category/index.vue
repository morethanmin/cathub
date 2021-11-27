<template>
  <v-row class="row-box">
    <v-col sm="12" md="9" class="mainsection" v-if="articles.length > 0">
      <div class="mainBox mt-5">
        <div class="mainBoxHeader">
          <div class="left">
            <img src="~/static/images/face.jpeg" alt="" srcset="" />
            <div class="name">
              morethanmin
            </div>
            <NuxtLink
              v-if="articles.length"
              class="alink"
              :to="{
                name: 'archive-category-article',
                params: { category: category.name, article: articles[0].slug }
              }"
            >
              recently writed {{ articles[0].title }}
            </NuxtLink>
            <div v-else>
              nothing
            </div>
          </div>
          <div class="right">
            <div v-if="articles.length">
              {{ articles[0].createdAt }}
            </div>
            <div>{{ articles.length }}articles</div>
          </div>
        </div>
        <div v-for="article in articles" :key="article.slug">
          <NuxtLink
            :to="{
              name: 'archive-category-article',
              params: { category: category.name, article: article.slug }
            }"
          >
            <!-- <img :src="article.img" :alt="article.alt" /> -->
            <div class="mainBoxConetnt">
              <div class="left">
                <div class="mainTitle">
                  <v-icon>mdi-text-box-outline</v-icon>
                  <div>
                    {{ article.title }}
                  </div>
                </div>
                <!-- <div class="sub">{{ article.description }}</div> -->
              </div>
              <div class="right">{{ article.createdAt }}</div>
            </div>
          </NuxtLink>
          <v-divider></v-divider>
        </div>
      </div>
    </v-col>
    <v-col sm="12" md="9" class="mainsection" v-else>
      작성된 게시글이 없습니당.
    </v-col>
    <v-col sm="12" md="3" class="sidesection">
      <div class="mt-5 sideBox">
        <div class="header">About</div>
        <div>{{ category.description }}</div>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.sideBox {
  .header {
    font-weight: bold;
  }
}
.mainBox {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  height: 100%;
}
.mainBoxHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #f6f8fa;
  padding: 10px;
  border-bottom: 1px solid #d0d7de;
  font-size: 0.9rem;
  .left {
    display: flex;
    align-items: center;
    gap: 5px;
    .name {
      font-weight: bold;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    .alink {
      font-weight: 400;
      color: black;
      &:hover {
        text-decoration: underline;
        color: #0969da;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
.mainBoxConetnt {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  .left {
    display: flex;
    .mainTitle {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .sub {
      color: #57606a;
    }
  }
  .right {
    color: #57606a;
  }
}
.row-box {
  height: 100%;
}

@media (max-width: $vt_sm) {
  .mainsection {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .sidesection,
  .alink {
    display: none;
  }
}
</style>
<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    category: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({}),
  content: {},
  mounted() {
    console.log(this.category);
  },
  methods: {}
};
</script>
