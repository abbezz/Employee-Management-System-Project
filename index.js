const mysql = require('mysql2');
const inquirer = inquirer("inquirer");
const createTable = require('console.table');


// connect to mysql database
const db = mysql.createConnection({
       
    host: "localhost",
    port: "3306",
    user: "root",
    password: "821010",
    database: "employeeTracker_db"
       

    });
    connection.connect((err) => {
        if (err) throw err;
       start();
    });
    
    const start = () => {
        inquirer.prompt({
            name:'options',
            type:'list',
            message:'Hello, What would you like to do? Select an option below',
            choices:[
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee role',
                "Delete an Employee"
            ],
        })
        .then((answer) => {
            switch(answer.action){
                case 'View all departments':    ViewAllDepartments();   break;
                case 'View all roles':          ViewAllRoles();         break;
                case 'View all employees':      ViewAllEmployees();     break;
                case 'Add a department':        AddDepartment();        break;
                case 'Add a role':              AddRole();              break;
                case 'Remove employee':         RemoveEmployee();       break;
                case 'Add an employee':         AddEmployee();          break;
                case 'Update an employee role': UpdateEmployeeRole();   break;
                
                default: console.log("Invalid action: ${answer.action}"); break;
    
               
            }
        });
    };
//============= View All Departments ==========================//

function viewAllDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table("All Departments", res);
  });
start();
}


//============= View All Roles ==========================//

function ViewAllRoles() {
  connection.query("SELECT * FROM role", (err, res ) => {
    if (err) throw err;
    console.table("All Roles, res");
  });
  start();
}


//============= View All Employees ==========================//


function ViewAllEmployees() {
 connection.query("SELECT * FROM employee", (err, res) => {
   if(err) throw err;
   console.table("All Employee, res");
 });
start();
}

//============= Add Departments ==========================//

    const AddDepartment = () => {
    inquirer.prompt([
     {
        name: "addDepartment",
        type: "input",
        message: "What is the name of the department you want to add?"
       }]).then(answer => {
        connection.query(`INSERT INTO department (department_name) VALUES ("${answer.addDept}")`, (err, res) => {
          if (err) throw err;
           console.table("Add Department", res);
              start();
              });
          });
      };

      //============= Add Employee ==========================//
       // ADD EMPLOYEE
       const AddEmployee = () => {
        inquirer.prompt([
            {
                name: "addFName",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "addLName",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "addEmpRole",
                type: "input",
                message: "What is the employee's Role - 1: Management, 2: Sales, 3: IT, 4: Human Resources, 5: Finance, 6: Accounting, 7: Design?"
            },
            {
                name: "addEmpManager",
                type: "input",
                message: "What is the employee's manager's ID ?"

            }]).then(res => {
                connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.addFName, res.addLName, res.addEmpRole, res.addEmpManager], (err, res) => {
                if (err) throw err;
                console.table("Successfully Inserted");
                start();
                });
            });
        };


// REMOVE EMPLOYEE
const RemoveEmployee = () => {
  connection.query(`SELECT employees.first_name, employees.id FROM employees`, (err, res) => {
      if (err) throw err;
  });
inquirer.prompt([
  {
      name: 'removeID',
      type: 'input',
      message: "Which employee ID would you like to remove?",
  }
]).then(answer => {
  connection.query(`DELETE FROM employees WHERE id = ?`, [answer.removeID], (err, res) => {
      if (err) throw err;
      console.log("Successfully deleted");
     start();
  });
});
};

connection.connect(err => {
if(err) throw err;
start();
});


