package com.compositionExample;

public class Job {
    private String role;
    private long salary;
    private int id;

    //Setter
    public void setRole(String role) {
        this.role = role;
    }
    public void setSalary(long salary) {
        this.salary = salary;
    }
    public void setId(int id) {
        this.id = id;
    }

    //Getter
    public String getRole() {
        return role;
    }
    public long getSalary() {
        return salary;
    }
    public int getId() {
        return id;
    }
}
