package com.TestStatic.Return;

public class TestStatic {
    private static int staticVariable = 0; //added static (1)
    //Getter
    public static void setStaticVariable(int staticVariable) { //Added static (2) Otherwise you get error
        TestStatic.staticVariable = staticVariable; //changed this. -> TestStatic.(3)
    }
    //Setter
    public int getStaticVariable() {
        return staticVariable;
    }
}
