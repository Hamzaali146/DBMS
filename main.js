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
let officers_info = []
let officer_dept_info = []
let cases =[]
let depart = []
let record = []
let hr = []
let record_info=[]
connection.query('SELECT * FROM OFFICERS_INFO', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    officers_info = results
    // console.log('Query results:', officers_info);
  });

  connection.query('SELECT * FROM OFFICER_DEPT_INFO', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    officer_dept_info = results
    // console.log('Query results:', officers_info);
  });

  connection.query('SELECT * FROM HIRING_OFFICERS', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    hr = results
    // console.log('Query results:', officers_info);
  });

connection.query('SELECT * FROM CASE_INFO', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  cases = results
  // console.log('Query results:', cases);
});

connection.query('SELECT * FROM DEPT_INFO', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  depart = results
  // console.log('Query results:', depart);
});

connection.query('SELECT * FROM CRIME_INFO', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  record = results
  // console.log('Query results:', record);
  // console.log(record.length)
});

connection.query('SELECT * FROM CRIME_DEPT_INFO', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  record_info = results
  // console.log('Query results:', record);
  // console.log(record.length)
});

app.get('/', (req, res) => {
    let projectName = "Police Information System"
    res.render("index",{projectName:projectName})
})


app.get('/login', (req, res) => {
    let projectName = "Police Information System"
    res.render("login")
})

app.get('/location', (req, res) => {
  res.render("location")
})


app.get('/about', (req, res) => {
  let projectName = "Police Information System"
  res.render("aboutus")
})
app.get('/complain', (req, res) => {
  let projectName = "Police Information System"
  res.render("complain")
})

app.get('/hiring', (req, res) => {
  res.render("hiring")
})

app.get('/test', (req, res) => {
  let projectName = "Police Information System"
  res.render("test")
})


app.post('/submit', (req, res) => {
  let answer = req.body.answer;
  let usName =req.body.usName;
  for (const key in officers_info) {
    const element = officers_info[key];
    if(element.FIRST_NAME.toLowerCase()==usName.toLowerCase() && element.OFFICER_ID === parseInt(answer)){
      res.render("admin",{name:element.FIRST_NAME.toLowerCase(),rank:element.OFFICER_ID})
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
  let idcheck = false;
  let deptcheck =false;
  officer_dept_info.forEach(element => {
    if(element.OFFICER_ID === parseInt(officerId)){
      idcheck = true
    }
    if (element.DEPT_ID === parseInt(deptId)) {
      deptcheck =true
    }
  });
  if(idcheck && deptcheck){
    let sql = `INSERT INTO OFFICERS (OFFICER_ID, DEPT_ID, BADGE_NUM, FIRST_NAME, LAST_NAME, OFFICER_RANK, CONTACT_NUM, EMAIL_ID, DOB, HIRING_DATE) 
           VALUES (${parseInt(officerId)}, ${parseInt(deptId)}, '${badgeNum}', '${firstNum}', '${lastNum}', '${officerRank}', ${parseInt(ContactNum)}, '${email}', '${dob}', '${hiringDate}')`;

    connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    // officers_info = results
    console.log("Row Inserted Successfully");
  });
  res.redirect("/hiring")
  }else{
    res.render("hiring",{errord:"Officersid or dept id"})
  }
  
})

app.post('/departmentdata', (req, res) => {
  let postalCode = req.body.postalCode;
  let deptName = req.body.deptName;
  let Location = req.body.Location;
  let landLine = req.body.landLine;
  let sql = `INSERT INTO POLICE_DEPARTMENT (POSTAL_CODE, DEPT_NAME, LOCATION, LAND_LINE_NUM) 
           VALUES ('${parseInt(postalCode)}', '${deptName}', '${Location}', '${parseInt(landLine)}')`;

    connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    // officers_info = results
    console.log("Department Inserted Successfully");
  });
  res.render("hiring.ejs")
})


app.post('/casesdata', (req, res) => {
  let caseId = req.body.caseId;
  let investigating_officer_id = req.body.investigating_officer_id;
  let description = req.body.description;
  let dateOpened = req.body.dateOpened;
  let sql = `INSERT INTO CASE_TYPE (CASE_ID, INVESTIGATING_OFFICER_ID, CASE_DESCRIPTION, DATE_OPENED) 
           VALUES ('${parseInt(caseId)}', '${parseInt(investigating_officer_id)}', '${description}', '${dateOpened}')`;

    connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    // officers_info = results
    console.log("Case Inserted Successfully");
  });
  res.render("hiring.ejs")
})

app.post('/recordsdata', (req, res) => {
  let recordId = req.body.recordId;
  let areaCode = req.body.areaCode;
  let suspect = req.body.suspect;
  let crimeType = req.body.crimeType;
  let crimeStatus =req.body.crimeStatus;
  let description =req.body.description;
  let investigating_officer_id =req.body.investigating_officer_id;
  let datecommit = req.body.datecommit;
  let sql = `INSERT INTO CRIMINAL_RECORDS (RECORD_ID, AREA_CODE, SUSPECT_NAME, CRIME_TYPE, CRIMINAL_STATUS, CRIMINAL_DESCRIPTION, INVESTIGATING_OFFICER_ID, DATE_COMMITED) 
           VALUES ('${parseInt(recordId)}', '${parseInt(areaCode)}', '${suspect}', '${crimeType}', '${crimeStatus}', '${description}', '${parseInt(investigating_officer_id)}', '${datecommit}')`;

    connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    // officers_info = results
    console.log("Record Inserted Successfully");
  });
  res.render("hiring.ejs")
})

// API FOR ALL MY TABLES FROM MYSQL DATABASE

app.post('/officer', (req, res) => {
  res.json(officers_info)
})

app.post('/officerdept', (req, res) => {
  res.json(officer_dept_info)
})

app.post('/department', (req, res) => {
  res.json(depart)
})

app.post('/record', (req, res) => {
  res.json(record)
})

app.post('/recordinfo', (req, res) => {
  res.json(record_info)
})


app.post('/case', (req, res) => {
    res.json(cases)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})