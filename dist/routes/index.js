"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)(); // permite crear rutas para el servidor
router.get('/test', (req, res) => res.send('Excelente'));
exports.default = router;
