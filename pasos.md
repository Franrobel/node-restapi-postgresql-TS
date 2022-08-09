1. npm init -y
 crea package.json
 2. $ npm i typescript -D 
 agrega ts como devdependency solo para development no produccion
 3. npx tsc --init compilador de TS
 crea archivo de conf de TS 
-- rootDir archivos de origen
--outDir archivos de salida

4. npm i express (permite crear el servidor)
5. npm i pg (crear modulo pg para poder conectarme a BD postgres)
6. al importar express saldra error
importante instalar los tipos para TS 
npm i @types/express -D