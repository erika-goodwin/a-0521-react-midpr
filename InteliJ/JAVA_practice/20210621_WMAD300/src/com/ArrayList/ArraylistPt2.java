package com.ArrayList;

import java.util.ArrayList;

public class ArraylistPt2 {
    static ArrayList<String> listNames = new ArrayList<>();

    public static void main(String[] args) {

        listNames.add("Charlie");
        listNames.add("John");
        listNames.add("Steve");
        listNames.add("Patrick");
        listNames.add("Sam");

        ArraylistPt2 app = new ArraylistPt2();
        app.displayList(listNames);

//        app.modifyName(3,"Emma");
//        app.displayList(listNames);

        int position = app.search("Patrick");
        app.modifyName(3,"Emma");
        System.out.println(position);
    }

    void displayList(ArrayList<String> names){  //Type: ArrayList, Variable: names
        for(String name: names){
            System.out.println(name);
        }
        System.out.println("***************************");
    }

    void modifyName(int position, String newName){
        listNames.set(position, newName);
    }

    int search(String name){
        return listNames.indexOf(name);
    }

}
