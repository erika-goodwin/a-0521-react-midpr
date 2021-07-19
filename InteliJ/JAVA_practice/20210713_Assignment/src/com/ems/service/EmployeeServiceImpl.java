package com.ems.service;

import com.ems.dao.EmployeeDAO;
import com.ems.dao.EmployeeDAOMySQLImpl;
import com.ems.dto.Employee;
import com.ems.exceptions.EmployeeNotFoundException;

import java.util.List;

public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeDAO empDAO = new EmployeeDAOMySQLImpl();


    @Override
    public void addEmployee(Employee e) {
        empDAO.addEmployee(e);

    }

    @Override
    public void deleteEmployee(int id) {
        empDAO.deleteEmployee(id);
    }

    @Override
    public Employee findEmployee(Employee e) throws EmployeeNotFoundException {
        return empDAO.findEmployee(e);
    }

    @Override
    public List<Employee> showAllEmployees() {
        return empDAO.showAllEmployees();
    }

    @Override
    public void updateEmployeeDept() {
        empDAO.updateEmployeeDept();
    }

    @Override
    public void updateEmployeeName() {
        empDAO.updateEmployeeName();
    }

    @Override
    public void updateEmployeeDays() {
        empDAO.updateEmployeeDays();
    }

    @Override
    public void updateEmployeeDaysAttended(Employee e) {

    }

    @Override
    public void updateEmployee(Employee e) {
        empDAO.updateEmployee(e);
    }


}
