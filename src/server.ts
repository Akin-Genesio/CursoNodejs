import express, { request, response } from 'express'

const app = express();

/**
 * GET = Busca
 * POST = Salvar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração especifica
 */

 app.get("/users", (request, response) =>{
     return response.json({message: "Hello World"})
 });

 app.post("/post", (request, response) =>{
     return response.json({message: "Dados salvos"})
 })
app.listen(3333, () => console.log("Server is running")) 