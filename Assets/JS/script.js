// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const salaryNumber = function(salary) {
  const number = parseFloat(salary);

  if (isNaN(number)) {
    return 0;
  } else {
    return number;
  }
}

// Collect employee data
const collectEmployees = function() {

  const employeeInfo = [];
  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt('Enter first name:');
    const lastName = prompt('Enter last name:');
    let salaryInput = prompt('Enter salary:');

  let salary = salaryNumber(salaryInput);

  const employeeArray = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };

employeeInfo.push(employeeArray);

const continueAdd = confirm('Add another employee?');
addEmployee = continueAdd;
  }

return employeeInfo;

}

// Display the average salary
const displayAverageSalary = function(employeeArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeeArray) {
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
