package com.LinkedList;

import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {

        LinkedList<Integer> list = new LinkedList<>();
        list.add(2);
        list.add(4);
        list.add(6);
        list.add(10);
        System.out.println(list);
        list.add(1,99);
        System.out.println(list);
        list.remove(1);
        System.out.println(list);
    }
}
