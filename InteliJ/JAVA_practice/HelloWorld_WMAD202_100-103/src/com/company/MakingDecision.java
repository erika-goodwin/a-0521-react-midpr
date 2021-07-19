package com.company;

public class MakingDecision {
    public static void main(String[] args){

//        int x = 5;
//        if (5 == 5){
//            System.out.println("Value of x is 5");
//        }else {
//            System.out.println("Value of x is not 5");
//        }
//
//        if (x < 5){
//            System.out.println("True");
//        }else {
//            System.out.println("False");
//        }

        boolean x = true;
        boolean y = false;
        //Truthy or Falsy
        if (x && y){
            System.out.println("Condition is TRUE");
        } else {
            System.out.println("Condition is FALSE");
        } //Condition is FALSE

        boolean m = true;
        boolean n = false;
        if (m || n){
            System.out.println("Condition is TRUE");
        } else {
            System.out.println("Condition is FALSE");
        } //Condition is TRUE

        int ageOfBoy = 21;
        int ageOfGirl = 18;
        if ((ageOfBoy >= 21) && (ageOfGirl >= 18)){
            System.out.println("Ready to get married");
        } else {
            System.out.println("Wait for it ...");
        } //Ready to get married



    }
}
