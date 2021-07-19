package com.StaticExample;

public class Main {
    public static void main(String[] args) {

        //Access to the method of another class
        TestStatic obj1 = new TestStatic();
        System.out.println("obj1:" + obj1.staticVariable);
        obj1.getStaticVariable(1);
        System.out.println("obj1:" +obj1.staticVariable);

        TestStatic obj2 = new TestStatic();
        System.out.println("obj2:" + obj2.staticVariable);
        obj1.getStaticVariable(24);
        System.out.println("obj2:" +obj2.staticVariable);
    }

}
