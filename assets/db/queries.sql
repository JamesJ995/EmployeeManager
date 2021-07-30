SELECT first_name, last_name, title
FROM employees 
JOIN roles ON employees.role_id = roles.id;