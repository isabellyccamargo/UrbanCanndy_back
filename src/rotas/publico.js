import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController.js";

const rotas = Router();

rotas.get("/listar", ProdutoController.buscaTodosProdutos);

rotas.get("/listarPorId", ProdutoController.buscaProdutoPorId);

rotas.post("/salvar", ProdutoController.salvaProduto);

export default rotas;