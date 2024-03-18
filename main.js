import express from "express";
import bodyParser from "body-parser";
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
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
let cases =[]
connection.query('SELECT * FROM OFFICERS', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    obj = results
    console.log('Query results:', obj);
  });

// connection.query('SELECT * FROM CASE_TYPE', (error, results, fields) => {
//   if (error) {
//     console.error('Error connecting to MySQL:', error);
//     return;
//   }
//   cases = results
//   console.log('Query results:', cases);
// });


app.get('/', (req, res) => {
    let projectName = "Police Information System"
    res.render("index",{projectName:projectName})
})


app.get('/login', (req, res) => {
    let projectName = "Police Information System"
    res.render("login")
})


app.get('/about', (req, res) => {
  let projectName = "Police Information System"
  res.render("aboutus")
})
app.get('/complain', (req, res) => {
  let projectName = "Police Information System"
  res.render("complain")
})

app.get('/test', (req, res) => {
  let projectName = "Police Information System"
  res.render("test")
})

app.post('/submit', (req, res) => {
  let answer = req.body.answer;
  let usName =req.body.usName;
  for (const key in obj) {
    const element = obj[key];
    if(element.FIRST_NAME.toLowerCase()==usName.toLowerCase() && element.DEPT_ID === parseInt(answer)){
      res.render("admin")
    }
    
  }
  res.render("login")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})