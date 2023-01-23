import { createServer, Model } from "miragejs";
import UtilsServices from "./utils";
const utilsServices = new UtilsServices();
export function makeServer({ environment = "environment" } = {}) {
  let server = createServer({
    environment,
    models: {
      week: Model,
    },
    seeds(server) {
      server.db.loadData({
        week: null,
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/calender/week", ({ db }) => {
        return utilsServices.getCalender(db);
      });

      this.post("/calender/week", (schema, request) => {
        return utilsServices.storeCalender(schema, request);
      });
    },
  });

  window.server = server;

  return server;
}
