<template>
  <section>
    <alert-component
      :msg="msgAlert"
      v-if="msgAlert"
      :type="typeAlert"
    ></alert-component>
    <h1>Create Meal</h1>

    <form action="">
      <label for="week">
        Choose the day
        <select name="week" id="week" v-model="meal.day" required>
          <option value="" disabled selected>select the day</option>
          <option value="0">Monday</option>
          <option value="1">Tuesday</option>
          <option value="2">Wednesday</option>
          <option value="3">Thursday</option>
          <option value="4">Friday</option>
          <option value="5">Saturday</option>
          <option value="6">Sunday</option>
        </select>
      </label>
      <label for="time">
        Choose the hour
        <input
          type="time"
          v-model="meal.hour"
          id="time"
          min="04:00"
          max="18:00"
          required
        />
      </label>
      <label for="meal">
        Choose the meal
        <select name="meal" id="meal" v-model="meal.meal" required>
          <option value="" disabled selected>select the meal</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Snack">Snack</option>
          <option value="Lunch">Lunch</option>
          <option value="Afternoon Snack">Afternoon Snack</option>
          <option value="Dinner">Dinner</option>
        </select>
      </label>
      <label for="color">
        Card color
        <input type="color" v-model="meal.color" name="" id="color" required />
      </label>
      <label for="">
        Nome *
        <input type="text" v-model="meal.name" placeholder="Name" required />
      </label>
      <label for="">
        Description *
        <input
          type="text"
          v-model="meal.description"
          placeholder="Description"
          required
        />
      </label>
      <label for="">
        Recipe *
        <input
          type="text"
          v-model="meal.recipe"
          placeholder="Recipe"
          required
        />
      </label>
      <button
        class="button"
        type="submit"
        role="button"
        @click.prevent="storeMeal"
      >
        Save
      </button>
    </form>
  </section>
</template>
<script>
import { defineAsyncComponent } from "vue";
import axios from "../utils/axios";
export default {
  name: "CreateCalendar",
  components: {
    AlertComponent: defineAsyncComponent(() =>
      import("../components/AlertComponent.vue")
    ),
  },
  data() {
    return {
      msgAlert: "",
      typeAlert: "",
      hasCalender: false,
      meal: {
        meal: "",
        day: 0,
        color: "",
        name: "",
        hour: "",
        description: "",
        recipe: "",
        empty: false,
        done: false,
      },
    };
  },
  methods: {
    async storeMeal() {
      try {
        await axios.post("api/calender/week", this.meal);
        this.showAlert({ msg: "Calender created!", type: "success" });
        this.cleanForm();
      } catch (error) {
        this.showAlert({ msg: error, type: "danger" });
      }
    },
    showAlert({ msg, type }) {
      this.typeAlert = type;
      this.msgAlert = msg;
      this.hideAlert();
    },
    hideAlert() {
      setTimeout(() => {
        this.typeAlert = "";
        this.msgAlert = "";
      }, 4000);
    },

    cleanForm() {
      this.meal.meal = "";
      this.meal.day = 0;
      this.meal.color = "";
      this.meal.name = "";
      this.meal.hour = "";
      this.meal.description = "";
      this.meal.recipe = "";
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  width: 60%;
  min-height: 70vh;
  padding: 10px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    input[type="text"],
    input[type="time"],
    select {
      color: rgba(15, 15, 15, 0.75);
      background: #f3f2f6;
      border: 2px solid #f3f2f6;
      font-size: 16px;
      font-weight: 500;
      line-height: 46px;
      padding: 0 0 0 20px;
      width: 100%;
      border-radius: 25px;
      box-sizing: border-box;
      -webkit-appearance: none;
    }
    select {
      display: block;
      width: 90%;
      padding: 0.375rem 2.25rem 0.375rem 0.75rem;
      -moz-padding-start: calc(0.75rem - 3px);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-image: url(../assets/set.svg);
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 16px 12px;
      border: 1px solid #ced4da;
      border-radius: 0.375rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
  .group {
    position: relative;
    margin-bottom: 45px;
    label {
      color: #999;
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    input {
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 300px;
      border: none;
      border-bottom: 1px solid #757575;

      &:focus {
        outline: none;
      }
      &:focus ~ label,
      &:valid ~ label {
        top: -20px;
        font-size: 14px;
        color: #5264ae;
      }
    }
    .bar {
      position: relative;
      display: block;
      width: 300px;
      &:before,
      &:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264ae;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
      }
      &:before {
        left: 50%;
      }
      &:after {
        right: 50%;
      }
    }

    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
      width: 50%;
    }
    .highlight {
      position: absolute;
      height: 60%;
      width: 100px;
      top: 25%;
      left: 0;
      pointer-events: none;
      opacity: 0.5;
    }
    input:focus ~ .highlight {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @-moz-keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
  }
}
</style>
