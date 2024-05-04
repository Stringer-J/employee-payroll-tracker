// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// made a function that checks if 'salary' input is a number
const salaryNumber = function(salary) {
  const number = parseFloat(salary);

  if (isNaN(number)) {
    return 0;
  } else {
    return number;
  }
}

// starts with a sum of 0, then looks at each salary entered, adds them all up, then returns the total value
const sumArray = function(employeeInfo) {
  let sum = 0;
  for (let employee of employeeInfo) {
    sum += employee.salary;
  }
  return sum;
}

// Collect employee data
const collectEmployees = function() {

  //creates empty array to store info in
  const employeeInfo = [];
  //sets 'addEmployee' to true
  let addEmployee = true;
  //makes a 'while' loop to used code inside as long as 'addEmployee' is true
  while (addEmployee) {
    const firstName = prompt('Enter first name:');
    const lastName = prompt('Enter last name:');
    let salaryInput = prompt('Enter salary:');

    //runs 'salaryNumber' function on 'salaryInput' to check if salary is a number
  let salary = salaryNumber(salaryInput);

    //info added from previous prompts goes here, then later is put in the empty array 'employeeInfo'
  const employeeArray = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };

  //adds what was entered above into the array
employeeInfo.push(employeeArray);

// checks if you want to continue adding info or end the loop
const continueAdd = confirm('Add another employee?');
// keeps 'addEmployee' true if 'continueAdd' confirms you want to add another employee
addEmployee = continueAdd;
  }

  //returns the new info you typed in to the empty 'employeeInfo' array we created earlier
return employeeInfo;

}

// Display the average salary
const displayAverageSalary = function(employeeInfo) {

  //makes variable that uses the 'sumArray' function I built above
  const totalSalary = sumArray(employeeInfo);
  
  // divides total salary by the number of employee entries
  const averageSalary = totalSalary / employeeInfo.length;
  // makes output number only go to 2 decimal places to emulate currency
  const averageSalaryNumber = averageSalary.toFixed(2);
  //turns the output number to USD, maybe this makes the previous 'toFixed' irrelevant? Don't want to find out because it's working
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  //logs the sentence I wrote (exact one from the example), the number of employees, and the final formatted salary average
  console.log(`The average employee salary between our ${employeeInfo.length} employee(s) is`, formatter.format(averageSalaryNumber));

}

// Select a random employee
const getRandomEmployee = function(employeeInfo) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeeArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeeArray.length; i++) {
    const currentEmployee = employeeArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
