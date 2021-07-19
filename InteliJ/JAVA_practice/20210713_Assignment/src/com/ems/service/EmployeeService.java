package com.ems.service;

import com.ems.dto.Employee;
import com.ems.exceptions.EmployeeNotFoundException;

import java.util.List;

public interface EmployeeService {
    public abstract void addEmployee(Employee e);
    public abstract void deleteEmployee(int id);
    public abstract Employee findEmployee(Employee e) throws EmployeeNotFoundException;
    public List<Employee> showAllEmployees();

    public static final String URL = "jdbc:mysql://localhost:3306/employees_database";
    public static final String USERNAME = "root";
    public static final String PASSWORD = "shellvoerika6011";
    public static final String DRIVER_CLASSNAME = "com.mysql.jdbc.Driver";

    //HOMEWORK
    void updateEmployeeDept();
    void updateEmployeeName();
    void updateEmployeeDays();

    void updateEmployeeDaysAttended(Employee e);

    //ANSWER=============================================================
    public abstract void updateEmployee(Employee employee);
}
