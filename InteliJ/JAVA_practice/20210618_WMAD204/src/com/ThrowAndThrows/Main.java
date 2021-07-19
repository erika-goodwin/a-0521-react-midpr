package com.ThrowAndThrows;

public class Main {
    public static void main(String[] args)  { //throws ArithmeticException
//        throw new ArithmeticException("Some arithmetic error");
//        System.out.println(10/0);
        Main methodCall = new Main();
        methodCall.myMethod();


    }

    void myMethod() throws ArithmeticException,NullPointerException{ //Multiple exception
//        throw new ArithmeticException("Some Arithmetic Error");
        try{
            throw new ArithmeticException("Some Arithmetic Error"); //only one exception
            //Throw: it has to go somewhere
        }catch(Exception e){
            System.out.println("Error: " + e.getMessage());
        }
    }
}
