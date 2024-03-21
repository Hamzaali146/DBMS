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
let depart = []
let record = []
let hr = []
connection.query('SELECT * FROM OFFICERS', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    obj = results
    // console.log('Query results:', obj);
  });

  connection.query('SELECT * FROM HIRING_OFFICERS', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    hr = results
    // console.log('Query results:', obj);
  });

connection.query('SELECT * FROM CASE_TYPE', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  cases = results
  // console.log('Query results:', cases);
});

connection.query('SELECT * FROM POLICE_DEPARTMENT', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  depart = results
  // console.log('Query results:', depart);
});

connection.query('SELECT * FROM CRIMINAL_RECORDS', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  record = results
  console.log('Query results:', record);
  console.log(record.length)
});

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
      res.render("admin",{name:element.FIRST_NAME.toLowerCase(),rank:element.OFFICER_RANK.toLowerCase()})
    } else{
      for (const key in hr){
        const element = hr[key]
        if(element.FIRST_NAME.toLowerCase()==usName.toLowerCase() && element.HR_ID === parseInt(answer)){
          res.render("hiring",{name:element.FIRST_NAME.toLowerCase(),rank:element.HR_ID})
        }
      }
    }
    
  }
  res.render("login")
})

app.post('/officerdata', (req, res) => {
  let officerId = req.body.officerId;
  let deptId = req.body.deptId;
  let badgeNum = req.body.badgeNum;
  let firstNum = req.body.firstNum;
  let lastNum =req.body.lastNum;
  let ContactNum = req.body.ContactNum;
  let email = req.body.email;
  let dob = req.body.dob;
  let hiringDate = req.body.hiringDate;
  let officerRank = req.body.officerRank;
  let sql = `INSERT INTO OFFICERS (OFFICER_ID, DEPT_ID, BADGE_NUM, FIRST_NAME, LAST_NAME, OFFICER_RANK, CONTACT_NUM, EMAIL_ID, DOB, HIRING_DATE) 
           VALUES (${parseInt(officerId)}, ${parseInt(deptId)}, '${badgeNum}', '${firstNum}', '${lastNum}', '${officerRank}', ${parseInt(ContactNum)}, '${email}', '${dob}', '${hiringDate}')`;

    connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    // obj = results
    console.log("Row Inserted Successfully");
  });
  res.render("hiring.ejs")
})

// API FOR ALL MY TABLES FROM MYSQL DATABASE

app.post('/officer', (req, res) => {
  res.json(obj)
})

app.post('/department', (req, res) => {
  res.json(depart)
})

app.post('/record', (req, res) => {
  res.json(record)
})


app.post('/case', (req, res) => {
    res.json(cases)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})