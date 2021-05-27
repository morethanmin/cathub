<template>
  <div class="footer-box d-flex align-center common-wrapper">
    <div
      class="align-center footer-info ma-5 d-flex flex-row justify-space-between"
    >
      <span>&copy; {{ new Date().getFullYear() }} morethanmin</span>
      <div><a href="/">Security</a></div>
      <div><a href="/">Status</a></div>
      <div><a href="/">Source Code</a></div>
      <div>
        <a href="/"><v-icon>mdi-cat</v-icon></a>
      </div>
      <div><a href="/">Contact</a></div>
      <div><a href="/">Github</a></div>
      <div><a href="/">Blog</a></div>
      <div><a href="/">Instagram</a></div>
      <div><a href="/">About</a></div>
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