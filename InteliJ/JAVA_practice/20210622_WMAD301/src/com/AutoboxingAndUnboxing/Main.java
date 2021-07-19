package com.AutoboxingAndUnboxing;

import java.util.ArrayList;
import java.util.StringJoiner;

class intWrapper{
    public int intValue;
    //Constructor
    public intWrapper(int intValue) {
        this.intValue = intValue;
    }
    //Getter
    public int getIntValue() {
        return intValue;
    }
    //Setter
    public void setIntValue(int intValue) {
        this.intValue = intValue;
    }
}

public class Main {
    public static void main(String[] args) {
//        ArrayList<Integer> studentNumbers = new ArrayList<>();
//        studentNumbers.add(25); //autoboxing
//        System.out.println(studentNumbers.get(0)); //unboxing

        ArrayList<intWrapper> studentNumbers = new ArrayList<>();
        studentNumbers.add(new intWrapper(25)); //boxing
        System.out.println(studentNumbers.get(0)); //unboxing //com.AutoboxingAndUnboxing.intWrapper@4617c264
        System.out.println(studentNumbers.get(0).getIntValue()); //25 <- unboxing with custom wrapper
        System.out.println(studentNumbers); //[com.AutoboxingAndUnboxing.intWrapper@4617c264]

        ArrayList<Double> demoList = new ArrayList<>();
        demoList.add(25.5);
        demoList.add(new Double(25.2)); //This is done while autoboxing
        System.out.println(demoList.get(1));
        System.out.println(demoList.get(1).doubleValue()); //This is done while unboxing
    }
}
