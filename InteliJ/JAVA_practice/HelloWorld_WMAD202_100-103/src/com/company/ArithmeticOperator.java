
package com.company;

    public class ArithmeticOperator {

        public static void main(String[] args) {

            // --------------------------------

            int i = 2 + 1;
            System.out.println(i); //3

            // this isn't an arithmetic operation
            String s = "Hello" + "World";
            System.out.println(s); //HelloWorld

            int z = 12 + 1;
            z = 12 - 1;
            z = 12 * 2;
            z = 12 / 2;
            System.out.println(z); //6

            int mod = 13 % 2;
            System.out.println(mod); //1

            int x = 10;
            System.out.println(x++); //10 // post fix to x
            System.out.println(x); //11

            int incrementPrefix = 15;
            System.out.println(++incrementPrefix); //16 = 15 + 1  //valuated

            int decrement = 5;
            System.out.println(--decrement); //4

            // --------------------------------

        }
    }

