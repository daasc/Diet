<template>
  <section>
    <h1>Create Calendar</h1>
    <form action="">
      <label for="week">
        Choose the day
        <select name="week" id="week">
          <option value="" disabled selected>select the day</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </label>
      <label for="meal">
        Choose the meal
        <select name="meal" id="meal">
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
        <input type="color" name="" id="color" />
      </label>
      <label for="">
        Nome *
        <input type="text" placeholder="" />
      </label>
      <label for="">
        Description *
        <input type="text" placeholder="Description" />
      </label>
      <label for="">
        Recipe *
        <input type="text" placeholder="Recipe" />
      </label>
      <label for="">
        Nome *
        <input type="text" placeholder="" />
      </label>
    </form>
  </section>
</template>
<script>
export default {
  name: "CreateCalendar",
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
  width: 60%;
  min-height: 70vh;
  padding: 10px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  label {
    input[type="text"] {
      color: rgba(28, 9, 80, 0.5);
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
