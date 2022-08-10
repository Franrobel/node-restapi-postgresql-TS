import express from 'express' //import modulo
const app = express();

import indexRoutes from './routes/index' 

//middlewares funciones que se ejecturan antes de 
//llegar a las rutas
app.use(express.json()) //convertira los datos que lleguen a formato.json --datos subidos desde restAPI
app.use(express.urlencoded({extended: false})) // si enviamos datos desde formularios HTML, va a convertir los datos que lleguen a json  

app.use(indexRoutes)


app.listen(3000, () => console.log('server on ports ', 3000))