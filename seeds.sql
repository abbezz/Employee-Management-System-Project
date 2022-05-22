USE employeeTracker_db;

INSERT INTO department (name)
VALUES
('Human Resources'),
('Marketing & Sales'),
('Engineering'),
('Accounting & Finance'),
('Legal');

INSERT INTO roles (id, title, salary, department_id)
VALUES
(1,'HR administrator', 25000, 1),
(2,'Sales Manager', 30000, 2),
(3,'Finanical Analyst', 45000, 4),
(4,'Software Engineer', 58000, 3),
(5,'Front END Developer', 70000, 3),
(6,'Accountant', 77000, 4),
(7,'Finanical Analyst', 23000, 4),
(8,'Lawyer', 85000, 5);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES
(1,'Abdollah', 'Mohammed', 1, NULL),
(2,'John', 'Eriksson', 2, 1),
(3,'Erik', 'Hassan', 3, NULL),
(4,'Abbe', 'Noh', 4, 2),
(5,'Dunya', 'Draken', 5, NULL),
(6,'Stev', 'David', 6, 3),
(7,'Fredrik', 'Andersson', 7, NULL),
(8,'Karl', 'Zamzam', 8, NULL);
