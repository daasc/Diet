<template>
  <section>
    <div class="description">
      <h3>Calendar</h3>
      <!-- <router-link class="bn632-hover bn26" to="/create-calendar"></router-link> -->
      <button
        @click="this.$router?.push('/create-calendar')"
        class="bn632-hover bn26"
      >
        Create Calendar
      </button>
    </div>
    <div v-if="calendar" class="content" style="overflow-x: auto">
      <table>
        <thead>
          <tr>
            <th></th>
            <th
              v-for="(item, index) in week"
              :key="index"
              :class="{ active: item.active }"
            >
              {{ item.name }} {{ item.day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(diet, key) in calendar" :key="key">
            <td>
              <MealComponent
                :name="key"
                :color="diet[0] ? diet[0][0].color : '#8ecae6'"
              ></MealComponent>
            </td>
            <td v-for="(items, index) in diet" :key="index">
              <div class="items">
                <BoxAlert
                  v-for="(item, i) in items"
                  :key="i"
                  :color="item.color"
                  :text="item.name"
                  :description="item.description"
                  :hour="item.hour"
                  :recipe="item.recipe"
                  :empty="item.empty"
                  :done="item.done"
                ></BoxAlert>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h2>there is no calender</h2>
    </div>
  </section>
</template>
<script>
import { defineAsyncComponent } from "vue";
import axios from "../utils/axios.js";
export default {
  name: "CalendarView",
  components: {
    BoxAlert: defineAsyncComponent(() => import("../components/BoxAlert.vue")),
    MealComponent: defineAsyncComponent(() =>
      import("../components/MealComponent.vue")
    ),
  },
  data() {
    return {
      calendar: null,
      week: [],
    };
  },
  async created() {
    this.dayOfTheWeek();
    await this.getWeek();
  },
  methods: {
    async getWeek() {
      try {
        const response = await axios.get("api/calender/week");
        delete response.data[0]?.id;
        this.calendar = response.data[0];
        console.log("calendar: ", this.calendar);
      } catch (error) {
        console.log(error);
      }
    },
    dayOfTheWeek() {
      let curr = new Date();
      let week = [
        { name: "Monday" },
        { name: "Tuesday" },
        { name: "Wednesday" },
        { name: "Thursday" },
        { name: "Friday" },
        { name: "Saturday" },
        { name: "Sunday" },
      ];

      for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i;
        let day = new Date(curr.setDate(first)).getDate();
        let active = day == new Date().getDate();
        week[i - 1] = { ...week[i - 1], active, day };
      }
      this.week = week;
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  max-height: 100vh;
  overflow: scroll;
}
section::-webkit-scrollbar {
  display: none;
}
.description {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .bn632-hover {
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    &:focus {
      outline: none;
    }
    &:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
    &.bn26 {
      background-image: linear-gradient(
        to right,
        #25aae1,
        #4481eb,
        #04befe,
        #3f86ed
      );
      box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
    }
  }
}
.content {
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
      padding: 3px 0;
      .items {
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-height: 200px;
        overflow: scroll;
        overflow-x: hidden;
      }
      &:first-child {
        border-right: 1px solid #e8e9eb;
        width: 5%;
      }
    }
  }
}
</style>
