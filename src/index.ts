import express from 'express' //import modulo
const app = express();

import indexRoutes from './routes/index' 
app.use(indexRoutes)


app.listen(3000, () => console.log('server on ports ', 3000))