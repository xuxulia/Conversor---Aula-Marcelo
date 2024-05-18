const conversorService = (() => {
    const databaseConfig = {
        host: "localhost",
        user: "root",
        password: "root",
        database: "conversor"
    };
  
    async function getAllConversor() {
      // ...
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
  
    return {
      getAllConversor,
      createConversor
    }
  })();
  
  document.getElementById("converter").onclick = async function(req, res) { 
    let id_moeda = document.getElementById('moeda').value
    let data_1 = document.getElementById('data').value
    let valor_cota = document.getElementById('valor_hoje').value
    let valor_orig = document.getElementById('valor_conv').value
    let convertido = valor_cota * valor_orig;
    document.getElementById("convertido").innerHTML = convertido;
    conversorService.createConversor(id_moeda, data_1, valor_cota, valor_orig, convertido);
  };