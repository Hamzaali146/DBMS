async function main(){
    // try {
    const totalCaseRaw = await fetch("/case",{method:"POST"})
    // if (!totalCase) throw new Error("Error Fetching Cases...")
    const totalCase = await totalCaseRaw.json()
    document.getElementById("casesCount").innerHTML = totalCase.length 
    const totalOfficerRaw = await fetch("/officer",{method:"POST"})
    const totalOfficer = await totalOfficerRaw.json()
    document.getElementById("officerCount").innerHTML = totalOfficer.length
    const totalDepartmentRaw = await fetch("/department",{method:"POST"})
    const totalDepartment = await totalDepartmentRaw.json()
    document.getElementById("departCount").innerHTML = totalDepartment.length
    const totalRecordRaw = await fetch("/record",{method:"POST"})
    const totalRecord = await totalRecordRaw.json()
    document.getElementById("recordCount").innerHTML = totalRecord.length
    document.getElementById("viewbtn").addEventListener("click",myFunction)
    // } catch (error) {
    //     return {
    //         message:error?.message || "Something Went Wrong"
    //     }
    // }
    const totalOfficerDeptRaw = await fetch("/officerdept",{method:"POST"})
    const totalOfficerDept = await totalOfficerDeptRaw.json()
    const totalRecordDeptRaw = await fetch("/recordinfo",{method:"POST"})
    const totalRecordDept = await totalRecordDeptRaw.json()
    
    async function myFunction(){
     await main()
        let searchview = document.getElementById("userInput").value;
        
        if(searchview.trim().toLowerCase() === "officers"){
            document.getElementById("searchitem").innerHTML =""
            totalOfficer.forEach(element => {
                
                        document.getElementById("searchitem").innerHTML += `<ol class="ofcards">
                    Name Of Officers : <strong>${element.FIRST_NAME}</strong><br>
                    Last Name : <strong>${element.LAST_NAME}</strong><br>
                    Badge Number : <strong>${e.BADGE_NUM}</strong><br>
                    Contact Number : <strong>${element.CONTACT_NUM}</strong><br>
                    Dept Id : <strong>${e.DEPT_ID}</strong><br>
                    Email Id : <strong>${element.EMAIL_ID}</strong><br>
                    Officer Rank : <strong>${e.OFFICER_RANK}</strong><br>
                    Hiring Date : <strong>${e.HIRING_DATE}</strong>
                            </ol>`        
                


            });
            
        }else if(searchview.toLowerCase() === "departments"){
            document.getElementById("searchitem").innerHTML = ""
            totalDepartment.forEach(element => {
                document.getElementById("searchitem").innerHTML += `<ol class="ofcards">
                    Name Of Department : <strong>${element.DEPT_NAME}</strong><br>
                    Department ID : <strong>${element.DEPT_ID}</strong><br>
                    Land Line no : <strong>${element.LAND_LINE_NUM}</strong><br>
                    Numbers Of officers : <strong>${element.NUMBER_OF_OFFICERS}</strong><br>
                    Postal Code : <strong>${element.POSTAL_CODE}</strong><br>
                    City ID : <strong>${element.CITY_ID}</strong>
                            </ol>`



            });
        
            

        }else if(searchview.toLowerCase() === "cases"){
            document.getElementById("searchitem").innerHTML = ""
            totalCase.forEach(element => {
                document.getElementById("searchitem").innerHTML +=`<ol class="ofcards">
                            Case ID : <strong>${element.CASE_ID}</strong><br>
                            Case Description : <strong>${element.CASE_DESCRIPTION}</strong><br>
                            Investigating Officer ID : <strong>${element.INVESTIGATING_OFFICER_ID}</strong><br>
                            Date Opened : <strong>${element.DATE_OPENED}</strong>
                            </ol>`
                
            });
            
        
            

        }else if(searchview.toLowerCase() === "records"){
            document.getElementById("searchitem").innerHTML = ""
            totalRecord.forEach(element => {
                totalRecordDept.forEach(e=> {
                    if(e.CRIME_ID ===element.CRIME_ID){
                        document.getElementById("searchitem").innerHTML += `<ol class="ofcards">
                    Suspect Name : <strong>${e.SUSPECT_NAME}</strong><br>
                    Record ID : <strong>${e.RECORD_ID}</strong><br>
                    Criminal Type : <strong>${element.CRIME_TYPE}</strong><br>
                    CRIME ID : <strong>${e.CRIME_ID}</strong><br>
                    Description : <strong>${element.CRIMINAL_DESCRIPTION}</strong><br>
                    Department ID : <strong>${element.DEPT_ID}</strong><br>
                    Postal Code : <strong>${element.POSTAL_CODE}</strong><br>
                    Date Incident : <strong>${e.DATE_OF_INCIDENT}</strong><br>
                    Investigating Officer Id : <strong>${e.INVESTIGATING_OFFICER_ID}</strong><br>
                            </ol>`
                    }
                });
                
            });
            
        
            

        }else{
            document.getElementById("searchitem").innerHTML = ""
            document.getElementById("searchitem").innerHTML = `<p style="color: red;">No Records found named ${searchview.toLowerCase()}!</p>`
        }


        
    }
    
    
    

}

main()
