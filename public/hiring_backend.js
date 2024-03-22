function addOfficer(){
    document.getElementById("formWindow").innerHTML = ""
    document.getElementById("formWindow").innerHTML = `<form class="container" action="/officerdata" method="post">
    <div class="horizontal-container">
      <h3 class="sitetitle">
        Add officer in CopCompanion Database!
      </h3>
      
    </div>
    </h1> 

    <div class="answer-container" >
      <input type="text" name="officerId" id="officerId" placeholder="Type Officer ID" autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="text" name="deptId" id="deptId" placeholder="Dept ID" autocomplete="off" >
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
      <input type="email" name="email" id="email" placeholder="Email"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="date" name="dob" id="dob" placeholder="Date Of Birth"autocomplete="off" >
    </div>
    <div class="answer-container" >
      <input type="date" name="hiringDate" id="hiringDate" placeholder="Hiring date"autocomplete="off" >
    </div>
    <div class="answer-container" >
        <select name="officerRank" id="officerRank" size="1"> 
      <option value="default" selected> 
        --- Choose Officer Rank --- 
      </option> 
      <option value="Sergeant"> 
        Sergeant 
      </option> 
      <option value="Lieutenant"> 
        Lieutenant
      </option> 
      <option value="Captain"> 
        Captain 
      </option> 
      <option value="Officer"> 
        Officer 
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
    <input type="text" name="postalCode" id="officerId" placeholder="Postal Code" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="deptName" id="deptId" placeholder="deptName" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="Location" id="badgeNum" placeholder="Location" autocomplete="off" >
  </div>
  <div class="answer-container" >
    <input type="text" name="landLine" id="firstNum" placeholder="Land Line Number"autocomplete="off" >
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
