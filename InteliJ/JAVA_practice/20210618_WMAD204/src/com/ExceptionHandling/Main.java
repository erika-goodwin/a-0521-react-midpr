package com.ExceptionHandling;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main {
    public static void main(String[] args) {
        case1(10,0);
        case2(10,0);

    }

    public static void case1(int x, int y){
        if (y != 0){
            System.out.println(x/y);
        }else{
            System.out.println("The value of y is 0");
        }
    }

    public static void case2 (int x, int y){
        try{
            System.out.println(x/y); //Without TryCatch: this has "ArithmeticException Error"
        }catch(ArithmeticException e){
            System.out.println("The value of y is 0");
        }catch(Exception e){  //exception: super class
            System.out.println("Exception: The value of y is 0");
        }
    }




//    public static void main(String[] args) {
//        someMethod();
//    }
//    public static void someMethod(){
//        try {
//            FileReader fr = new FileReader("sometext.txt");
//        } catch (FileNotFoundException e) {
//            e.printStackTrace();
//            System.out.println("Some error occured");
//        }
//        System.out.println("Message from someMethod");
//    }
}
