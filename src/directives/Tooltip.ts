import { Directive, render } from 'vue';
import Tooltip from '@/components/tooltip/Tooltip.vue';
import { createPopper, Instance } from '@popperjs/core';

export interface TooltipData {
  popper: Instance | null;
  mutationObserver: MutationObserver;
  message: string;
}

const tooltipDataMap = new WeakMap<HTMLElement, TooltipData>();

const showTooltip = (tooltipOwner: HTMLElement) => {
  const tooltipData = tooltipDataMap.get(tooltipOwner);
  if (!tooltipData || !tooltipData.message) return;
  const tooltip = Tooltip.render!({ show: true, message: tooltipData.message });
  requestAnimationFrame(() => {
    render(tooltip, tooltipOwner.parentNode as Element);
    tooltipData.popper = initPopper(tooltip.el, tooltipOwner);
  });
};

const hideTooltip = (tooltipOwner: HTMLElement) => {
  const tooltipData = tooltipDataMap.get(tooltipOwner);
  if (!tooltipData) return;
  const tooltip = Tooltip.render!({ show: false });
  requestAnimationFrame(() => {
    render(tooltip, tooltipOwner.parentNode as Element);
    tooltipData.popper?.destroy();
  });
};

const initPopper = (tooltip: HTMLElement, tooltipOwner: HTMLElement) => {
  return createPopper(tooltipOwner, tooltip, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
};

// Event mouseleave don't fire on disabled elements. So we observe mutation of disabled attribute and hide tooltip
const observeDisabledAttribute = (tooltipOwner: HTMLElement) => {
  const disabledAttributeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.oldValue === null) hideTooltip(tooltipOwner);
    });
  });

  disabledAttributeObserver.observe(tooltipOwner, {
    attributes: true,
    attributeFilter: ['disabled'],
    attributeOldValue: true,
  });

  return disabledAttributeObserver;
};

const tooltipDirective: Directive = {
  mounted(tooltipOwner, binding) {
    const tooltip = Tooltip.render!({ show: false });
    render(tooltip, tooltipOwner.parentNode);

    tooltipDataMap.set(tooltipOwner, {
      mutationObserver: observeDisabledAttribute(tooltipOwner),
      popper: null,
      message: binding.value,
    });

    tooltipOwner.addEventListener('mouseover', showTooltip.bind(null, tooltipOwner));
    tooltipOwner.addEventListener('mouseleave', hideTooltip.bind(null, tooltipOwner));
  },
  beforeUpdate(tooltipOwner, binding) {
    const tooltipObject = tooltipDataMap.get(tooltipOwner);

    if (!tooltipObject) return;

    if (tooltipObject.message !== binding.value) {
      tooltipObject.message = binding.value;
      tooltipObject.popper?.update();
    }
  },
  beforeUnmount(tooltipOwner) {
    const tooltipObject = tooltipDataMap.get(tooltipOwner);

    if (!tooltipObject) return;

    tooltipObject.mutationObserver.disconnect();
    tooltipObject.popper?.destroy();
    tooltipOwner.removeEventListener('mouseover', showTooltip);
    tooltipOwner.removeEventListener('mouseleave', hideTooltip);
  },
};

export default tooltipDirective;
