1. `npm init -y`
 crea package.json
 2. $ `npm i typescript -D `
 agrega ts como devdependency solo para development no produccion
 3. `npx tsc --init` compilador de TS
 crea archivo de `tsconfing.json`
-- rootDir archivos de origen
--outDir archivos de salida
`npx tsc` compila TS a JS
4. `npm i express` (permite crear el servidor)
al importar express saldra error
importante instalar los tipos de express para TS 
`npm i @types/express -D`
5. `npm i pg` (crear modulo pg para poder conectarme a BD postgres)
6. `npm i concurrently -D`dependency concurrently permite ejectur con npm run dev
tsc --watch y nodemon 

BASE DATOS server

1. archivo `database.ts` en /src
2. importar pg, instalar modules porque TS no reconoce los tipos de pg `npm i @types/pg -D`
3. importar {pool} from 'pg' pool permite las conexiones
4. pool permite crear la conexion habra que exportarla
este pool object permite hacer consultas a la base de datos

5. crear rutas para el servidor src/routes/index.ts
en archivo importar router de express para crear rutas al servidor
6. importar en src/index.ts el archivo donde estan las rutas
src/routes/index.ts
app.use(nombre variable del archivo )
crear ruta

DEFINIR queries y acciones
en src/controllers/index.controller.ts para luego 
realizar los CRUD methods y definir rutas en src/routes/index.ts

luego para convertir archivos de ts a js 
ejecutamos npm run build que ejectuta cmd tsc 
de esta manera puede ser ejectutado con node.