import produtoRepositorio from "../repositorio/produtoRepositorio.js";

async function buscaTodosProdutos() {
   const produtos = await produtoRepositorio.buscaTodosProdutos();

   if (!produtos) {
        throw new Error("Não encontramos nenhum produto no estoque.");
    }

    return produtos;
}

async function buscaProdutoPorId() {
   const produtos = await produtoRepositorio.buscaProdutoPorId();

   if (!produtos) {
        throw new Error("Não encontramos o produto em estoque.");
    }

    return produtos;
}

async function salvaProduto() {
   const produtos = await produtoRepositorio.salvaProduto();

    return produtos;
}

async function editaProduto() {
   const produtos = await produtoRepositorio.editaProduto();

    return produtos;
}

async function excluiProduto() {
   const produtos = await produtoRepositorio.excluiProduto();

    return produtos;
}

export default {
    buscaTodosProdutos,
    buscaProdutoPorId,
    salvaProduto,
    editaProduto,
    excluiProduto
}