package com.ems.dto;

//Employee - Data Transfer Object

public class Employee {
    private int id;
    private String name;
    private String dept;
    private int daysAttended;

    //Constructor
    public Employee(int id, String name, String dapt, int daysAttended) {
        this.id = id;
        this.name = name;
        this.dept = dapt;
        this.daysAttended = daysAttended;
    }

    //Manual Constructor
    public Employee() {
        super();
    }

    //Getter
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDept() {
        return dept;
    }

    public int getDaysAttended() {
        return daysAttended;
    }

    //Setter
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setDaysAttended(int daysAttended) {
        this.daysAttended = daysAttended;
    }


    public void setDept(String dept) {
        this.dept = dept;
    }
}


