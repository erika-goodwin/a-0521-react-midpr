package com.AccessModifiers.Child;

import com.AccessModifiers.TestB;

public class TestC {
    public static void main(String[] args) {
        new TestB().methodPublic();
//        new TestB().methodProtected();//CANNOT SEE FROM TESTC
//        new TestB().methodDefault()//CANNOT SEE FROM TESTC
//        new TestB().methodPrivate();//CANNOT SEE FROM TESTC

    }
}
