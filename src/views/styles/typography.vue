<template lang="pug">
.typography.storybook-card
  section.heading-section
    h2.section-title.h-800 Heading
    .subsection
      .typography-example
        span.h-900 Text Size H900
        span.class-name.caption-13px-medium .h-900
    .subsection
      .typography-example
        span.h-800 Text Size H800
        span.class-name.caption-13px-medium .h-800
    .subsection
      .typography-example
        span.h-500 Text Size H500
        span.class-name.caption-13px-medium .h-500

  section.text-section
    h2.section-title.h-800 Text
    .subsection
      .typography-example
        span.text-16px-regular Body / 16px / regular
        span.class-name.caption-13px-medium .text-16px-regular
      .typography-example
        span.text-16px-medium Body / 16px / medium
        span.class-name.caption-13px-medium .text-16px-medium

    .subsection
      .typography-example
        span.text-14px-regular Body / 14px / regular
        span.class-name.caption-13px-medium .text-14px-regular
      .typography-example
        span.text-14px-medium Body / 14px / medium
        span.class-name.caption-13px-medium .text-14px-medium

    .subsection
      .typography-example
        span.text-13px-regular Body / 13px / regular
        span.class-name.caption-13px-medium .text-13px-regular
      .typography-example
        span.text-13px-medium Body / 13px / medium
        span.class-name.caption-13px-medium .text-13px-medium

    .subsection
      .typography-example
        span.text-12px-regular Body / 12px / regular
        span.class-name.caption-13px-medium .text-12px-regular
      .typography-example
        span.text-12px-medium Body / 12px / medium
        span.class-name.caption-13px-medium .text-12px-medium

    .subsection
      .typography-example
        span.text-10px-bold Body / 10px / bold
        span.class-name.caption-13px-medium .text-10px-bold

    .subsection
      .typography-example
        a.link-14px(href='#') Body / 14px / link
        span.class-name.caption-13px-medium .link-14px

    .subsection
      .typography-example
        span.caption-16px-medium Caption / 16px / medium
        span.class-name.caption-13px-medium .caption-16px-medium
      .typography-example
        span.caption-14px-medium Caption / 14px / medium
        span.class-name.caption-13px-medium .caption-14px-medium
      .typography-example
        span.caption-13px-medium Caption / 13px / medium
        span.class-name.caption-13px-medium .caption-13px-medium
      .typography-example
        span.caption-10px-medium Caption / 10px / medium
        span.class-name.caption-13px-medium .caption-10px-medium
</template>

<style scoped>
  .typography {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 40px;
    justify-content: center;
  }
  .section-title {
    margin-bottom: 30px;
  }
  .subsection {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 16px 0;
    margin-bottom: 30px;
  }
  .typography-example {
    padding: 12px;
    border: 1px solid var(--gray-200);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .class-name {
      margin-left: 24px;
    }
  }
</style>
