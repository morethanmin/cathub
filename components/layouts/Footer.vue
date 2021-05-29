<template>
  <div class="footer-box d-flex align-center common-wrapper">
    <div
      class="align-center footer-info ma-5 d-flex flex-row justify-space-between"
    >
      <span>&copy; {{ new Date().getFullYear() }} morethanmin</span>
      <div><a href="mailto:mini4614@gmail.com">Contact</a></div>
      <div>
        <a href="https://github.com/morethanmin/cat-hub">Source Code</a>
      </div>
      <div>
        <a href="/"><v-icon>mdi-cat</v-icon></a>
      </div>
      <div><a href="https://github.com/morethanmin">Github</a></div>
      <div><a href="https://moredevmin.tistory.com">Blog</a></div>
      <div>
        <a href="https://www.instagram.com/more_than_min/">Instagram</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-box {
  height: 150px;
}
.footer-info {
  width: 100%;
}
</style>