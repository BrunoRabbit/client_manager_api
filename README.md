<!--Projeto feito com ❤️ para concorrer a uma vaga para a empresa Grupo Ignição Digital -->

# ClientManagerApi

Api simples feita em Node com Typescript e algumas bibliotecas externas como Sequelize e Express, e utilizando como banco de dados o MySQL.

<!-- **Nota:** É necessario ter instalado o MySQL Workbench. -->
<!--

## Etapas para iniciar o projeto com Docker

Construa a imagem

    docker build -t client_manager_api .

Inicialize o Docker

    docker run -p 3000:3000 client_manager_api -->

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

GET - BUSCAR USUARIOS http://localhost:3000/api/client?name=bruno

Realiza a busca onde verifica se "name", "email" e "tags" se encaixa na string bruno

Exemplo de retorno:

    {
        "status_code": 200,
        "data": [
            {
    		"id": 16,
    		"name": "Bruno",
    		"email": "umemail@email.com",
    		"tags": [
    			"data1",
    			"data2"
    		]
    	}
        ]
    }

<hr>

POST - http://localhost:3000/api/client

Exemplo de Body:

    {
        "name": "Bruno",
        "email": "meuemailformoso@out.com",
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
        "email": "meuemailformoso@out.com",
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
