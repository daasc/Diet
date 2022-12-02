<template>
  <div class="master">
    <div class="container">
      <menu-component></menu-component>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const menuComponent = defineAsyncComponent(() =>
  import("../components/MenuComponent.vue")
);
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .master {
    .container {
      width: 100%;
      height: 100vh;
      margin: 0 auto;
      display: flex;
      background-color: $color-container;
      nav {
        width: 10%;
      }
      main {
        width: 100%;
      }
    }
  }
}

@media (min-width: 800px) {
  .master {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    .container {
      width: 100%;
      height: 100vh;
      margin: 0 auto;
      display: flex;
      background-color: $color-container;
      nav {
        width: 6%;
      }
      main {
        width: 94%;
        padding: 10px;
      }
    }
  }
}
</style>
