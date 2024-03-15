// const ejs = require('ejs')
import express from "express";
import bodyParser from "body-parser";
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
import mysql from "mysql2";
let connection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "familyhk1",
    database:"copcompanion",
    port:"3306",
    waitForConnections: true,
    connectionLimit : 10,
    queueLimit:0
});
let obj = []
connection.query('SELECT * FROM officers', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    obj = results
    console.log('Query results:', obj);
  });
// connection.connect(function(err){
//     if(err) throw err;
//     console.log("Connection Successfull")
// })


app.get('/', (req, res) => {
    let projectName = "Police Information System"
    res.render("index",{projectName:projectName})
})
app.get('/database', (req, res) => {
    let projectName = "Police Information System"
    res.render("database")
})
app.get('/about', (req, res) => {
  let projectName = "Police Information System"
  res.render("aboutus")
})
app.get('/complain', (req, res) => {
  let projectName = "Police Information System"
  res.render("complain")
})
app.post('/submit', (req, res) => {
  let answer = req.body.answer;
  let usName =req.body.usName;
  // console.log(typeof(answer))
  for (const key in obj) {
    const element = obj[key];
    if(element.firstName.toLowerCase()==usName.toLowerCase() && element.officerID === parseInt(answer)){
      res.render("admin")
    }
    
  }
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})