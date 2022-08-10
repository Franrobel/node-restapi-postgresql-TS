create database TSDataBase; --la del tutorial es typescriptdatabase
-- cmd 
-- \l para ver las BBDD que tengo
-- \c (nombre bbdd) para cambiar 
--\dt lista todas las tablas de la bbdd donde este
-- \d <nombre tabla> muestra info de tabl columns and rows
create table users (
    id serial primary key, 
    name varchar(40), 
    email text
);

insert into users (name, email) 
    values ('Joe', 'joe@ibm.com'), 
           ('ryan', 'ryan@faztweb.com');