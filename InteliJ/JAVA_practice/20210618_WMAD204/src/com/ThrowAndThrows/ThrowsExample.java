package com.ThrowAndThrows;

public class ThrowsExample {
    public static void main(String[] args) {
        try{
            System.out.println(division(15,0));
        }catch(ArithmeticException e){
            System.out.println("You shouldn't devide number by zero");
        }
    }

    public static int division(int x, int y) throws ArithmeticException{
        int result = x/y;
        return result;
    }
}
