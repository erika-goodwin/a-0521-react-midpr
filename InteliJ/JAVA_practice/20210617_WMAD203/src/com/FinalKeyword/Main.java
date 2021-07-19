package com.FinalKeyword;

import com.FinalKeyword.TestRun.Child;

public class Main {
    public static void main(String[] args) {
        Child child = new Child();  //cannot assign number cuz it is FINAL
        System.out.println(child.getX()); //-> 5
    }
}
