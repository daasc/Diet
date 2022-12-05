<template>
  <div class="meal">
    {{ name }}
  </div>
</template>
<script>
export default {
  name: "MealComponent",
  props: {
    name: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#8ecae6",
    },
  },
};
</script>
<style lang="scss" scoped>
.meal {
  background-color: v-bind(color);
  padding: 4px;
  transform: rotate(-90deg);
  border-radius: 8px;
  text-align: center;
}
</style>
