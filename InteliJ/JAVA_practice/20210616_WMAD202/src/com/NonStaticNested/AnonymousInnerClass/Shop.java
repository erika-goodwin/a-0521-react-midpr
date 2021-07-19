package com.NonStaticNested.AnonymousInnerClass;

public class Shop {

    public static void main(String[] args) {
        Door door = new Door();

        if(door.getLock().isUnlocked(args[0])) {
            System.out.println("Welcome, we are open");
        }else {
            System.out.println("We are now closed.");
        }

        System.out.println(args[1]);
        System.out.println(args[2]);
    }

}
