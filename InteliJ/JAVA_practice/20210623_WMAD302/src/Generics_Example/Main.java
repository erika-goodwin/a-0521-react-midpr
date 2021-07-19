package Generics_Example;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        Pair<String> stringPair = new Pair<>("Hello", "World");
//        Pair<Integer> integerPair = new Pair<>(24, 55); //reused
//
//        System.out.println(stringPair);
//        System.out.println(integerPair);
//
//        //-------------------------------------
//        Pair<Person> fullName = new Pair<>(
//                new Person("Will"),
//                new Person("Iam")
//        );
//        System.out.println(fullName);
//
//        //-------------------------------------
//        Pair<String, Integer> stringIntegerPair = new Pair<>("Hi", 4);
//        System.out.println(stringIntegerPair);

        //-------------------------------------
        List<String> originalList = List.of("Hello", "World");
//        reverse(originalList);   //Method
        System.out.println("Reversed: " + reverse(originalList));
        System.out.println("Original: " + originalList);

        List<Integer> anotherList = List.of(1,2,3,4,5);
        System.out.println("Reversed: " + reverse(anotherList));
        System.out.println("Original: " + anotherList);
    }

//    public static List<String> reverse(List<String> someList){
//        List<String> reversedList = new ArrayList<>(someList);
//        Collections.reverse(reversedList);
//        return reversedList;
//    }

        // Updated ** to reuse this List reverse for anotherList
        public static <T> List<T> reverse(List<T> someList){
            List<T> reversedList = new ArrayList<>(someList);
            Collections.reverse(reversedList);
            return reversedList;
        }
    }


