(function (n, t) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], t)
    : ((n = typeof globalThis != 'undefined' ? globalThis : n || self), t((n.ui = {}), n.Vue));
})(this, function (n, t) {
  'use strict';
  const a = ['type'],
    d = { class: 'button-content caption-14px-medium' };
  function u(e, o, s, r, i, _) {
    return (
      t.openBlock(),
      t.createElementBlock(
        'button',
        { class: t.normalizeClass(['button', e.buttonClasses]), type: e.$attrs.type || 'button' },
        [t.createElementVNode('span', d, [t.renderSlot(e.$slots, 'default', {}, void 0, !0)])],
        10,
        a
      )
    );
  }
  var f = '',
    l = (e, o) => {
      const s = e.__vccOpts || e;
      for (const [r, i] of o) s[r] = i;
      return s;
    };
  const c = t.defineComponent({
    name: 'Button',
    props: {
      size: { type: String, default: 's', validator: (e) => ['s', 'm', 'l'].includes(e) },
      mode: { type: String, default: 'primary', validator: (e) => ['primary', 'secondary', 'info', 'state'].includes(e) },
      loading: { type: Boolean, default: !1 },
    },
    setup(e) {
      return { buttonClasses: t.computed(() => ({ [`${e.size}`]: !0, [`${e.mode}`]: e.mode !== 'primary', loading: e.loading })) };
    },
  });
  var p = l(c, [
    ['render', u],
    ['__scopeId', 'data-v-0f2e0b91'],
  ]);
  (n.Button = p), Object.defineProperty(n, '__esModule', { value: !0 }), (n[Symbol.toStringTag] = 'Module');
});
