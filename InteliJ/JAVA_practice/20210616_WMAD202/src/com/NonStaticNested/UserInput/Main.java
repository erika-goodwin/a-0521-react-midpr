package com.NonStaticNested.UserInput;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        System.out.println("What's your name?");
//        Scanner sc = new Scanner(System.in);
//        String name = sc.nextLine();
//        System.out.println("Hey there, " + name);
//        sc.close();

        System.out.println("What's your age?");
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        System.out.println("Your age is : " + age);
        sc.close();
    }
}

