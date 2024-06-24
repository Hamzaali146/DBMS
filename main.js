import express from "express";  // Server initialize through express
import bodyParser from "body-parser";
const app = express()
const port = 3000
app.use(express.static('public')) // ye ek middleware ha middleware basically fn hota ha isse ham public folder access krte hain
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
let officers_info = [] // officers_personal info
let officer_dept_info = [] // officers_personal info
let cases =[]
let depart = []
let record = []
let hr = []
let record_info=[]
let officertabjoin=[]
connection.query('SELECT * FROM OFFICERS_INFO', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    officers_info = results
    // console.log('Query results:', officers_info);
  });
  connection.query('select * from OFFICERS_INFO natural join OFFICER_DEPT_INFO;', (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    officertabjoin = results
    console.log('Query results officer table:', officertabjoin);
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
  console.log('Query results: of depart', depart);
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
  for (const key in officertabjoin) {
    const element = officertabjoin[key];
    if(element.OFFICER_RANK == 'Senior Superintendent of Police (SSP)' && element.FIRST_NAME.toLowerCase()==usName.toLowerCase() && element.OFF_PASSWORD.toLowerCase() == answer.toLowerCase()){
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
  // let officerId = req.body.officerId;
  let deptId = req.body.deptId;
  let badgeNum = req.body.badgeNum;
  let firstNum = req.body.firstNum;
  let lastNum =req.body.lastNum;
  let ContactNum = req.body.ContactNum;
  let email = req.body.email;
  let dob = req.body.dob;
  let hiringDate = req.body.hiringDate;
  let officerRank = req.body.officerRank;
  let passWord = req.body.passWord
  let idcheck = false;
  let deptcheck =false;
  depart.forEach(element => {  // ye hramkhor ye check kraha k officer

    if (element.DEPT_ID === parseInt(deptId)) {
      deptcheck = true
    }
  });
  if(deptcheck){
    // let sqlofficerinfo = `INSERT INTO OFFICERS_INFO (FIRST_NAME, LAST_NAME, CONTACT_NUM, EMAIL_ID, OFF_PASSWORD, DOB) 
    //        VALUES ('${firstNum}, '${lastNum}', '${parseInt(ContactNum)}', '${email}', '${passWord}', '${dob}')`;
    let sqlOfficerInfo = `INSERT INTO OFFICERS_INFO (FIRST_NAME, LAST_NAME, CONTACT_NUM, EMAIL_ID, OFF_PASSWORD, DOB) 
           VALUES (?, ?, ?, ?, ?, ?)`;
    
    
    connection.query(sqlOfficerInfo, [firstNum, lastNum, parseInt(ContactNum), email, passWord, dob],(error, results, fields) => {
    if (error) {
      return res.status(500).send(error);
    }
    // officers_info = results'
    let Officersid = results.insertId;
    // let sqlofficerdept = `INSERT INTO OFFICER_DEPT_INFO (OFFICER_ID, DEPT_ID, BADGE_NUM, OFFICER_RANK , HIRING_DATE) 
    // VALUES ('${parseInt(Officersid)}', '${parseInt(deptId)}, '${badgeNum}', '${officerRank}', '${hiringDate}')`;

    let sqlOfficerDept = `INSERT INTO OFFICER_DEPT_INFO (OFFICER_ID, DEPT_ID, BADGE_NUM, OFFICER_RANK, HIRING_DATE) 
                            VALUES (?, ?, ?, ?, ?)`;

    connection.query(sqlOfficerDept,[Officersid, parseInt(deptId), badgeNum, officerRank, hiringDate], (error, results, fields) => {
      if (error) {
        console.error('Error connecting to MySQL:', error);
        return;
      }
      // officers_info = results
      console.log("Row Inserted Successfully to officer dept");
    });
    console.log("Row Inserted Successfully to officers info");
  });
  res.render("hiring",{successd:"offices"})
}
else{
  res.render("hiring",{errord:"Department no "+deptId+" Mojood nhi hai"})
}
  
})


app.post('/departmentdata', (req, res) => {
  let postalCode = req.body.postalCode;
  let deptName = req.body.deptName;
  let numOfficers = req.body.numOfficers;
  let landLine = req.body.landLine;
  let areaId = req.body.areaId;   
  let sql = `INSERT INTO DEPT_INFO (AREA_ID,POSTAL_CODE, DEPT_NAME, NUMBER_OF_OFFICERS, LAND_LINE_NUM) 
           VALUES ('${parseInt(areaId)}','${parseInt(postalCode)}', '${deptName}', '${numOfficers}', '${parseInt(landLine)}')`;

    connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    // officers_info = results
    console.log("Department Inserted Successfully");
  });
  res.render("hiring",{successd:"Department"})
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