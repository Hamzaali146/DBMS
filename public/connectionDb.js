import mysql from "mysql2";
let connection = mysql.createPool({
    host: "156.67.73.151",
    user: "u481156254_hamza",
    password: "/a10UEI#3T",
    database:"u481156254_Copcompanion",
    port:"3306",
    waitForConnections: true,
    connectionLimit : 10,
    queueLimit:0
});

let obj = []
connection.query(`SELECT * FROM OFFICERS `, (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    obj = results
    connection.end()
    console.log(obj)
    console.log('Query results:', results);
  });
