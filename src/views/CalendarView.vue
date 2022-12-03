<template>
  <section>
    <div class="description">
      <h3>Calendar</h3>
      <button>Create Calendar</button>
    </div>
    <div class="content" style="overflow-x: auto">
      <table>
        <thead>
          <tr>
            <th></th>
            <th class="active">Monday 17</th>
            <th>Tuesday 18</th>
            <th>Wednesday 19</th>
            <th>Thursday 20</th>
            <th>Friday 21</th>
            <th>Saturday 22</th>
            <th>Sunday 23</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(diet, key) in calendar" :key="key">
            <td>{{ key }}</td>
            <td v-for="(item, index) in diet" :key="index">
              <BoxAlert
                :color="item.color"
                :text="item.text"
                :description="item.description"
                :hour="item.hour"
                :recipe="item.recipe"
                :empty="item.empty"
                :done="item.done"
              ></BoxAlert>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "CalendarView",
  components: {
    BoxAlert: defineAsyncComponent(() => import("../components/BoxAlert.vue")),
  },
  data() {
    return {
      calendar: {
        Breakfast: [
          {
            color: "#7789F2",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
          {
            color: "#5FA3E8",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
          {
            empty: true,
          },
          {
            color: "#97D1DB",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
          {
            color: "#D3F5B0",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
          {
            color: "#EBB398",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
        ],
        Snack: [
          {
            color: "#97D1DB",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
        ],
        Lunch: [],
        "Afternoon Snack": [
          {
            color: "#97D1DB",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
          {
            color: "#97D1DB",
            text: "breakfast",
            hour: "9:00",
            description: "in my breakfast i'll eat bread and banana",
            recipe: "diet recipe",
            empty: false,
            done: false,
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.description {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
table {
  border-collapse: collapse;
  padding: 5px;
  width: 100%;
  th {
    border-bottom: 1px solid #e8e9eb;
    padding: 5px;
    width: 10%;
    color: #c9d4d8;

    &.active {
      color: #313030;
    }
    &:first-child {
      width: 5%;
    }
  }
  td {
    border-bottom: 1px solid #e8e9eb;
    height: 120px;
    color: #313030;
    width: 10%;
    &:first-child {
      border-right: 1px solid #e8e9eb;
      width: 5%;
    }
  }
}
</style>
