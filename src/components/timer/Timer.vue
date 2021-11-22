<template lang="pug">
time {{ display }}
</template>

<script lang="ts">
  import { computed, defineComponent, ref, watch } from 'vue';
  import { DateTime } from 'luxon';

  export default defineComponent({
    name: 'Timer',
    emits: ['finish'],
    setup(props, { emit }) {
      const now = ref<DateTime>(DateTime.local());
      const end = ref<DateTime>(DateTime.local());
      const tick = ref(0);

      const finished = computed(() => now.value >= end.value);
      const display = computed(() => end.value.diff(now.value).toFormat('mm:ss'));

      watch(now, () => {
        if (finished.value) {
          end.value = now.value;
          clearInterval(tick.value);
          emit('finish');
        }
      });

      const start = (deadline: number) => {
        end.value = DateTime.fromMillis(deadline);
        now.value = DateTime.local();
        tick.value = setInterval(() => {
          now.value = DateTime.local();
        }, 1000);
      };

      return { display, start };
    },
  });
</script>
