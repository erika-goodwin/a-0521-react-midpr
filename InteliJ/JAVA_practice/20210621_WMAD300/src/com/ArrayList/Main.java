package com.ArrayList;

import java.util.ArrayList;
import java.util.List;

public class Main {
    static ArrayList<String> listNames = new ArrayList<>();

    public static void main(String[] args) {

        listNames.add("Charlie");
        listNames.add("John");
        listNames.add("Steve");
        listNames.add("Patrick");
        listNames.add("Sam");

        Main app = new Main();
        app.displayList(listNames);

//        app.removeNameByPosition((0));
//        app.displayList(listNames);

        app.removeNameByString("Patrick");
        app.displayList(listNames);
        System.out.println(listNames.get(3));
    }

    void displayList(ArrayList<String> names){  //Type: ArrayList, Variable: names
        for(String name: names){
            System.out.println(name);
        }
        System.out.println("***************************");
    }

    void removeNameByPosition(int position){
        listNames.remove(position);
    }

    void removeNameByString(String name){
        listNames.remove(name);
    }


}
