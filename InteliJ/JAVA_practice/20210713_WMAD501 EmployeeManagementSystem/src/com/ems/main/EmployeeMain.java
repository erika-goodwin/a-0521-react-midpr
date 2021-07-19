package com.ems.main;

import com.ems.dto.Employee;
import com.ems.service.EmployeeService;
import com.ems.service.EmployeeServiceImpl;

import java.util.List;

public class EmployeeMain {
    public static void main(String[] args) {
        EmployeeService eService = new EmployeeServiceImpl();
        eService.addEmployee(new Employee(1111, "Michael", "Sales", 28));
        eService.addEmployee(new Employee(2222, "Casandra", "Technology", 30));
        eService.addEmployee(new Employee(3333, "Samuel", "Marketing", 25));
        eService.addEmployee(new Employee(4444, "John", "Accounts", 27));

        List<Employee> employeeList = eService.showAllEmployees();

        System.out.println("     ");
        for (Employee e: employeeList){
            System.out.println(e.getId()+ " : " +e.getName()+ " : " +e.getDept()+ " : " + e.getDaysAttended());
        }
        System.out.println("     ");

        eService.deleteEmployee(1111);

    }


}
