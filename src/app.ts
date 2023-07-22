import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "hello";
});

export default app;
