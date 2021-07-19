package com.Method_callByValue;

public class CallByReference {
    public static void main(String[] args) {
        String[] namesArray = {"Charlie", "John", "Patrick", "Mike"};
        CallByReference cbr = new CallByReference();
        cbr.displayName(namesArray);
        System.out.println("****************");
        System.out.println(namesArray[0]);
    }
    void displayName(String[] names){
        for (String name: names
             ) {
            System.out.println(name);
        }
        names[0]="Elen";
    }
}
