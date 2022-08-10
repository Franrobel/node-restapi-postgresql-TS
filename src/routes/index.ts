import { Router } from "express"; 
const router = Router() // permite crear rutas para el servidor

router.get('/test', (req, res)=> res.send('Excelente'))

export default router;