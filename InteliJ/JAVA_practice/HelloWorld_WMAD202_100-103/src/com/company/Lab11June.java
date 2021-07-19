package com.company;

//Q1 ------------------------------------------------------
//Write a Java program with a method named 'totalSum' that
// takes in an argument of two integers and return its sum.
// Call this method from main( ) and print the results.
//public class Lab11June {
//    public static void totalSum(int x, int y) {
//        if (x == y) {
//            System.out.println("X: " + x + " AND Y: " + y);
//        } else {
//            System.out.println("NOT SAME X =/ Y");
//        }
//
//    }
//    public static void main(String[] args) {
//        totalSum(3,3);
//        }
//    }


//Q2 ------------------------------------------------------
//Write a Java program with a method named 'getGrades' that
//will display grades according to the marks entered into the method call as below:
//        Marks        Grade
//        91-100         A+
//        81-90          A-
//        71-80          B+
//        61-70          B-
//        51-60          C+
//        41-50          D-
//        <=40          Fail
//public class Lab11June {
//
//    public static void getGrades(int grade){
//        if (grade >= 91 && grade <= 100){
//            System.out.println("GRADE: A+");
//        } else if(grade >= 81 && grade <= 90){
//            System.out.println("GRADE: A-");
//        } else if(grade >= 71 && grade <= 80){
//            System.out.println("GRADE: B+");
//        }else if(grade >= 61 && grade <= 70){
//            System.out.println("GRADE: B-");
//        }else if(grade >= 51 && grade <= 60){
//            System.out.println("GRADE: C+");
//        }else if(grade >= 41 && grade <= 50){
//            System.out.println("GRADE: D-");
//        } else{
//            System.out.println("FAIL");
//        }
//    }
//    public static void main(String[] args) {
//        getGrades(80);
//    }
//}



//Q3 ------------------------------------------------------
//Write a program to print the factorial of a number
// by defining a method named 'factorial'. Factorial of
// any number n is represented by n! and is equal to 1*2*3*....
//4! = 1*2*3*4 = 24
//3! = 3*2*1 = 6
//2! = 2*1 = 2
//Also,
//1! = 1
//0! = 0

//public class Lab11June {
//    public static void factorial(int x) {
//        for (int i = x; i > 1; i--) {
//            x = x * (i-1);
//        }
//        System.out.println(x);
//    }
//
//    public static void main(String[] args) {
//        factorial(4);
//    }
//}


//Q4 ------------------------------------------------------
//Write a Java method to create the area of a pentagon.
// S = 5/2 × s × a.

public class Lab11June {

    public static void areaOfPentagon(int sideLength) {
//        int apothemLength = (int)  ((sideLength/2) / (Math.tan(Math.PI/5)));
//        System.out.println(10*(0.5*sideLength*apothemLength));
        System.out.println((5*sideLength*sideLength)/(4*(Math.tan(Math.PI/5))));
    }
    public static void main(String[] args) {
        areaOfPentagon(5);
    }
}
