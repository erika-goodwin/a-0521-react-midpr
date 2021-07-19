package com.ForEach;

public class Main {
    public static void main(String[] args) {
        String[] strungArray = {"Charlie", "John", "Patrick", "Mike"};
//        System.out.println(strungArray[0]); // -> Charlie
//        System.out.println(strungArray[1]); // -> John
//        System.out.println(strungArray[2]); // -> Patrick

        //How to access to the array?
//        for(int i=0; i<=3; i++){
//            System.out.println(strungArray[i]);
//        }
        //↓ Try something More dynamic
        for (String name:strungArray) {
            System.out.println(name);
        }

    }
}
