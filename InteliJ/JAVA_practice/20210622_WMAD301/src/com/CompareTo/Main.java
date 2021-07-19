package com.CompareTo;

import java.util.*;


class Names implements Comparable<Names> {

    public String name;

    public Names(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Names obj){
        if(name.length() == obj.name.length()){
            return 0;
        } else if(name.length() > obj.name.length()){
            return 1;
        } else{
            return -1;
        }
    }

    @Override
    public String toString(){
        return name;
    }
}

public class Main {

    public static void main(String[] args) {

        List names = new LinkedList<>();
        names.add(new Names("Chris"));
        names.add(new Names("Ed"));
        names.add(new Names("John"));
        names.add(new Names("Mia"));

        new Main().printList(names);

//        Collections.sort(names);
        names.sort(null);
        new Main().printList(names);

    }

    void printList(List<Names> list){
        Iterator<Names> iterator = list.iterator();
        while(iterator.hasNext()){
            System.out.println("Element : " + iterator.next());
        }
        System.out.println("*****************");
    }
}