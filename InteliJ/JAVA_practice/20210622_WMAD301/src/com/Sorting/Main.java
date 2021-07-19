package com.Sorting;

import java.util.*;

public class Main {
    public static void main(String[] args) {

        List<String> countries = new LinkedList<>();
        countries.add("Romania");
        countries.add("USA");
        countries.add("Poland");
        countries.add("Egypt");
        countries.add("Russia");
        new Main().printList(countries);

//        countries.sort(null);
//        new Main().printList(countries);

        Collections.reverse(countries);
        new Main().printList(countries);

    }

    private void printList(List<String> list) {
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()){ //iterator.hasNext() return boolean
            System.out.println("Element: " + iterator.next());
        }
        System.out.println("*****************");
    }
}
