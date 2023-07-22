import app from "./app";
import "dotenv/config";

const port = Number(process.env.PORT) || 3000;

app.listen({ port }).then(() => {
    console.log(`Servidor executando na porta ${port}.`);
  });
