package com.EncapsulationExample;

public class Main {

    public static void main(String[] args) {

        Person john = new Person(); //Access to the Person (John)
        //Setting the values
        john.setName("John");
        john.setAge(-30);
        john.setGender("Male");

        System.out.println(john.getName());
        System.out.println(john.getAge());
        System.out.println(john.getGender());
    }

}
