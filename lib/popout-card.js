import { openBlock as s, createElementBlock as i, Fragment as _, createVNode as d, Transition as c, withCtx as r, createCommentVNode as l, withModifiers as m, createElementVNode as k, renderSlot as w } from "vue";
const g = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [u, t] of o)
    n[u] = t;
  return n;
}, v = {
  name: "PopoutCard",
  components: {},
  props: {
    loadingWindow: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["closeWindow"],
  data() {
    return {
      isOpen: !1
    };
  },
  methods: {
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
  mounted() {
    this.$nextTick(function() {
      this.isOpen = !0;
    });
  }
}, C = {
  key: 0,
  class: "akira-c-blank-background"
}, h = {
  key: 0,
  class: "card-loading"
};
function W(e, o, n, u, t, p) {
  return s(), i(_, null, [
    d(c, { name: "blank-background-anime" }, {
      default: r(() => [
        t.isOpen ? (s(), i("div", C)) : l("", !0)
      ]),
      _: 1
    }),
    d(c, { name: "pop-window-anime" }, {
      default: r(() => [
        t.isOpen ? (s(), i("div", {
          key: 0,
          class: "akira-card",
          onClick: o[1] || (o[1] = m((...f) => p.closeWindow && p.closeWindow(...f), ["stop"]))
        }, [
          k("div", {
            class: "card",
            onClick: o[0] || (o[0] = m(() => {
            }, ["stop"]))
          }, [
            d(c, { name: "loading-window-anime" }, {
              default: r(() => [
                n.loadingWindow ? (s(), i("div", h, "wait...")) : l("", !0)
              ]),
              _: 1
            }),
            w(e.$slots, "default", {}, void 0, !0)
          ])
        ])) : l("", !0)
      ]),
      _: 3
    })
  ], 64);
}
const a = /* @__PURE__ */ g(v, [["render", W], ["__scopeId", "data-v-d12f452c"]]);
a.install = function(e) {
  e.component("PopoutCard", a);
};
const y = [a], x = (e) => {
  y.forEach((o) => {
    e.component("PopoutCard", a);
  });
}, P = {
  install: x
};
export {
  a as PopoutCard,
  P as default
};
