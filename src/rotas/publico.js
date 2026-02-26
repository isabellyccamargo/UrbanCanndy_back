import { Router } from "express";
import ProdutoControlador from "../controlador/ProdutoControlador.js";

const rotas = Router();

rotas.get("/listar", ProdutoControlador.buscaTodosProdutos);

rotas.get("/listarPorId", ProdutoControlador.buscaProdutoPorId);

rotas.post("/salvar", ProdutoControlador.salvaProduto);

export default rotas;