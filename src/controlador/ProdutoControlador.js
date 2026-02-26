async function buscaTodosProdutos(req, res) {
    try {
        return res.status(200).json({ message: "Listando todos os produtos" });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar os produtos" });
    }
}

async function buscaProdutoPorId(req, res) {
    try {
        return res.status(200).json({ message: "Buscando o produto por ID" });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar o produto" });
    }
}

async function salvaProduto(req, res) {
    try {
        return res.status(201).json({ message: "Salvando produto" });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar o produto" });
    }
}

export default {
    buscaTodosProdutos,
    buscaProdutoPorId,
    salvaProduto
};