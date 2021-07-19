package com.company;

public class MethodOverloading {  //allow us to have the same class name

    public static double area(int width, int length, double z) {
        System.out.println("area with 2 entities and 1 double entity");
        return length * width;
    }

    public static double area(int length, int width, int z) { // java: method area(int,int,int) is already defined in class com.company.MethodOverloading
        // ↑ the inside of the parameters have to different when you use the same name
        System.out.println("area with 3 entities");
        return length * width;
    }
    public static double area ( double length, double width){
        return length * width;
    }
    public static void main (String[] args){
//        System.out.println("Area od rectangle: " + area(5.25, 10.6));
        System.out.println("Area od rectangle: " + area(5, 10, 20));
    }
}
