package GenericsIntro;

import java.util.ArrayList;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> words = new ArrayList<>(); //Added <String> Generics
        words.add("Hello");
        words.add("World");
//        words.add(10); //Error: We are not to allow to integer

        String item1 =  words.get(0); //Removed TypeCasting (String)
        String item2 =  words.get(1); //Removed TypeCasting (String)

        System.out.println(item1);
        System.out.println(item2);

 //---------------------------------------------------------------

        LinkedList<Integer> numbers = new LinkedList<>();
        numbers.add(100);
        numbers.add(45);
        numbers.add(23);

        for (Integer number: numbers
        ) {
            System.out.println(number);
        }
    }
}
