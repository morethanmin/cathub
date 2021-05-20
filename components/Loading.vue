<script>
export default {
  data() {
    return {
      percent: 0,
      show: false,
      visible: true,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 0,
      duration: 5000,
      continuous: false,
      height: "2px",
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl
        ? this.reversed
          ? "0px"
          : "auto"
        : !this.reversed
        ? "0px"
        : "auto";
    },
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.visible = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.visible = false;
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 1000);
      return this;
    },
    fail() {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (!this.visible) {
        this.visible = true;
      }
      if (typeof this._cut === "undefined") {
        this._cut = 5000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;

            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;

            this.reversed = !this.reversed;
          }
        }
      }, 100);
    },
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h("div", {
        staticClass: "page-loading-progress",
        class: {
          "page-loading-progress-hide": !this.visible,
          "page-loading-progress-notransition": this.skipTimerCount > 0,
          "page-loading-progress-failed": !this.canSucceed,
        },
        style: {
          width: this.percent + "%",
          left: this.left,
        },
      });
    }
    return el;
  },
};
</script>

<style lang="scss">
.page-loading-progress {
  position: fixed;
  top: 0px;
  z-index: 999;
  left: 0px;
  right: 0px;
  width: 0%;
  height: 2px;
  opacity: 1;
  transition: width 0.2s, opacity 1s;
  background-color: #6eafff;
}

.page-loading-progress-hide {
  opacity: 0;
}

.page-loading-progress.page-loading-progress-notransition {
  transition: none;
}

.page-loading-progress-failed {
  background-color: red;
}
</style>
