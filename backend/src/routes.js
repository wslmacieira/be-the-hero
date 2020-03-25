const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para indentificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   * Request Headers: Cabeçalho da requisição
   */

   /**
    * Tipos de Banco de dados
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select(*').where()
     */

    // routes.post('/users', (request, response) => {
    //   const params = request.query // acessa query params
    //   const id = request.params // acessa route params
    //   const body = request.body // acessa request body
    
    //   console.log(body)
        
    //   return response.json({
    //     evento: 'Semana OmniStack 11.0',
    //     aluno: 'Wagner dos Santos Lima'
    //   })
    // })

    routes.post('/sessions', SessionController.store)

    routes.get('/ongs', OngController.index)
    routes.post('/ongs', OngController.store);

    routes.get('/incidents', IncidentController.index);
    routes.post('/incidents', IncidentController.store);
    routes.delete('/incidents/:id', IncidentController.delete);

    routes.get('/profile', ProfileController.index);

    module.exports = routes;