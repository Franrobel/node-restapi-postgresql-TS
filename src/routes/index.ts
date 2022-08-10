import { Router } from "express"; 
//importamos funcion getUsers 
import { getUsers } from "../controllers/index.controller";
const router = Router() // permite crear rutas para el servidor

router.get('/users', getUsers)

export default router;