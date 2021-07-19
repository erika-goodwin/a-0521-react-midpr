package com.company;

public class NestedLoop {
    public static void main(String[] args){
//        for(int i = 1; i <= 10; i++){
//
//            for(int j = 1; j <= 10; j++){
//                System.out.println("Value of i: "+ i +" and value of j: " + j);
//            }
//            System.out.println("--------------------------------");
//        }
        int x = 1;
        while(x < 100){
            x *= 2;
        }
        System.out.println(x);
    }
}
