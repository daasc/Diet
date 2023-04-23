import { createServer, Model, Response } from "miragejs";
import UtilsServices from "./utils";
const utilsServices = new UtilsServices();
export function makeServer({ environment = "environment" } = {}) {
  let server = createServer({
    environment,
    models: {
      week: Model,
      user: Model,
    },
    seeds(server) {
      server.db.loadData({
        week: null,
        user: {
          email: "paulojhole@gmail.com",
          password: "paulo123",
        },
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

      this.post("/user/authenticate", (schema, request) => {
        const user = JSON.parse(request.requestBody);
        console.log(request);
        if (schema.db.user[0].email === user.email) {
          return new Response(
            200,
            {},
            {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2IwNDk0N2ZiYTFjYWE3NDVjZmM4NSIsImVtYWlsIjoicGF1bG9qaG9sZUBnYW1pbC5jb20iLCJpYXQiOjE2ODE2NDA5NTcsImV4cCI6MTY4MzM2ODk1N30.Te780ylmC5tw0VT5Rbaa-8RtmTeQrgAnKDDHSUGY5qg",
              data: {
                email: "paulojhole@gamil.com",
                id: "643b04947fba1caa745cfc85",
              },
            }
          );
        }

        return new Response(401, {}, { error: "access denied" });
      });
    },
  });

  window.server = server;

  return server;
}
