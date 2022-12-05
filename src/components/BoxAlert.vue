<template>
  <div v-if="!empty" class="box">
    <div class="content">
      <p>{{ text }}</p>
      <span class="hour">{{ hour }}</span>
    </div>
  </div>
  <div v-else></div>
</template>
<script>
export default {
  name: "BoxAlert",
  props: {
    color: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    hour: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    recipe: {
      type: String,
      default: "",
    },
    empty: {
      type: Boolean,
      default: false,
    },
    done: {
      Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  width: 90%;
  height: 90px;
  min-height: 90px;
  background-color: v-bind(color);
  border-radius: 8px;
  margin: 0 auto;
  padding: 4px;
  font-size: 14px;
  cursor: pointer;

  .hour {
    position: absolute;
    top: 2px;
    right: 2px;
  }
}
</style>
