package com.Interators;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<String> countries = new LinkedList<>();
        countries.add("Romania");
        countries.add("USA");
        countries.add("Poland");
        countries.add("Egypt");
        countries.add("Russia");
        new Main().printList(countries);

    }

    private void printList(List<String> list) {
//        for (String element: list
//        ) {
//            System.out.println("Element: " + element);
//        }
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()){ //iterator.hasNext() return boolean
            System.out.println("Element: " + iterator.next());
        }
        System.out.println("*****************");
    }
}
