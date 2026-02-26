import usuarioServico from "../servico/usuarioServico.js";

async function buscaTodosUsuarios(req,res) {
    try {
        const usuarios = await usuarioServico.buscarTodosUsuarios();
        return res.status(200).json({usuarios});
    } catch (error) {
         return res.status(400).json({ error: "Erro ao buscar os usuários" });
    };
};

async function buscaUsuarioPorId(req,res) {
    try {
        return res.status(200).json({usuarios});
    } catch (error) {
         return res.status(400).json({ error: "Erro ao buscar o usuário" });
    };
};

async function salvaUsuario(req,res) {
    try {
        return res.status(201).json({usuarios});
    } catch (error) {
         return res.status(400).json({ error: "Erro ao salvar os usuários" });
    };
};

async function editaUsuario(req,res) {
    try {
        return res.status(201).json({usuarios});
    } catch (error) {
         return res.status(400).json({ error: "Erro ao editar os usuários" });
    };
};

async function excluiUsuario(req,res) {
    try {
        return res.status(201).json({usuarios});
    } catch (error) {
         return res.status(400).json({ error: "Erro ao excluir os usuários" });
    };
};

export default {
    buscaTodosUsuarios,
    buscaUsuarioPorId,
    salvaUsuario,
    editaUsuario,
    excluiUsuario
}