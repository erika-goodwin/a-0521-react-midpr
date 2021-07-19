package com.Enum;

public class Main {
//    public static final int COLLECTIONS = 1;
//    public static final int COREJAVA = 2;
//    public static final int GENERICS = 3;
//    public static final int JSPANDSERLETS = 4;
//    public static final int MULTITHREADING = 5;

    public static void main(String[] args) {

//        int learn = 4;
        Demo learn = Demo.COLLECTIONS;

        switch(learn){
            case COLLECTIONS:
                System.out.println("Step1: Learning Collectioins Framework");
                break;
            case COREJAVA:
                System.out.println("Step1: Learning Core java");
                break;
            case GENERICS:
                System.out.println("Step1: Learning Generics");
                break;
            case JSPANDSERLETS:
                System.out.println("Step1: Learning JSP and Serclets");
                break;
            case MULTITHREADING:
                System.out.println("Step1: Learning Multithreading");
                break;
            default:
                System.out.println("Element not in the enumerated list");
                break;
        }
    }
}
