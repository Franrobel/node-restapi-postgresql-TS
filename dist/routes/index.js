"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos funcion getUsers 
const index_controller_1 = require("../controllers/index.controller");
const router = (0, express_1.Router)(); // permite crear rutas para el servidor
router.get('/users', index_controller_1.getUsers);
exports.default = router;
