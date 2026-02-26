import express from "express";
import publico from "./src/rotas/publico.js";

const servidor = express();

servidor.use(express.json());
servidor.use(publico);

servidor.listen(3000, () => console.log("Servidor rodando na porta 3000"));

export default servidor;
