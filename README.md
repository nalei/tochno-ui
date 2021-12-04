<h1 align="center">Tochno UI</h1>

<p align="center">Tochno UI - A Vue.js 3 UI library made by <a href='https://tochno.pro'>Tochno</a></p>

## Installation

Install package in your project:
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
```javascript
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
<ul>
    <li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li>
</ul>
