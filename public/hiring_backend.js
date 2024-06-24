function addOfficer(){
  // let deptIdCountRaw = await fetch("departments",{method:"POST"})
  // let  deptIdCount = await deptIdCountRaw.json()
    document.getElementById("formWindow").innerHTML = ""
    document.getElementById("formWindow").innerHTML = `<form class="container" action="/officerdata" method="post">
    <div class="horizontal-container">
    
      
    </div>
    </h1> 

    <div class="answer-container" >
      <input type="text" name="deptId" id="deptId" placeholder="Dept ID" autocomplete="off"  >
    </div>
    <div class="answer-container" >
      <input type="text" name="badgeNum" id="badgeNum" placeholder="Badge Num"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="text" name="firstNum" id="firstNum" placeholder="First Name"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="text" name="lastNum" id="lastNum" placeholder="Last Name"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="text" name="ContactNum" id="ContactNum" placeholder="Contact Number"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="text" name="passWord" id="passWord" placeholder="Set Password"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="email" name="email" id="email" placeholder="Email"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="date" name="dob" id="dob" placeholder="Date Of Birth"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="date" name="hiringDate" id="hiringDate" placeholder="Hiring date"autocomplete="off" >
    </div>
    <div class="answer-container" >
        <select name="officerRank" id="officerRank" size="1" required> 
      <option value="default" selected> 
        --- Choose Officer Rank --- 
      </option> 
      <option value="Constable"> 
      Constable 
      </option> 
      <option value="Head Constable"> 
      Head Constable
      </option> 
      <option value="Assistant Sub-Inspector of Police (ASI)"> 
      Assistant Sub-Inspector of Police (ASI) 
      </option> 
      <option value="Sub-Inspector of Police (SI)"> 
      Sub-Inspector of Police (SI) 
      </option>
      <option value="Inspector of Police (IP)"> 
      Inspector of Police (IP)
      </option>
      <option value="Assistant/Deputy Superintendent of Police (ASP/DSP)"> 
      Assistant/Deputy Superintendent of Police (ASP/DSP) 
      </option>
      <option value="Superintendent of Police (SP)"> 
      Superintendent of Police (SP)
      </option>
      <option value="Senior Superintendent of Police (SSP)"> 
      Senior Superintendent of Police (SSP)
      </option>
      <option value="Deputy Inspector General of Police (DIG)"> 
      Deputy Inspector General of Police (DIG)
      </option>
      <option value="Additional Inspector General of Police (AIG or Addl. IG)"> 
      Additional Inspector General of Police (AIG or Addl. IG)
      </option>
      <option value="Inspector General of Police (IGP)"> 
      Inspector General of Police (IGP)
      </option>
    </select> 
    </div>

    <button type="submit">Add To Database
        </button>

</form>`
}

