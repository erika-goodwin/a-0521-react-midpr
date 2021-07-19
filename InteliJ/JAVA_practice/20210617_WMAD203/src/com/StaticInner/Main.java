package com.StaticInner;

import com.StaticInner.Testrun.Outer;

public class Main {
    public static void main(String[] args) {
        Outer.Inner.testingInnerMethod(); //CAN access because of Inner Class With "Static"
        Outer.testOuterMethod();
    }
}
