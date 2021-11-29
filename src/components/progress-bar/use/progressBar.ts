import { computed, reactive, ref } from 'vue';

const timer = ref(0);

const progressState = reactive({
  percent: 0,
  show: false,
  canSuccess: true,
});

export function useProgressBar(duration = 3000) {
  const cut = computed(() => 10000 / Math.floor(duration));

  const start = () => {
    progressState.show = true;
    progressState.canSuccess = true;

    if (timer.value) {
      clearInterval(timer.value);
      progressState.percent = 0;
    }

    timer.value = setInterval(() => {
      increase(cut.value * Math.random());
      if (progressState.percent > 95) {
        finish();
      }
    }, 100);
  };

  const increase = (num: number) => {
    progressState.percent = progressState.percent + Math.floor(num);
  };

  const finish = () => {
    progressState.percent = 100;
    hide();
  };

  const hide = () => {
    clearInterval(timer.value);
    timer.value = 0;
    setTimeout(() => {
      progressState.show = false;
      setTimeout(() => (progressState.percent = 0), 200);
    }, 500);
  };

  const fail = () => {
    progressState.canSuccess = false;
    progressState.percent = 100;
    hide();
  };

  return {
    percent: computed(() => progressState.percent),
    show: computed(() => progressState.show),
    canSuccess: computed(() => progressState.canSuccess),
    start,
    finish,
    fail,
  };
}
