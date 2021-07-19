package com.AccessModifiers;

public class TestA {
    public void methodPublic(){
        methodPrivate(); //Can access to PRIVATE method
    }
    protected void methodProtected(){
        methodPrivate(); //Can access to PRIVATE method
    }

    void methodDefault(){
        methodPrivate(); //Can access to PRIVATE method
    }

    private void methodPrivate(){} //Accessible to all other parts of the same class
}
