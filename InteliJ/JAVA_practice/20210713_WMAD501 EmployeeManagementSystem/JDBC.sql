-- Database script
-- These two dashes represent a comment in SQL

CREATE DATABASE employees_database;  

USE employees_database;

SELECT DATABASE();

CREATE TABLE employees_tbl (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(20), -- number of charactors
    dept varchar(10),
    salary int(10)
)

-- Very manual way is here
INSERT INTO employees_tbl VALUES (100, 'Michael', 'Sales', 5500);
INSERT INTO employees_tbl VALUES (200, 'Cass', 'Technology', 6000);
INSERT INTO employees_tbl VALUES (300, 'Samuel', 'Technology', 4000);
INSERT INTO employees_tbl VALUES (400, 'John', 'MArketing', 9000);
INSERT INTO employees_tbl VALUES (500, 'Beth', 'Sales', 5500);
INSERT INTO employees_tbl VALUES (600, 'Peter', 'HR', 5500);

DROP DATABASE employees_database;