package com.company;

public class SwitchCase {
    public static void main(String[] args){
        int x = 1;
        //----------IF ELSE---------
//        if(x == 1){
//            System.out.println("The value of x is 1");
//        } else if (x ==2){
//            System.out.println("The value of x is 2");
//        } else if (x == 3){
//            System.out.println("The value of x is 3");
//        } else{
//            System.out.println("The value of x is other than 1,2,3");
//        }

        //----------SWITCH------------
        switch (x){    //x: type
            case 1:
                System.out.println("The value of x is 1");
                break;
            case 2:
                System.out.println("The value of x is 2");
                break;
            case 3:
                System.out.println("The value of x is 3");
                break;
            default: // like 'else' (When non of the case is much.)
                System.out.println("The value of x is other than 1,2,3");
                break;
        }

        int y = 'a';
        switch (y){    //y: type
            case 'a':  //If there is no BREAK;, then continue
            case 'A':
                System.out.println("The value of x is a");
                break;
            case 'b':
            case 'B':
                System.out.println("The value of x is b");
                break;
            case 'c':
            case 'C':
                System.out.println("The value of x is c");
                break;
            default:
                System.out.println("The value of x is other than a,b,c");
                break;
        }

        //--------another idea for A/a--------------
//        char toConvert = Character.toLowerCase(x);
//        switch(toConvert){
//            ....
//        }
        //--------another idea--------------
//        string x = "Editor"; // string has to be "double quote"
//        switch (x.toLowerCase()){
//            case "author":
//                System.out.println("Eric");
//                break;
//            case "team":
//                System.out.println("Team E");
//                brake;
//            case "editor":
//                System.out.println("Will & Barry");
//                brake;
//            default:
//                System.out.println("Invalid Entry");
//        }

    }
}
