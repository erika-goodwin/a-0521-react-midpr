package Q2;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Lav3Q2 {
//    //My Attempt
//    public static void main(String[] args) {
//        List<Integer> ArrayQ2 = new ArrayList<>();
//        ArrayQ2.add(30);
//        ArrayQ2.add(7);
//        ArrayQ2.add(12);
//        ArrayQ2.add(34);
//        ArrayQ2.add(8);
//        ArrayQ2.add(20);
//        ArrayQ2.add(1);
//        ArrayQ2.add(45);
//        ArrayQ2.add(32);
//        ArrayQ2.add(18);
//        System.out.println("Original ArrayQ2: " + ArrayQ2);
//
//        List<Integer> CopiedArray = new ArrayList<>();
//        for (int number: ArrayQ2
//             ) {
//            CopiedArray.add(number);
//        }
//
//        ArrayQ2.set(0,-5);
//
//        System.out.println("ArrayQ2: " + ArrayQ2);
//        System.out.println("CopiedArray: " + CopiedArray);
//
//
//    }


    //Francois
    public static void main(String[] args) {
        Random rand = new Random();
        ArrayList<Integer> randomNumList = new ArrayList<>();

        for (int i = 0; i<10; i++){
//            int randomNum = (rand.nextInt((max - min) + 1)) + 1;
            int randomNum = (rand.nextInt((50 - 1) + 1)) + 1;
            randomNumList.add(randomNum);
        }

        ArrayList<Integer> copyList =  new ArrayList<>();
        copyList.addAll(randomNumList);

        System.out.println("-----------Before Set-------------");
        System.out.println(randomNumList);
        System.out.println(copyList);

        randomNumList.set(randomNumList.size() -1, -5);

        System.out.println("-----------After Set-------------");
        System.out.println(randomNumList);
        System.out.println(copyList);

    }

}
