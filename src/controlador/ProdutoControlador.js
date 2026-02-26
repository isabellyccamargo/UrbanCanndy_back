import produtoServico from "../servico/produtoServico.js";

async function buscaTodosProdutos(req, res) {
    try {
        const produtos = await produtoServico.buscaTodosProdutos();
        return res.status(200).json({produtos});
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar os produtos" });
    }
}

async function buscaProdutoPorId(req, res) {
    try {
        return res.status(200).json({ message: "Buscando o produto por ID" });
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

async function salvaProduto(req, res) {
    try {
        return res.status(201).json({ message: "Salvando produto" });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar o produto" });
    }  
}

async function editaProduto(req, res) {
    try {
        return res.status(201).json({ message: "Editando produto" });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar o produto" });
    }
}

async function excluiProduto(req, res) {
    try {
        return res.status(201).json({ message: "Excluindo produto" });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar o produto" });
    }
}

export default {
    buscaTodosProdutos,
    buscaProdutoPorId,
    salvaProduto,
    editaProduto,
    excluiProduto
}