package com.NonStaticNested.LocalInnerClass;

public class Shop {
    public static void main(String[] args) {
        Door door = new Door();
        System.out.println(door.isLocked("test"));
    }
}
