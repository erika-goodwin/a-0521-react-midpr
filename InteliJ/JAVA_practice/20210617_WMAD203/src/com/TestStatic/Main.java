package com.TestStatic;

import com.TestStatic.Return.TestStatic;

public class Main {
    public static void main(String[] args) {

        //Access to the another class : Instantiation
        TestStatic obj1 = new TestStatic();
        System.out.println("Obj1: "+ obj1.getStaticVariable()); //Obj1: 0
        TestStatic.setStaticVariable(1);
        System.out.println("Obj1: "+obj1.getStaticVariable()); //Obj1: 1

        //Second Object -> Different memory reference -> two different entities
        TestStatic obj2 = new TestStatic();
        System.out.println("Obj2: "+ obj2.getStaticVariable()); //Obj2: 0
        TestStatic.setStaticVariable(24);//obj1.setStaticVariable(24) -> TestStatic.setStaticVariable(24)
        System.out.println("Obj2: "+obj2.getStaticVariable()); //Obj2: 24

        TestStatic obj3 = new TestStatic();
        System.out.println("Obj3: "+ obj3.getStaticVariable()); //Obj2: 0
    }
}
