package com.compositionExample;

public class Person {
    private Job job; //Private 'Datatype' 'Variable'

    public Person(){
        this.job = new Job();
        job.setSalary(1000L);
    }

    public long getSalary(){
        return job.getSalary();
    }
}
