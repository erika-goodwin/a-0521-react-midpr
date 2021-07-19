package Set;

import java.util.*;

public class Main {
    public static void main(String[] args) {
//        part1(); //primitive values
//        part2(); //objects in hashset
        part3();
    }

    public static void part1(){
        HashSet<Integer> hsList = new HashSet<>();
        hsList.add(12);
        hsList.add(42);
        hsList.add(17);
        hsList.add(55);
        hsList.add(80);
        hsList.add(42);
        hsList.add(12);

        System.out.println("---------HashSet----------");
        for (Integer value: hsList
             ) {
            System.out.println(value);
        }





        ArrayList<Integer> arrList = new ArrayList<>();
        arrList.add(12);
        arrList.add(42);
        arrList.add(17);
        arrList.add(55);
        arrList.add(80);
        arrList.add(42);
        arrList.add(12);

        System.out.println("---------ArrayList----------");
        for (Integer value: arrList
        ) {
            System.out.println(value);
        }





        LinkedHashSet<Integer> lhsList = new LinkedHashSet<>();
        lhsList.add(12);
        lhsList.add(42);
        lhsList.add(17);
        lhsList.add(55);
        lhsList.add(80);
        lhsList.add(42);
        lhsList.add(12);

        System.out.println("---------LinkedHashSet----------");
        for (Integer value: lhsList
        ) {
            System.out.println(value);
        }
    }
    public static void part2() {
        HashSet<Animal> animals = new HashSet<>();

        Animal animal1 = new Animal("Dog", 12);
        Animal animal2 = new Animal("Cat", 8);
        Animal animal3 = new Animal("Bird", 2);
        Animal animal4 = new Animal("Dog", 1);
        Animal animal5 = new Animal("Kangaroo", 24);

        animals.add(animal1);
        animals.add(animal2);
        animals.add(animal3);
        animals.add(animal4);
        animals.add(animal5);

        System.out.println(animal1.equals(animal4)); //false

        System.out.println("-----HashSet-------");
        for (Animal value : animals
        ) {
            System.out.println("Element: " + value);
        }

        System.out.println(animal1.hashCode()); //hash-code: 2055281021
        System.out.println(animal4.hashCode()); //hash-code: 1159190947
    }


    public static void part3(){
        HashMap<String, String> dictionary = new HashMap<>();
        dictionary.put("word1", "This is some definition for word1"); //.put is like .add for Array
        dictionary.put("word2", "This is some definition for word2"); //("Key", "Difinition")
        dictionary.put("word3", "This is some definition for word3");
        dictionary.put("word4", "This is some definition for word4");
        dictionary.put("word5", "This is some definition for word5");

        //WE cannot print the dictionary this way
//        for (String word:dictionary
//             ) {
//        }

//        for(String word: dictionary.keySet()){
//            System.out.println(word);
//            System.out.println(dictionary.get(word));
//        }

        for (Map.Entry<String,String> entry: dictionary.entrySet()
             ) {
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
        }

        System.out.println("************************");

        TreeMap<String, String> dictionalySorted = new TreeMap<>();
        dictionalySorted.put("word1", "This is some definition for word1");
        dictionalySorted.put("word2", "This is some definition for word2");
        dictionalySorted.put("word3", "This is some definition for word3");
        dictionalySorted.put("word4", "This is some definition for word4");
        dictionalySorted.put("word5", "This is some definition for word5");

        for (Map.Entry<String, String> entry: dictionalySorted.entrySet()
             ) {
            System.out.println(entry.getKey());
        }
    }
}

class Animal{
    String name;
    int age;

    //Constructor
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    //toString()
    @Override
    public String toString() {
        return new StringJoiner(", ", Animal.class.getSimpleName() + "[", "]")
                .add("name='" + name + "'")
                .add("age=" + age)
                .toString();
    }

    //Equals and hashcode  -> it suppust to make them the same hashCode so the boolient will be false -> true
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Animal animal = (Animal) o;

        if (age != animal.age) return false;
        return name.equals(animal.name);
    }

    @Override
    public int hashCode() {
        int result = name.hashCode();
        result = 31 * result + age;
        return result;
    }
}
