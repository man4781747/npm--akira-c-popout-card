import { createElementBlock as a, openBlock as i, Fragment as w, createVNode as r, Transition as l, withCtx as d, createCommentVNode as s, withModifiers as p, createElementVNode as g, renderSlot as k } from "vue";
const b = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [c, t] of n)
    o[c] = t;
  return o;
}, v = {
  name: "PopoutCard",
  components: {},
  props: {
    // loadingWindow: Controls the visibility of the loading overlay.
    // Type: Boolean
    // Default: false
    // When true, a "wait..." message is displayed, and the card cannot be closed by clicking the background.
    loadingWindow: {
      type: Boolean,
      default: !1
    }
  },
  // Emits: Defines the events that this component can emit.
  // - closeWindow: Emitted when the card is requested to be closed (e.g., by clicking the background or programmatically).
  //   The parent component should handle this event to hide the card (e.g., by setting a v-if directive to false).
  emits: ["closeWindow"],
  data() {
    return {
      // isOpen: Controls the visibility and animations of the card and its backdrop.
      // When true, the card and backdrop are visible and enter animations play.
      // When false, leave animations play, and then the elements can be removed from the DOM by the parent.
      isOpen: !1
    };
  },
  methods: {
    // closeWindow(): Method to initiate the closing of the card.
    closeWindow() {
      if (this.loadingWindow == !1) {
        this.isOpen = !1;
        var e = this;
        setTimeout(() => {
          e.$emit("closeWindow");
        }, 500);
      }
    }
  },
  // mounted(): Vue lifecycle hook called after the component has been mounted to the DOM.
  mounted() {
    this.$nextTick(function() {
      this.isOpen = !0;
    });
  }
}, h = {
  key: 0,
  class: "akira-c-blank-background"
}, y = {
  key: 0,
  class: "card-loading"
};
function x(e, n, o, c, t, m) {
  return i(), a(w, null, [
    r(l, { name: "blank-background-anime" }, {
      default: d(() => [
        t.isOpen ? (i(), a("div", h)) : s("", !0)
      ]),
      _: 1
    }),
    r(l, { name: "pop-window-anime" }, {
      default: d(() => [
        t.isOpen ? (i(), a("div", {
          key: 0,
          class: "akira-card",
          onClick: n[1] || (n[1] = p((...f) => m.closeWindow && m.closeWindow(...f), ["stop"]))
        }, [
          g("div", {
            class: "card",
            onClick: n[0] || (n[0] = p(() => {
            }, ["stop"]))
          }, [
            r(l, { name: "loading-window-anime" }, {
              default: d(() => [
                o.loadingWindow ? (i(), a("div", y, "wait...")) : s("", !0)
              ]),
              _: 1
            }),
            k(e.$slots, "default")
          ])
        ])) : s("", !0)
      ]),
      _: 3
    })
  ], 64);
}
const _ = /* @__PURE__ */ b(v, [["render", x]]), W = (e) => {
  console.log("install from packages/index.js"), e.component("PopoutCard", _);
}, u = document.createElement("style");
u.textContent = `.akira-c-blank-background{background-color:#00000080;position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;z-index:100}.akira-card{position:absolute;opacity:1;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;z-index:101}.akira-card .card{height:fit-content;margin-top:3rem;max-width:calc(100% - 16px);min-width:300px;min-height:1rem;overflow:hidden}.akira-card .card .card-loading{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#000c;display:flex;justify-content:center;align-items:center;color:#fff;font-size:2rem}.blank-background-anime-leave-active,.blank-background-anime-enter-active{transition:all .5s ease}.blank-background-anime-enter-from,.blank-background-anime-leave-to{background-color:#0000}.pop-window-anime-leave-active,.pop-window-anime-enter-active{transition:all .5s ease}.pop-window-anime-enter-from{margin-top:-10rem;opacity:0}.pop-window-anime-leave-to{opacity:0;margin-top:10rem}.loading-window-anime-leave-active,.loading-window-anime-enter-active{transition:all .25s ease}.loading-window-anime-enter-from,.loading-window-anime-leave-to{opacity:0}
`;
document.head.appendChild(u);
export {
  _ as PopoutCard,
  W as install
};
