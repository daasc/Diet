<template>
  <nav class="navbar">
    <div class="menu">
      <div class="item">Home</div>
      <div class="item">Calender</div>
      <div class="item">Settings</div>
    </div>
    <div class="item">Profile</div>
  </nav>
</template>
<script setup></script>
<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background: red;
  .menu {
    color: green;
  }
}
</style>
