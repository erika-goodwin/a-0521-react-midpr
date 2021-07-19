package com.ems.main;

import com.ems.business.ContractEmployeeSalaryCaluculator;
import com.ems.business.PermanentEmployeeSalaryCalculator;
import com.ems.dto.Employee;

public class EmployeeSalaryMain {
    public static void main(String[] args) {
        PermanentEmployeeSalaryCalculator pe = new PermanentEmployeeSalaryCalculator();
        pe.calculateNetSalary(new Employee(1234, "Peter", "HR", 30), 9000);

        System.out.println("\n *********************************");

        ContractEmployeeSalaryCaluculator ce = new ContractEmployeeSalaryCaluculator();
        ce.calculateNetSalary(new Employee(4321, "Beth", "Reception", 30), 3000);


    }
}
