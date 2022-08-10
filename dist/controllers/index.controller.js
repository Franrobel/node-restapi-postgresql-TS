"use strict";
//este archivo index.controller.ts sera encargado de traer consultas de la base de datos
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
//importamos pool (conexion a la bbdd)
const database_1 = require("../database");
//declaro las funciones a llamar en las rutas
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //antes de la respuesta hago consulta a bbdd
    //peticion asincrona trae los datos como un arreglo
    //node hace consulta a otro programa de manera asincrona, no espera a la resolucion para seguir 
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        console.log(response.rows);
        return res.status(200).json(response.rows
            .map(user => (Object.assign({}, user //todos
        //user: user.name // return array con json con key user y value nombres de los users
        ))));
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
    //res.send(response.rows[0].id, response)
});
exports.getUsers = getUsers;
// GETUSERBYID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield database_1.pool.query('SELECT * FROM users WHERE id=$1', [id]);
        return res.status(200).json(` el nombre de id ${id} es ${response.rows[0].name}`);
    }
    catch (e) {
        return res.status(500).json('hubo error en server');
    }
});
exports.getUserById = getUserById;
//CREATEUSER
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const response = yield database_1.pool
            .query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        return res.status(200).json({
            message: `user ${name} was created`,
            body: {
                name, email
            }
        });
    }
    catch (error) {
        return res.status(500).json('it was not possible to create a user');
    }
});
exports.createUser = createUser;
//DELETEUSER
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        // si no voy a utilizar la query como una variable podemos borrar lo anterior a await
        const response = yield database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
        console.log(response.rows);
        return res.status(200).json({ message: `user with ${id} was deleted` });
    }
    catch (error) {
        return res.status(500).json('there was an error');
    }
});
exports.deleteUser = deleteUser;
//UPDATEUSER 
/* para UPDATE  necesitamos el req.params y el req.body
 req.params.id cual usuario quiero actualizar
 req.body me dara los nuevos datos para actualizar
 */
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = yield database_1.pool
        .query('UPDATE users set name=$1, email=$2 WHERE id=$3', [name, email, id]);
    res.status(200).json({
        message: `user ${id} was modified`,
        body: { name, email }
    });
});
exports.updateUser = updateUser;
