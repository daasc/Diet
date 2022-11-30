<template>
  <div class="container">
    <menu-component></menu-component>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const menuComponent = defineAsyncComponent(() =>
  import("../components/MenuComponent.vue")
);
</script>
<style lang="scss" scoped>
.container {
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  nav {
    width: 10%;
  }
  main {
    width: 90%;
  }
}
</style>
