package com.company;

public class WhileLoop {
    public static void main(String[] args){
        int i = 1;
        while (i <= 10){
            System.out.println(i);
            i++; //DO NOT FORGET THIS otherwise -> infinite loop
        }
        while (true){
            System.out.println("XXXXXXX");
            break; // One excute -> finish
        }
    }
}
