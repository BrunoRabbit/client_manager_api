import CreateTablesClient from '../modules/model/client_model';

CreateTablesClient.sync()
  .then(() => console.log('Tabela Client criada com sucesso'))
  .catch(console.log);