function addDepartment(){
  document.getElementById("formWindow").innerHTML = ""
  document.getElementById("formWindow").innerHTML = `<form class="container" action="/departmentdata" method="post">
  <div class="horizontal-container">
    <h3 class="sitetitle">
      Add Department in CopCompanion Database!
    </h3>
    
  </div>
  </h1> 

  <div class="answer-container" >
    <input type="text" name="deptName" id="deptId" placeholder="deptName" autocomplete="off" >
  </div>

  <div class="answer-container" >
    <input type="text" name="postalCode" id="officerId" placeholder="Postal Code" autocomplete="off" >
  </div>
  
  <div class="answer-container" >
    <input type="text" name="landLine" id="firstNum" placeholder="Land Line Number"autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="number" name="numOfficers" id="firstNum" placeholder="Numbers of Officer in department"autocomplete="off" >
  </div>
  <div class="answer-container">
      <select name="areaId" id="areaId" required>
        <option value="default" selected>--- Choose Area ID ---</option>
        <option value="10200">10200 - Sector F-3, Mirpur, Azad Kashmir</option>
        <option value="13100">13100 - Upper Chattar, Muzaffarabad, Azad Kashmir</option>
        <option value="15100">15100 - Jutial, Gilgit, Gilgit-Baltistan</option>
        <option value="16100">16100 - Airport Road, Skardu, Gilgit-Baltistan</option>
        <option value="19200">19200 - Saidu Sharif, Swat, Khyber Pakhtunkhwa</option>
        <option value="22010">22010 - Jinnahabad, Abbottabad, Khyber Pakhtunkhwa</option>
        <option value="25000">25000 - Hayatabad, Peshawar, Khyber Pakhtunkhwa</option>
        <option value="25100">25100 - University Town, Peshawar, Khyber Pakhtunkhwa</option>
        <option value="44000">44000 - Blue Area, Islamabad, Punjab</option>
        <option value="44004">44004 - Blue Area, Islamabad, Punjab</option>
        <option value="44010">44010 - Blue Area, Islamabad, Punjab</option>
        <option value="44040">44040 - Blue Area, Islamabad, Punjab</option>
        <option value="44060">44060 - F-6, Islamabad Capital Territory, Islamabad</option>
        <option value="44070">44070 - G-9, Islamabad Capital Territory, Islamabad</option>
        <option value="44170">44170 - G-9, Islamabad Capital Territory, Islamabad</option>
        <option value="45700">45700 - Bahria Town, Rawalpindi, Punjab</option>
        <option value="46000">46000 - Sadar, Rawalpindi, Punjab</option>
        <option value="54000">54000 - Gulberg, Lahore, Punjab</option>
        <option value="54500">54500 - Johar Town, Lahore, Punjab</option>
        <option value="54700">54700 - Model Town, Lahore, Punjab</option>
        <option value="71000">71000 - Latifabad, Hyderabad, Sindh</option>
        <option value="75600">75600 - Clifton, Karachi, Sindh</option>
        <option value="75606">75606 - Clifton, Karachi, Sindh</option>
        <option value="87200">87200 - Sariab, Quetta, Balochistan</option>
        <option value="87202">87202 - Sariab, Quetta, Balochistan</option>
        <option value="87220">87220 - Sariab, Quetta, Balochistan</option>
        <option value="87300">87300 - Cantonment, Quetta, Balochistan</option>
        <option value="87305">87305 - Cantonment, Quetta, Balochistan</option>
        <option value="89000">89000 - Model Town, Khuzdar, Balochistan</option>
        <option value="89900">89900 - Model Town, Khuzdar, Balochistan</option>
        <option value="91200">91200 - Port Area, Gwadar, Balochistan</option>
      </select>
    </div>

  <button type="submit">Add To Database
      </button>

</form>`
}
function addCases(){
  document.getElementById("formWindow").innerHTML = ""
  document.getElementById("formWindow").innerHTML = `<form class="container" action="/casesdata" method="post">
  <div class="horizontal-container">
    <h3 class="sitetitle">
      Add Cases in CopCompanion Database!
    </h3>
    
  </div>
  </h1> 

  <div class="answer-container" >
    <input type="text" name="caseId" id="officerId" placeholder="caseId" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="investigating_officer_id" id="deptId" placeholder="Investigating officer ID" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="description" id="badgeNum" placeholder="Case Description" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="date" name="dateOpened" id="firstNum" placeholder="Date opened"autocomplete="off" >
  </div>
  <button type="submit">Add To Database
      </button>

</form>`
}

function addRecords(){
  document.getElementById("formWindow").innerHTML = ""
  document.getElementById("formWindow").innerHTML = `<form class="container" action="/recordsdata" method="post">
  <div class="horizontal-container">
    <h3 class="sitetitle">
      Add Criminal Records in CopCompanion Database!
    </h3>
    
  </div>
  </h1> 

  <div class="answer-container" >
    <input type="text" name="recordId" id="officerId" placeholder="recordId" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="areaCode" id="deptId" placeholder="Area Code" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="suspect" id="badgeNum" placeholder="Suspect Name" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="crimeType" id="firstNum" placeholder="Crime Type"autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="crimeStatus" id="firstNum" placeholder="Crime Status"autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="description" id="firstNum" placeholder="Criminal Description"autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="investigating_officer_id" id="firstNum" placeholder="Investigating officer Id"autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="date" name="datecommit" id="firstNum" placeholder="Date Commited"autocomplete="off" >
  </div>
  <button type="submit">Add To Database
      </button>

</form>`
}

// function myFunction(){
//     let officerIdValue = document.getElementById("officerId").value;
//     let deptIdValue = document.getElementById("deptId").value;
//     let badgeNumValue = document.getElementById("badgeNum").value;
//     let firstNumValue = document.getElementById("firstNum").value;
//     let lastNumValue = document.getElementById("lastNum").value;
//     let ContactNumValue = document.getElementById("ContactNum").value;
//     let emailValue = document.getElementById("email").value;
//     let dobValue = document.getElementById("dob").value;
//     let hiringDateValue = document.getElementById("hiringDate").value;
//     let officerRankValue = document.getElementById("officerRank").value;
//     console.log(officerIdValue,typeof(parseInt(officerIdValue)))
//     console.log(deptIdValue,typeof(parseInt(deptIdValue)))
//     console.log(ContactNumValue,typeof(parseInt(ContactNumValue)))
// }
