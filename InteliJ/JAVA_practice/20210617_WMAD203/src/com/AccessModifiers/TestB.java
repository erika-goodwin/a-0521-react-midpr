package com.AccessModifiers;

public class TestB {

    public static void main(String[] args) {

        new TestA().methodPublic();
        new TestA().methodProtected();
        new TestA().methodDefault();
//        new TestA().methodPrivate(); //CANNOT SEE FROM TESTB

    }
    public void methodPublic(){
        methodPrivate(); //Can access to PRIVATE method
    }
    protected void methodProtected(){
        methodPrivate(); //Can access to PRIVATE method
    }

    void methodDefault(){
        methodPrivate(); //Can access to PRIVATE method
    }

    private void methodPrivate(){}
}
