# Tochno UI

**@tochno/ui** is a Vue UI Library containing several components and directives for designing user interfaces. The library is based on Vue.js 3 and can easily be integrated in any existing project.

[![npm Version](https://img.shields.io/npm/v/@tochno/ui?logo=npm)](https://img.shields.io/npm/v/@tochno/ui)
[![npm Downloads](https://img.shields.io/npm/dw/@tochno/ui)](https://img.shields.io/npm/dw/@tochno/ui)
[![Build Status](https://app.travis-ci.com/somersetinc/manage-web-ui.svg?token=ufjvYfS73fhVZjXzGXAn&branch=main)](https://app.travis-ci.com/somersetinc/manage-web-ui)
[![License](https://img.shields.io/npm/l/@tochno/ui)](https://img.shields.io/npm/l/@tochno/ui)

## Documentation
* [Storybook](https://tochno-ui.web.app/)

## Installation 
```bash
# npm
npm i @tochno/ui

# or yarn
yarn add @tochno/ui
```
Import stylesheet file:
```css
@import url('~@tochno/ui/dist/style.css');
```

## Usage
```vue
// vue3/App.vue
<template>
  <div>
    <Button>Click me</Button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Button } from '@tochno/ui'
  
  export default defineComponent({
    name: 'App',
    components: { Button },
    setup() {},
  })
</script>
```

## License
* [MIT License](http://spdx.org/licenses/MIT.html)