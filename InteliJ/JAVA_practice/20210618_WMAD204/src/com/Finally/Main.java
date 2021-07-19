package com.Finally;

public class Main {
    public static void main(String[] args) {
//        try {
//            int data = 25/0;
//            System.out.println(data);
//        }catch (NullPointerException e){  //NullPointerException: When there is no assignment for variable
//            System.out.println(e);
//        }catch (Exception e){
//            System.out.println("Some exception");
//        }finally{
//            System.out.println("Finally block is always executed");
//        }
        try {
            int data = 25/0;
            System.out.println(data);
        }catch (ArithmeticException e){
            System.out.println(e);
        }finally{
            System.out.println("Finally block is always executed");
        }

        System.out.println("rest of the code ...");
    }
}
