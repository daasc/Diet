<template>
  <nav class="navbar">
    <div class="menu">
      <div>LOGO</div>
      <div class="item active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          baseProfile="tiny"
          version="1.2"
          viewBox="0 0 24 24"
        >
          <path
            d="M8 3H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 3zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 3zM8 13H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 13zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 13z"
          />
        </svg>
      </div>
      <div class="item active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"
          />
        </svg>
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
      path {
        fill: red;
        width: 100%;
        margin: 0 auto;
      }
      svg {
        width: 100%;
      }
    }
  }
}
</style>
