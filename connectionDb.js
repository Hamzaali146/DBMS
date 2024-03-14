// let mysql = require("mysql2");
// let connection = mysql.createPool({
//     host: "156.67.73.151",
//     user: "u481156254_hamza",
//     password: "/a10UEI#3T",
//     database:"u481156254_Copcompanion",
//     port:"3306",
//     waitForConnections: true,
//     connectionLimit : 10,
//     queueLimit:0
// });

// import e = require("express");

// let obj = []
// connection.query('SELECT * FROM officers', (error, results, fields) => {
//     if (error) {
//       console.error('Error connecting to MySQL:', error);
//       return;
//     }
//     obj = results
//     connection.end()
//     console.log(obj)
//     // console.log('Query results:', results);
//   });
//   // console.log(obj)
// // connection.connect(function(err){
// //     if(err) throw err;
// //     console.log("Connection Successfull")
// // })

let a = {
  name:"hamza",
  age: 19,
  major:"computer systems"

}
for (const key in a) {
  if (a.hasOwnProperty.call(a, key)) {
    const element = a[key];
    console.log(element);
  }
}