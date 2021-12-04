import { shallowMount } from '@vue/test-utils';
import Button from '@/components/button/Button.vue';

describe('Button.vue', () => {
  it('renders props.mode when passe', () => {
    const mode = 'secondary';
    const wrapper = shallowMount(Button, {
      props: { mode },
    });
    expect(wrapper.find('.button').classes()).toContain('secondary');
  });
});