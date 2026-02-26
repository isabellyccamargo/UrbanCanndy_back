async function buscaTodosProdutos() {
    // Note que não tem req, nem res, nem try/catch
    const listaFake = [{ id: 1, nome: "Doce de Leite" }];
    
    // Se você quisesse forçar um erro de teste, faria:
    // throw new Error("Banco de dados fora do ar");

    return listaFake; 
}

export default {
    buscaTodosProdutos
}