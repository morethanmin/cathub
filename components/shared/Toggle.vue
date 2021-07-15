<template>
  <div class="toggle">
    <button
      v-on:focus="focus = true"
      v-on:blur="focus = false"
      class="d-flex align-center"
    >
      <slot></slot>
    </button>
    <div
      v-if="toggle"
      v-on:mouseover="hover = true"
      v-on:mouseout="hover = false"
      class="toggle-box"
    >
      <div class="arrow"></div>
      <div>
        <ul class="menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a
              v-if="item.type === `link`"
              target="_blank"
              class="d-flex align-center"
              :href="item.href"
            >
              <span class="text-subtitle-2"> {{ item.text }} </span>
            </a>
            <a
              v-else-if="item.type === `event`"
              class="d-flex align-center"
              @click="$emit(item.text)"
            >
              <span class="text-subtitle-2"> {{ item.text }} </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
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
  methods: {},
  mounted() {
    console.log(this.menuItems);
  }
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
</style>
