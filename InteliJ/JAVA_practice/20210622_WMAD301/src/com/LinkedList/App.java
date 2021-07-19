package com.LinkedList;

import java.util.LinkedList;
import java.util.Stack;

public class App {
    public static void main(String[] args) {

        LinkedList<String> countries = new LinkedList<>();
        countries.add("Romania");
        countries.add("USA");
        countries.add("Poland");
        countries.add("Egypt");
        countries.add("Russia");
//        System.out.println(countries);

        new App().printList(countries);
        countries.add(1,"Canada");
        countries.add("Bragil");
        new App().printList(countries);
        countries.set(6, "Brazil");
        new App().printList(countries);
        countries.remove(); //default index 0
        new App().printList(countries);
    }

    private void printList(LinkedList<String> list) {
        for (String element: list
             ) {
            System.out.println("Element: " + element);
        }
        System.out.println("*****************");
    }
}
