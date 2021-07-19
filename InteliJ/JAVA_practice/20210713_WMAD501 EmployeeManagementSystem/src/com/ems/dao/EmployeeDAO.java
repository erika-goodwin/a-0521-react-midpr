package com.ems.dao;

import com.ems.dto.Employee;
import com.ems.exceptions.EmployeeNotFoundException;
import java.net.URL;
import java.util.List;

//
//EmployeeDAO - Data Access Object
//

public interface EmployeeDAO {
    public abstract void addEmployee(Employee e);
    public abstract void deleteEmployee(int id);
    public abstract Employee findEmployee(Employee e) throws EmployeeNotFoundException;
    //datatype: Employee, Method: findEmployee()
    public List<Employee> showAllEmployees();

    public static final String URL = "jdbc:mysql://localhost:3306/employees_database";
    public static final String USERNAME = "root";
    public static final String PASSWORD = "shellvoerika6011";
    public static final String DRIVER_CLASSNAME = "com.mysql.jdbc.Driver";
}
