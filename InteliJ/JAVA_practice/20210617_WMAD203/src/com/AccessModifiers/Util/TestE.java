package com.AccessModifiers.Util;

import com.AccessModifiers.TestB;

public class TestE extends TestB {
    public static void main(String[] args) {
        new TestB().methodPublic();
//        new TestB().methodProtected(); //Why error?
        // ↑　Direct Access

        //accessing super class protected method using subclass
        new TestE().methodProtected();
    }
}
