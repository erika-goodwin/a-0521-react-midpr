package GenericsIntro;

import java.util.ArrayList;
import java.util.List;

public class App {

    public static void main(String[] args) {
        //WITHOUT GENERICS
        List<String> animals = new ArrayList<>();
        animals.add("Lion");
        animals.add("Cat");
        animals.add("Dog");
        animals.add("Bird");

        printElements(animals);

        //WITH GENETICS
        List<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(new Vehicle("Honda","Accord", 12000,false));
        vehicles.add(new Vehicle("Toyota","Camry", 12000,false));
        vehicles.add(new Vehicle("Jeep","Wrangler", 12000,true));

        printElements(vehicles);
    }

    public static void printElements(List someList){
        for (Object item: someList
             ) {
            System.out.println(item);
        }
    }
}
