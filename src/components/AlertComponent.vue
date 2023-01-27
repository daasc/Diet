<template>
  <div
    data-testid="type"
    class="alert"
    :class="{ danger: danger, success: success, warning: warning, info: info }"
  >
    <div class="msg__content">
      <img
        src="../assets/images/danger.svg"
        alt="icons"
        data-testid="img"
        v-if="this.danger"
      />
      <img
        src="../assets/images/success.svg"
        alt="icons"
        data-testid="img"
        v-if="this.success"
      />
      <img
        src="../assets/images/warning.svg"
        alt="icons"
        data-testid="img"
        v-if="this.warning"
      />
      <img
        src="../assets/images/info.svg"
        alt="icons"
        data-testid="img"
        v-if="this.info"
      />
      <span data-testid="msg">{{ msg }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AlertComponent",
  props: {
    msg: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      success: false,
      warning: false,
      danger: false,
      info: false,
      img: "",
    };
  },
  created() {
    this.alertType();
  },
  methods: {
    alertType() {
      if (this.type === "danger") {
        this.danger = true;
        this.img = "../assets/images/danger.svg";
      }
      if (this.type === "success") {
        this.success = true;
        this.img = "../assets/images/success.svg";
      }
      if (this.type === "warning") {
        this.warning = true;
        this.img = "../assets/images/warning.svg";
      }
      if (this.type === "info") {
        this.info = true;
        this.img = "../assets/images/info.svg";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.alert {
  position: absolute;
  min-width: 300px;
  height: 35px;
  color: white;
  top: 70px;
  right: 10px;
  z-index: 10000;
  padding: 5px 0px 0px 5px;
  display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  padding-bottom: 3px;
  border-radius: 8px;
  .msg__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    img {
      width: 25px;
    }
    span {
      width: 80%;
    }
  }
}
.danger {
  background-color: $color-alert-danger;
}
.success {
  background-color: $color-alert-success;
}
.info {
  background-color: $color-alert-info;
}
.warning {
  background-color: $color-alert-warning;
}
@keyframes fill-bar {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
