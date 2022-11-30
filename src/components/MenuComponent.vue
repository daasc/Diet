<template>
  <nav class="navbar">
    <div class="menu">
      <div>LOGO</div>
      <div class="item active">
        <img src="../assets/images/home.png" alt="home" />
      </div>
      <div class="item">
        <img src="../assets/images/calendar.png" alt="home" />
      </div>
      <div class="item">
        <img src="../assets/images/settings.png" alt="home" />
      </div>
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
  background: $color-menu;
  .menu {
    color: green;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .item {
      width: 40px;
      height: 40px;
      padding: 10px;
      &.active {
        border: 2px solid black;
        border-radius: 8px;
      }
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
}
</style>
