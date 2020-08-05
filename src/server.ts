import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

//http://localhost:3333/users
//http://localhost:3333/contacts

//GET: Buscar ou listar novas informações
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (request body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

app.use(express.json());
app.use(routes);    
app.listen(3333);