package com.ems.main;

import com.ems.dto.Employee;
import com.ems.service.EmployeeService;
import com.ems.service.EmployeeServiceImpl;

import java.util.List;

public class EmployeeMain {
    public static void main(String[] args) {
        EmployeeService eService = new EmployeeServiceImpl();

//        eService.addEmployee(new Employee(1111, "Michael", "Sales", 28));
//        eService.addEmployee(new Employee(2222, "Casandra", "Technology", 30));
//        eService.addEmployee(new Employee(3333, "Samuel", "Marketing", 25));
//        eService.addEmployee(new Employee(4444, "John", "Accounts", 27));

        List<Employee> employeeList = eService.showAllEmployees();

        System.out.println("     ");
        for (Employee e: employeeList){
            System.out.println(e.getId()+ " : " +e.getName()+ " : " +e.getDept()+ " : " + e.getDaysAttended());
        }
        System.out.println("     ");

//        eService.deleteEmployee(1111);

        System.out.println("++++++++++HOMEWORK++++++++++++");
        eService.updateEmployeeDept();
        eService.updateEmployeeName();
        eService.updateEmployeeDays();

//        eService.updateEmployeeDaysAttended(25, 200);

        //ANSWER=============================================================
        eService.updateEmployee(new Employee(2222,"Romeo","Legal",28));

        try{
            Employee temp = eService.findEmployee(new Employee(2222, "Romeo", "Legal", 28));
            System.out.println(temp.getId() + " : " + temp.getName());
        }catch(Exception e){
            e.printStackTrace();
        }

    }


}
