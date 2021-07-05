<template>
  <div class="toggle">
    <button
      v-on:focus="focus = true"
      v-on:blur="focus = false"
      class="d-flex align-center"
    >
      <img
        src="~/static/images/face.jpg"
        alt="face"
        width="25"
        height="25"
        style="border-radius: 50%"
      />
      <v-icon class="icon-pc">mdi-menu-down</v-icon>
    </button>
    <div
      v-if="toggle"
      v-on:mouseover="hover = true"
      v-on:mouseout="hover = false"
      class="toggle-box"
    >
      <div class="arrow"></div>
      <ul class="menu">
        <li>
          <a
            target="_blank"
            class="d-flex align-center"
            href="https://github.com/morethanmin"
          >
            <span class="text-subtitle-2"> Github </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            class="d-flex align-center"
            href="https://moredevmin.tistory.com/"
          >
            <span class="text-subtitle-2"> Blog </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            class="d-flex align-center"
            href="https://www.instagram.com/more_dev_min/"
          >
            <span class="text-subtitle-2"> Instagram </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            class="d-flex align-center"
            href="mailto:mini4614@gmail.com"
          >
            <span class="text-subtitle-2"> Contact </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    focus: false,
    hover: false
  }),
  computed: {
    toggle() {
      const toggle = this.focus || this.hover;
      return toggle;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.toggle {
  position: relative;
}

.toggle-box {
  position: absolute;
  right: 0px;
  z-index: 99;
  min-height: 200px;
  width: 200px;
  background-color: none;
  display: flex;
  flex-direction: column;
  .arrow {
    align-self: flex-end;
    width: 0;
    height: 10;
    margin-right: 20px;
    transform: translate(0px, 1px);
    border-bottom: 8px solid white; /* 화살표 */
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
}

.v-icon {
  color: white;
  font-size: 1.2rem;
}

.menu {
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
  background: white;
  list-style: none;
  padding-left: 0px;
  :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  :last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  li {
    border-bottom: 1px solid #e4e4e4;
  }
  li,
  .v-icon {
    color: black;
    padding: 6px;
  }
  li:hover {
    background: #0366d6;
    color: white;
    .v-icon {
      transition: none;
      color: white;
    }
  }
}
.icon-pc {
  display: block;
}
@media (max-width: $vt_sm) {
  .icon-pc {
    display: none;
  }
}
</style>
