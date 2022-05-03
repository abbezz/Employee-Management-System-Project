const inquirer = inquirer("inquirer");
const db = require("./db/connections");
require("console.table");


// connect to mysql database
const db = mysql.createConnection({
       
    host: "localhost",
    port: "3306",
    user: "root",
    password: "821010",
    database: "tracker_db"
       

    });
    connection.connect((err) => {
        if (err) throw err;
        User_input();
    });
    
    const startAnswers = () => {
        inquirer.prompt({
            name:'options',
            type:'rawlist',
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
                case 'Add an employee':         AddEmployee();          break;
                case 'Update an employee role': UpdateEmployeeRole();   break;
    
               
            }
        });
    };

    function viewAllDepartments() {
        db.query("SELECT * FROM department", (err, res) => {
          if (err) throw err;
          console.table(res);
        });
        startAnswers();
      }




      function ViewAllRoles() {
        db.query("SELECT * FROM roles", (err, res) => {
          if (err) throw err;
          console.table(res);
        });
        startAnswers();
      }


    function



 

