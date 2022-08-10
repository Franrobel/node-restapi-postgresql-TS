"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //import modulo
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./routes/index"));
//middlewares funciones que se ejecturan antes de 
//llegar a las rutas
app.use(express_1.default.json()); //convertira los datos que lleguen a formato.json --datos subidos desde restAPI
app.use(express_1.default.urlencoded({ extended: false })); // si enviamos datos desde formularios HTML, va a convertir los datos que lleguen a json  
app.use(index_1.default);
app.listen(3000, () => console.log('server on ports ', 3000));
