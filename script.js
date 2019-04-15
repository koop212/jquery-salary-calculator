$(document).ready(readyNow)

let employeeInfo = [];

function readyNow() {
    $('#addInfoButton').on('click', addInfo);
    $('#deleteButton').on('click', deleteEmployee);
    displayInfo(employeeInfo);   
}

function addInfo() { // a function to add employee's info.
    console.log('in addInfo:');
    const newInfo = { // new object to store emloyee's infos.
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idInfo: $('#idInfo').val(),
        titleName: $('#titleName').val(),
        annualSalary: $('#annualSalary').val()
    }
    employeeInfo.push(newInfo); // stores newInfo into employeeInfo array
    displayInfo(employeeInfo); // employee info will display on DOM
    totalMonthly();


    // Deletes input fields after infos are submitted
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idInfo').val('');
    $('#titleName').val('');
    $('#annualSalary').val('');
}




function displayInfo() { // a function to display employee's info
    console.log('in displayInfo');
    let el = $('#infoOut');
    el.empty();
    for(let i = 0; i < employeeInfo.length; i++) {
        // displaying infos to the DOM
        const listInfo = `<tr> 
        <td>${employeeInfo[i].firstName}</td>
        <td>${employeeInfo[i].lastName}</td>
        <td>${employeeInfo[i].idInfo}</td>
        <td>${employeeInfo[i].titleName}</td>
        <td>${employeeInfo[i].annualSalary}</td></tr>`;
        el.append(listInfo)
    }
}

function totalMonthly() { // a function to calculate the total monthly.
    let total = 0;
    const maxSalary = 20000;
    for(let i=0; i<employeeInfo.length; i++) { // loop through array for 
        total = total + (employeeInfo[i].annualSalary/12); // Employee's annual salary divided by 12 months.
        $('.showTotalMonthly').text(`Total Monthly: $${total.toFixed(2)}`);
    } // for loop.
    // if total monthly is over 20,000, then background will turn red
    if(total > maxSalary) {
        $('.showTotalMonthly').css('background-color', 'red');
    } // end if
    //if total monthly is under 20,000, then background will not change.
    else {
        $('.showTotalMonthly').css('background-color', 'lightcyan');

    } //end else.
} // end totalMonthly.


// a function to delete employee by matching the id info.
function deleteEmployee() {
    console.log('in deleteEmployee');
    
    const employeeObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idInfo: $('#idInfo').val(),
        titleName: $('#titleName').val(),
        annualSalary: $('#annualSalary').val()
    }

    for(i=0; i<employeeInfo.length; i++) {
        if(employeeInfo[i].idInfo == employeeObject.idInfo) {
                employeeInfo.splice(i, 1);
            } // end if 
    } //end for loop
    
    // clear inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idInfo').val('');
    $('#titleName').val('');
    $('#annualSalary').val('');

    addInfo();
    
} // end deleteEmployee




