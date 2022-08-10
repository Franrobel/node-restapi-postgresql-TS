import { Router } from "express"; 
//importamos funcion getUsers 
import { getUsers, getUserById, createUser, deleteUser, updateUser } from "../controllers/index.controller";
const router = Router() // permite crear rutas para el servidor

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users/', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)


export default router;