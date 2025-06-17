import { createElementBlock as i, openBlock as s, Fragment as k, createVNode as d, Transition as r, withCtx as c, createCommentVNode as l, withModifiers as m, createElementVNode as w, renderSlot as _ } from "vue";
const g = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [u, t] of o)
    n[u] = t;
  return n;
}, h = {
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
}, v = {
  key: 0,
  class: "akira-c-blank-background"
}, C = {
  key: 0,
  class: "card-loading"
};
function W(e, o, n, u, t, p) {
  return s(), i(k, null, [
    d(r, { name: "blank-background-anime" }, {
      default: c(() => [
        t.isOpen ? (s(), i("div", v)) : l("", !0)
      ]),
      _: 1
    }),
    d(r, { name: "pop-window-anime" }, {
      default: c(() => [
        t.isOpen ? (s(), i("div", {
          key: 0,
          class: "akira-card",
          onClick: o[1] || (o[1] = m((...f) => p.closeWindow && p.closeWindow(...f), ["stop"]))
        }, [
          w("div", {
            class: "card",
            onClick: o[0] || (o[0] = m(() => {
            }, ["stop"]))
          }, [
            d(r, { name: "loading-window-anime" }, {
              default: c(() => [
                n.loadingWindow ? (s(), i("div", C, "wait...")) : l("", !0)
              ]),
              _: 1
            }),
            _(e.$slots, "default", {}, void 0, !0)
          ])
        ])) : l("", !0)
      ]),
      _: 3
    })
  ], 64);
}
const a = /* @__PURE__ */ g(h, [["render", W], ["__scopeId", "data-v-cc84c8b1"]]);
a.install = function(e) {
  e.component("PopoutCard", a);
};
const O = [a], y = (e) => {
  O.forEach((o) => {
    e.component("PopoutCard", a);
  });
};
export {
  a as PopoutCard,
  y as install
};
