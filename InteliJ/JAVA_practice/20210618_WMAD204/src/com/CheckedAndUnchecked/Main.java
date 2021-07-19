package com.CheckedAndUnchecked;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {

//        int x = 5/0; //Unchecked exception

//        FileReader fr = new FileReader("file.txt");

        try {
            FileReader fr = new FileReader("file.txt");
        }catch(FileNotFoundException e){
            e.printStackTrace();
        }
    }
}
