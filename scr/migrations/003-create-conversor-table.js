const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createConversorTable() {
    try{
        const connection = await mysql.createConnection(databaseConfig);

        await connection.query(`USE ${databaseConfig.database}`)

        await connection.query(`
        CREATE TABLE conversao(
            id_conversao integer primary key auto_increment not null,
            id_moeda integer,
            data_1 VARCHAR(10),
            valor_cota decimal(10,2),
            valor_orig decimal(10,2),
            valor_conv decimal(10,2),
            foreign key (id_moeda) references moeda(id_moeda)
        );`);

        await connection.end();

        console.log("Table conversor created!");
    }catch(error) {
        console.log(`Error creating table estabelecimento: ${error}`);
    }
}

createConversorTable();