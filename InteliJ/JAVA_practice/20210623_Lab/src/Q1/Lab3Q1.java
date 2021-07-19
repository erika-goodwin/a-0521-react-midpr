package Q1;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Lab3Q1 {
//    //My Attempt
//        public static void main(String[] args) {
//            List<Integer> ArrayQ1 = new ArrayList<>();
//            ArrayQ1.add(30);
//            ArrayQ1.add(7);
//            ArrayQ1.add(12);
//            ArrayQ1.add(34);
//            ArrayQ1.add(8);
//            ArrayQ1.add(20);
//            ArrayQ1.add(1);
//            ArrayQ1.add(45);
//            ArrayQ1.add(32);
//            ArrayQ1.add(18);
//
//            System.out.println(ArrayQ1); //[30, 7, 12, 34, 8, 20, 1, 45, 32, 18]
//
//            boolean ans = ArrayQ1.contains(4);
//
//            if (ans){
//                System.out.println("the number is in the list");
//            } else {
//                System.out.println("the number is not in the list");
//            }
//        }

    //Francois
    public static void main(String[] args) {
        Random rand = new Random();
        Scanner input = new Scanner(System.in);

        ArrayList<Integer> randomNumList = new ArrayList<>();

        for (int i = 0; i<10; i++){
//            int randomNum = (rand.nextInt((max - min) + 1)) + 1;
            int randomNum = (rand.nextInt((50 - 1) + 1)) + 1;
            randomNumList.add(randomNum);
        }
//        System.out.println(randomNumList);

        //-------------------------
//        System.out.println("Please enter an integer between 1 to 50");
//        Integer x = input.nextInt();
//
//        if(randomNumList.contains(x)){
//            System.out.println(x + "is in the ArrayList");
//        } else {
//            System.out.println(x + "is NOT in the ArrayList");
//        }
//        input.close();


        //-------------------------
        while(true){
            System.out.println("Please enter an integer between 1 to 50");
            Integer x = input.nextInt();

            if(randomNumList.contains(x)){
                System.out.println(x + "is in the ArrayList");
                input.close();
                break;
            } else {
                System.out.println(x + "is NOT in the ArrayList");
            }

        }

    }


    }
