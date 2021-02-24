import 'reflect-metadata'
import express, { request, response } from 'express'
import "./database"
import { router } from './routes';

const app = express();

/**
 * GET = Busca
 * POST = Salvar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração especifica
 */

 app.use(express.json())
app.use(router)
app.listen(3333, () => console.log("Server is running")) 