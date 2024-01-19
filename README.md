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


Projeto feito com :heart: para concorrer a uma vaga para a empresa Grupo Ignição Digital
