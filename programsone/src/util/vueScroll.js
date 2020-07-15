import Vue from "vue";
import vuescroll from "vuescroll";
Vue.use(vuescroll, {
  ops: {
    scrollPanel: {
      scrollingX: false
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: "#14A064",
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: "6px",
      disable: false
    }
  }
});