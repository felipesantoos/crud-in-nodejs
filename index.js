// Importa o express.
const express = require("express")

// A constante server recebe o retorno da função express.
const server = express();
// Faz com que o express entenda JSON.
server.use(express.json());
// server.use cria um middleware global que será chamado em todas as rotas.
server.use((req, res, next) => {
    // Marca o início da requisição.
    console.time("Request");
    // Mostra o método e a URL da requisição.
    console.log(`Método: ${req.method}\nURL: ${req.url}`);

    // Executa a função que chama as próximas ações.
    next();

    console.log("Finalizou!");

    // Marca o fim da requisição.
    console.timeEnd("Request");
});

// Array que vai armazenar os clientes cadastrados.
const customers = [];

function isNameValid(req, res, next) {
    // Verifica se o nome contido no corpo da requisição existe.
    if (!req.body.name) {
        // Se não, retorna um erro 400 (BAD REQUEST) com uma mensagem.
        return res.status(400).json({error: "Customer's name is required!"});
    }

    // Se sim, executa a próxima função.
    return next();
}

function isIndexValid(req, res, next) {
    // Obtém o índice através da desestruturação da URL da requisição.
    const { index } = req.params;
    // Obtém o cliente do índice especificado.
    const customer = customers[index];

    // Verifica se o cliente existe.
    if (!customer) {
        // Se não, retorna um erro 400 (BAD REQUEST) com uma mensagem.
        return res.status(400).json({error: "Customer doesn't exists!"});
    }

    // Se sim, executa a próxima função.
    return next();
}

// Rota com o método GET que retorna todos os clientes.
server.get("/customers", (req, res) => {
    // Retorna a lista de clientes.
    res.json(customers);
});

// Rota com o método POST que cadastra um novo cliente.
server.post("/customers", isNameValid, (req, res) => {
    // Obtém o nome através da desestruturação do corpo da requisição.
    const { name } = req.body;
    // Adiciona o nome no array de clientes.
    customers.push(name);

    // Retorna a lista de clientes.
    return res.json(customers);
});

// Rota com o método PUT que edita o nome de um cliente específico.
server.put("/customers/:index", isNameValid, isIndexValid, (req, res) => {
    // Obtém o índice através da desestruturação da URL da requisição.
    const { index } = req.params;
    // Obtém o nome através da desestruturação do corpo da requisição.
    const { name } = req.body;

    // Altera o nome do cliente na posição indicada pelo índice.
    customers[index] = name;

    // Retorna a lista de clientes.
    return res.json(customers);
});

// Rota com o método DELETE que deleta um cliente específico.
server.delete("/customers/:index", isIndexValid, (req, res) => {
    // Obtém o índice através da desestruturação da URL da requisição.
    const { index } = req.params;

    // Percorre a lista até o índice informado e deleta 1 posição.
    customers.splice(index, 1);

    // Retorna uma resposta sem corpo.
    res.send();
});

// Rota com o método GET que retorna os dados de um cliente específico.
server.get("/customers/:index", isIndexValid, (req, res) => {
    // Obtém o índice através da desestruturação da URL da requisição.
    const { index } = req.params;

    // Extrai o cliente da lista.
    const customer = customers[index];

    // Retorna os dados do cliente.
    res.json(customer);
});

// Executa o servidor na porta 3000 do localhost.
server.listen(3000);
