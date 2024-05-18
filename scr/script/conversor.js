const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "conversor"
  };
  
  async function getAllConversor() {
    const connection = await new Promise((resolve, reject) => {
      const connection = mysql.createConnection(databaseConfig);
      connection.connect((err) => {
        if (err) return reject(err);
        resolve(connection);
      });
    });
  
    const [rows] = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM conversao", (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  
    connection.end();
  
    return rows;
  }
  
  async function createConversor(id_moeda, data_1, valor_cota, valor_orig, valor_conv) {
    const connection = await new Promise((resolve, reject) => {
      const connection = mysql.createConnection(databaseConfig);
      connection.connect((err) => {
        if (err) return reject(err);
        resolve(connection);
      });
    });
  
    await new Promise((resolve, reject) => {
      const insertConversor = "INSERT INTO conversao(id_moeda, data_1, valor_cota, valor_orig, valor_conv) VALUES(?, ?, ?, ?, ?)";
      connection.query(insertConversor, [id_moeda, data_1, valor_cota, valor_orig, valor_conv], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  
    connection.end();
  }
  
  // module.exports = {
  //   getAllConversor,
  //   createConversor
  // }