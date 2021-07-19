package com.Method_callByValue;

public class CallByValue {
    public static void main(String[] args) {
        int value = 10;
        System.out.println("Current value of var in main method is : " + value); //10
        CallByValue cbv = new CallByValue();
        cbv.displayValue(value);
    }
    void displayValue(int value){ //displayValue won't touch the value of main
        System.out.println("Current value of var in displayValue method is : " + value);//10
        value = 20;
        System.out.println("Current value of var in displayValue method is : " + value);//20
    }

}
