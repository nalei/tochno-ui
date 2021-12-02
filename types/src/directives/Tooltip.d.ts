import { Directive } from 'vue';
import { Instance } from '@popperjs/core';
export interface TooltipData {
    popper: Instance | null;
    mutationObserver: MutationObserver;
    message: string;
}
declare const tooltipDirective: Directive;
export default tooltipDirective;
