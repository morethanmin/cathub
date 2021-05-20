<template>
  <div class="footer-box d-flex align-center common-wrapper">
    <div
      class="align-center footer-info ma-5 d-flex flex-row justify-space-between"
    >
      <span>&copy; {{ new Date().getFullYear() }} morethanmin, Inc.</span>
      <div><a href="/">Terms</a></div>
      <div><a href="/">Security</a></div>
      <div><a href="/">Status</a></div>
      <div><a href="/">Docs</a></div>
      <div>
        <a href="/"><v-icon>mdi-cat</v-icon></a>
      </div>
      <div><a href="/">Contact Cathub</a></div>
      <div><a href="/">Pricing</a></div>
      <div><a href="/">API</a></div>
      <div><a href="/">Training</a></div>
      <div><a href="/">Blog</a></div>
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