const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createConversorTable() {
    try{
        const connection = await mysql.createConnection(databaseConfig);

        await connection.query(`USE ${databaseConfig.database}`)

        await connection.query(`
        CREATE TABLE moeda(
            id_moeda integer primary key auto_increment not null,
            nome_moeda varchar(10) not null
        );`);

        await connection.end();

        console.log("Table conversor created!");
    }catch(error) {
        console.log(`Error creating table estabelecimento: ${error}`);
    }
}

createConversorTable();