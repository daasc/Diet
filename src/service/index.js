import { createServer, Model } from "miragejs";

export function makeServer({ environment = "environment" } = {}) {
  let server = createServer({
    environment,
    models: {
      week: Model,
    },
    seeds(server) {
      server.db.loadData({
        week: {
          Breakfast: [
            [
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
                color: "#7789F2",
                text: "breakfast",
                hour: "9:00",
                description: "in my breakfast i'll eat bread and banana",
                recipe: "diet recipe",
                empty: false,
                done: false,
              },
              {
                color: "#7789F2",
                text: "breakfast",
                hour: "9:00",
                description: "in my breakfast i'll eat bread and banana",
                recipe: "diet recipe",
                empty: false,
                done: false,
              },
            ],
            [
              {
                color: "#5FA3E8",
                text: "breakfast",
                hour: "9:00",
                description: "in my breakfast i'll eat bread and banana",
                recipe: "diet recipe",
                empty: false,
                done: false,
              },
            ],
            [
              {
                empty: true,
              },
            ],
            [
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
            [
              {
                color: "#D3F5B0",
                text: "breakfast",
                hour: "9:00",
                description: "in my breakfast i'll eat bread and banana",
                recipe: "diet recipe",
                empty: false,
                done: false,
              },
            ],
            [
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
          ],
          Snack: [
            [
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
          ],
          Lunch: [],
          "Afternoon Snack": [
            [
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
            [
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
          ],
          Dinner: [
            [
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
            [
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
          ],
        },
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/calender/week", ({ db }) => {
        return db.week;
      });
    },
  });

  window.server = server;

  return server;
}
