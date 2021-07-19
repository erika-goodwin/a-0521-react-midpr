package com.ListInterface;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        LinkedList<String> countries = new LinkedList<>();
        countries.add("Romania");
        countries.add("USA");
        countries.add("Poland");
        countries.add("Egypt");
        countries.add("Russia");
        new Main().printList(countries);

        ArrayList<String> demo = new ArrayList<>();
        demo.add("One");
        demo.add("Two");
        demo.add("Three");
        new Main().printList(demo);
    }

//    private void printList(**List**<String> list) {
    private void printList(List<String> list) { //Deta-type has no error
        for (String element: list
        ) {
            System.out.println("Element: " + element);
        }
        System.out.println("*****************");
    }

}
