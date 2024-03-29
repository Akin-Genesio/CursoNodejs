import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import "express-async-errors"
import createConnection from "./database"
import { router } from './routes';
import { AppError } from './__tests__/errors/AppError';

createConnection();
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

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`
    })
})
export {app}