import { Router } from "express";
import produtoControlador from "../controlador/produtoControlador.js";

const rotas = Router();

// PRODUTO
rotas.get("/listar", produtoControlador.buscaTodosProdutos);

rotas.get("/listarPorId", produtoControlador.buscaProdutoPorId);

rotas.post("/salvar", produtoControlador.salvaProduto);

rotas.put("/editar", produtoControlador.editaProduto);

rotas.delete("/excluir", produtoControlador.excluiProduto);

export default rotas;