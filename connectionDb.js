let mysql = require("mysql2");
let connection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "familyhk1",
    database:"SE_DBMS",
    port:"3306",
    waitForConnections: true,
    connectionLimit : 10,
    queueLimit:0
});

connection.query('SELECT * FROM Patrons', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
  
    console.log('Query results:', results);
  });
// connection.connect(function(err){
//     if(err) throw err;
//     console.log("Connection Successfull")
// })
