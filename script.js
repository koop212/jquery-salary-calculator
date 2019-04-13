$(document).ready(readyNow)

let employeeInfo = [];

function readyNow() {
    $('#addInfoButton').on('click', addInfo);
    displayInfo(employeeInfo);
    
}

function addInfo() { // a function to add employee's info.
    console.log('in addInfo:');
    const newInfo = { // new object to store info from inputs
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
    if(total > maxSalary) {
        $('.showTotalMonthly').css('background-color', 'red');
    } // end if
} // end totalMonthly.




