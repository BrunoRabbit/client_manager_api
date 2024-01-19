Projeto feito com ❤️ para concorrer a uma vaga para a empresa Grupo Ignição Digital

# ClientManagerApi

Api simples feita em Node com Typescript e algumas bibliotecas externas como Sequelize e Express.

**Nota:** Para ter o banco de dados é necessario ter o MySQL WorkBench.

## Etapas para iniciar o projeto

Instale as dependencias

    npm install

Caso voce tenha senha para acessar o banco de dados local no MySQL WorkBench abra `setup.ts` e em `passwordDb` escreva sua senha, caso contrario deixe em branco.

Execute o script

    ts-node setup.ts

O script irá gerar `config/default.json` e criar o banco de dados com a tabela `Client` vazia

Execute o backend

    nodemon main.ts

Deixei um arquivo json do Insomnia com as rotas e as variaveis de ambiente. Caso nao utilize Insomnia, as rotas são as seguintes:

Url base para cada operação http é `http://localhost:3000/api/client`


GET - http://localhost:3000/api/client

Exemplo de retorno:

    {
        "status_code": 200,
        "data": []
    }
<hr>

POST - http://localhost:3000/api/client

Exemplo de Body:

    {
        "name": "Bruno",
        "email": "meuemailformoso",
        "tags": [
            "Tag01",
            "Tag02"
        ]
    }

<hr>


PUT - http://localhost:3000/api/client/idClient

Exemplo de Body:

    {
        "name": "Bruno",
        "email": "meuemailformoso",
        "tags": [
            "Tag01",
            "Tag02"
        ]
    }

<hr>

DELETE - http://localhost:3000/api/client/idClient

Exemplo de retorno: 

    {
        "status_code": 200,
        "data": 0
    }
