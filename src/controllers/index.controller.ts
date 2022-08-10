//importamos interfaces (descripciones de los objetos) Request, Responde desde express
import { Request, Response } from "express";


//declaro las funciones a llamar en las rutas

export const getUsers = ( req:Request, res:Response ) => {
    res.send('users')
}