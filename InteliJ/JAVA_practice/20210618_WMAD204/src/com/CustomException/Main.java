package com.CustomException;

class MyException extends Exception{ //Sub-class(Child) of the Exception
    String str1;

    MyException(String str2){
        str1 = str2;
    }

    public String toString(){
        return ("MyException Occured: " + str1);
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("Starting of try block");
            throw new MyException("This is my error message");
        }catch (MyException ex){
            System.out.println("Catch Block");
            System.out.println(ex);
        }
    }
}
