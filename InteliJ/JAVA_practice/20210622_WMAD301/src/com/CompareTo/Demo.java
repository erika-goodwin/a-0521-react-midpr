package com.CompareTo;

public class Demo {
    public static void main(String[] args) {
        String x = "C";
        String y = "E";

        System.out.println(x.compareTo((y)));
        //compareTo only works with INTEGER

        Integer x1 = 2;
        Integer y1 = 3;

        System.out.println(x1.compareTo((y1))); // -1: Less than the other

        Integer x2 = 2;
        Integer y2 = 1;

        System.out.println(x2.compareTo((y2))); // 1: greater than the other


        Integer x3 = 2;
        Integer y3 = 2;

        System.out.println(x3.compareTo((y3))); // 0: equal to the other


        // x == y -> 0
        // x > y -> 1
        // x < y -> -1

    }
}
