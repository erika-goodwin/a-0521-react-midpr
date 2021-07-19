package com.StaticInner.Testrun;

public class Outer {
    public static class Inner{

        public static int x = 0;

        //    Nested Inner Class
        public static void testingInnerMethod(){    //With "Static"

            System.out.println("Testing inner class method");
        }
    }

    //Example 2
    public static void testOuterMethod(){
        System.out.println("Value of Inner x : " + Inner.x); //Inner.x can access becuase of "static"
    }

}
