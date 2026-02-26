import express from "express";
import publico from "./src/rotas/publico.js";

const app = express();

app.use(express.json());
app.use(publico);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

export default app;
