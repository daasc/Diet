class UtilsServices {
  defaultCalender() {
    const defaultCalender = {
      Breakfast: [],
      Snack: [],
      Lunch: [],
      "Afternoon Snack": [],
      Dinner: [],
    };
    for (const key in defaultCalender) {
      for (let index = 0; index < 6; index++) {
        defaultCalender[key].push([
          {
            empty: true,
          },
        ]);
      }
    }

    return defaultCalender;
  }
  getCalender(db) {
    return db.week;
  }
  storeCalender(schema, request) {
    let meal = JSON.parse(request.requestBody);
    console.log("meal: ", meal);
    let week = schema.db.week[0];
    if (!week) {
      schema.db.week.insert(this.defaultCalender());
      week = schema.db.week[0];
    }
    if (week[meal.meal][parseInt(meal.day)][0]?.empty) {
      week[meal.meal][parseInt(meal.day)] = [meal];
    } else {
      week[meal.meal][parseInt(meal.day)].push(meal);
    }

    return schema.db.week.update(week.id, week);
  }
}

export default UtilsServices;
