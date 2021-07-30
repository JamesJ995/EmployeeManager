INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 100000, 2),
       ("Accountant", 80000, 3),
       ("Lawyer", 200000, 4),
       ("Salesperson", 150000, 1),
       ("Sales Lead", 300000, 1);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Alexa", "Mathis", 1),
       ("Haris", "Franco", 2),
       ("Kathryn", "Adamson", 3),
       ("Miles", "Lancaster", 4),
       ("Darcey", "Frey", 5);