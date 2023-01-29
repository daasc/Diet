<template>
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <div class="menu">
        <div class="navigation">
          <div class="space"></div>
          <div class="items">
            <div>LOGO</div>
            <div
              class="item"
              :class="{ active: homeIsActive }"
              @click="goHome()"
            >
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
            <div
              class="item"
              :class="{ active: calendarIsActive }"
              @click="goCalendar()"
            >
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
        </div>
        <div class="profile">
          <img src="../assets/images/profile.jpg" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      path: "",
    };
  },
  computed: {
    calendarIsActive() {
      return this.$route?.path === "/calendar";
    },
    homeIsActive() {
      return this.$route?.path === "/";
    },
  },
  methods: {
    goHome() {
      this.path = "/";
      this.$router.push({ path: "/", name: "Home" });
    },
    goCalendar() {
      this.path = "/calendar";
      this.$router.push({ path: "/calendar", name: "Calendar" });
    },
  },
};
</script>
<style scoped lang="scss">
nav {
  input {
    display: none;
  }
  .menu {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: $color-menu;
    height: 100vh;
    gap: 50px;
    align-items: center;
    justify-content: space-between;
    .navigation {
      display: flex;
      flex-direction: column;
      align-content: center;
      height: 80%;
      .items {
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
            background-color: $color-menu-active;
            fill: white;
          }
          cursor: pointer;
          path {
            width: 100%;
            margin: 0 auto;
          }
          svg {
            width: 100%;
          }
        }
      }
    }
  }
  .profile {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: red;
    margin: 0 auto;
    margin-bottom: 20px;
    cursor: pointer;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
}
@media (max-width: 800px) {
  nav {
    height: 65px;
    input {
      display: block;
    }
  }
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25px;
    left: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #menuToggle span {
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: black;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  .menu {
    position: absolute;
    width: 180px;
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    top: -25px;
    box-shadow: 0 0 10px #85888c;
    margin: -50px 0 0 -50px;
    background-color: $color-menu;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-135%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    .navigation {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .space {
        height: 50px;
      }
      .items {
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
      }
    }
  }

  .menu .item {
    padding: 10px 0;
    transition-delay: 2s;
  }

  #menuToggle input:checked ~ .menu {
    transform: translate(-33.5%, 0);
  }
}
</style>
