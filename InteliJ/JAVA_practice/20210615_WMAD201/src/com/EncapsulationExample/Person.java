package com.EncapsulationExample;

public class Person {
    private String name; //= "John";  //public -> "private" : implementing the Encapsulation
    private int age; //= 25;
    private String gender; //= "Male";

    //Getter
    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
    public String getGender() {
        return gender;
    }

    //Setter
    public void setName(String name) {
        this.name = name;
    }
//    public void setAge(int age) {
//        this.age = age;
//    }
public boolean setAge(int age) {
        if(age >= 0 && age <= 100){
            this.age = age;
            return true;
        }
        return false; //Not using "ELSE" cause if the condition didnt meet with IF, it will be okay
}
    public void setGender(String gender) {
        this.gender = gender;
    }

}
