async function main(){
    let totalCaseRaw = await fetch("/case",{method:"POST"})
    let totalCase = await totalCaseRaw.json()
    document.getElementById("casesCount").innerHTML = totalCase.length 
    let totalOfficerRaw = await fetch("/officer",{method:"POST"})
    let totalOfficer = await totalOfficerRaw.json()
    document.getElementById("officerCount").innerHTML = totalOfficer.length
    let totalDepartmentRaw = await fetch("/department",{method:"POST"})
    let totalDepartment = await totalDepartmentRaw.json()
    document.getElementById("departCount").innerHTML = totalDepartment.length
    let totalRecordRaw = await fetch("/record",{method:"POST"})
    let totalRecord = await totalRecordRaw.json()
    document.getElementById("recordCount").innerHTML = totalRecord.length

    document.getElementById("viewbtn").addEventListener("click",myFunction)
    
    async function myFunction(){
     await main()
        let searchview = document.getElementById("userInput").value;
        
        if(searchview.toLowerCase() === "officers"){
            document.getElementById("searchitem").innerHTML =""
            totalOfficer.forEach(element => {
                document.getElementById("searchitem").innerHTML += `<ol class="ofcards">
                    Name Of Officers : <strong>${element.FIRST_NAME}</strong><br>
                    Last Name : <strong>${element.LAST_NAME}</strong><br>
                    Badge Number : <strong>${element.BADGE_NUM}</strong><br>
                    Contact Number : <strong>${element.CONTACT_NUM}</strong><br>
                    Dept Id : <strong>${element.DEPT_ID}</strong><br>
                    Email Id : <strong>${element.EMAIL_ID}</strong><br>
                    Officer Rank : <strong>${element.OFFICER_RANK}</strong><br>
                    Hiring Date : <strong>${element.HIRING_DATE}</strong>
                            </ol>`


            });
            
        }else if(searchview.toLowerCase() === "departments"){
            document.getElementById("searchitem").innerHTML = ""
            totalDepartment.forEach(element => {
                document.getElementById("searchitem").innerHTML += `<ol class="ofcards">
                    Name Of Department : <strong>${element.DEPT_NAME}</strong><br>
                    Land Line no : <strong>${element.LAND_LINE_NUM}</strong><br>
                    Location : <strong>${element.LOCATION}</strong><br>
                    Postal Code : <strong>${element.POSTAL_CODE}</strong>
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
                document.getElementById("searchitem").innerHTML += `<ol class="ofcards">
                    Suspect Name : <strong>${element.SUSPECT_NAME}</strong><br>
                    Record ID : <strong>${element.RECORD_ID}</strong><br>
                    Criminal Type : <strong>${element.CRIMINAL_TYPE}</strong><br>
                    Description : <strong>${element.CRIMINAL_DESCRIPTION}</strong><br>
                    Status : <strong>${element.CRIMINAL_STATUS}</strong><br>
                    Date Commited : <strong>${element.DATE_COMMITED}</strong><br>
                    Investigating Officer Id : <strong>${element.INVESTIGATING_OFFICER_ID}</strong><br>
                    Area Code : <strong>${element.AREA_CODE}</strong><br>
                            </ol>`



            });
            
        
            

        }else{
            document.getElementById("searchitem").innerHTML = ""
            document.getElementById("searchitem").innerHTML = `<p style="color: red;">No Records found named ${searchview.toLowerCase()}!</p>`
        }


        
    }
    

}
main()