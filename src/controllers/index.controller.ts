//este archivo index.controller.ts sera encargado de traer consultas de la base de datos

//importamos interfaces (descripciones de los objetos) Request, Responde desde express
import { Request, Response } from "express";

import { QueryResult } from "pg";
//importamos pool (conexion a la bbdd)
import { pool } from "../database";

//declaro las funciones a llamar en las rutas

export const getUsers = async ( req:Request, res:Response ): Promise<Response> => {
    //antes de la respuesta hago consulta a bbdd
   //peticion asincrona trae los datos como un arreglo
   //node hace consulta a otro programa de manera asincrona, no espera a la resolucion para seguir 
 
  try { const response: QueryResult = await pool.query('SELECT * FROM users');  
   console.log(response.rows)
  
   return res.status(200).json(response.rows
                .map(user => ({
                   ...user //todos
                //user: user.name // return array con json con key user y value nombres de los users
            }))
   )} 
   catch(e){
    console.log(e)
    return res.status(500).json('internal server error')
   }
   //res.send(response.rows[0].id, response)
}

// GETUSERBYID

export const getUserById = async (req:Request, res:Response):Promise<Response> => {
const id = parseInt(req.params.id)

try{
const response: QueryResult = await pool.query('SELECT * FROM users WHERE id=$1', [id])
return res.status(200).json(` el nombre de id ${id} es ${response.rows[0].name}`)
}
catch (e){
    return res.status(500).json('hubo error en server')
}}

//CREATEUSER
export const createUser = async (req:Request, res:Response): Promise<Response> =>{
   const {name, email} = req.body
   
    try {
        const response: QueryResult = await pool
        .query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
        return res.status(200).json({
            message :`user ${name} was created`, 
            body: {
                name, email
            }} )
    } catch (error) {
        return res.status(500).json('it was not possible to create a user')
    }
}

//DELETEUSER
 export const deleteUser = async (req: Request, res: Response):Promise<Response>=> {
    const id = parseInt(req.params.id)
    try {
        // si no voy a utilizar la query como una variable podemos borrar lo anterior a await
        const response: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [id])
       console.log(response.rows)
        return res.status(200).json({message: `user with ${id} was deleted` })
    } catch (error) {
        return res.status(500).json('there was an error')
    }
 }

 //UPDATEUSER 

 /* para UPDATE  necesitamos el req.params y el req.body
  req.params.id cual usuario quiero actualizar 
  req.body me dara los nuevos datos para actualizar
  */

  export const updateUser = async (req:Request, res:Response)=> {
    const id = req.params.id; 
    const { name, email} = req.body;
    const response: QueryResult = await pool
    .query('UPDATE users set name=$1, email=$2 WHERE id=$3', [name, email, id]) 
    res.status(200).json(
        {
            message: `user ${id} was modified`, 
            body: {name, email}
        }
)
}

