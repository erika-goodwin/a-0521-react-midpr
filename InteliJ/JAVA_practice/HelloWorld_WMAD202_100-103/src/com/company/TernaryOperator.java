package com.company;

public class TernaryOperator {
    public static void main(String[] args){
        int x = 10;
        boolean y;

        y = (10 == x) ? true : false;
        System.out.println(y);

        int ageOfBoy = 21;
        int ageOfGirl = 18;
        boolean result;
        result = ((ageOfBoy >= 21) && (ageOfGirl >= 18)) ? true: false ;
        System.out.println(result);

    }
}
