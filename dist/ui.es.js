import { openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, defineComponent, computed } from 'vue';
const _hoisted_1 = ['type'];
const _hoisted_2 = { class: 'button-content caption-14px-medium' };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      'button',
      {
        class: normalizeClass(['button', _ctx.buttonClasses]),
        type: _ctx.$attrs.type || 'button',
      },
      [createElementVNode('span', _hoisted_2, [renderSlot(_ctx.$slots, 'default', {}, void 0, true)])],
      10,
      _hoisted_1
    )
  );
}
var Button_vue_vue_type_style_index_0_scoped_true_lang = '';
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: 'Button',
  props: {
    size: {
      type: String,
      default: 's',
      validator: (value) => {
        const sizes = ['s', 'm', 'l'];
        return sizes.includes(value);
      },
    },
    mode: {
      type: String,
      default: 'primary',
      validator: (type) => {
        const types = ['primary', 'secondary', 'info', 'state'];
        return types.includes(type);
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const buttonClasses = computed(() => ({
      [`${props.size}`]: true,
      [`${props.mode}`]: props.mode !== 'primary',
      loading: props.loading,
    }));
    return { buttonClasses };
  },
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['render', render],
  ['__scopeId', 'data-v-0f2e0b91'],
]);
export { Button };
