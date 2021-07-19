package Q3;

import java.util.*;

//----Francois---------------------------------------------------------------

public class Lab3Q3  {
    public static void main(String[] args) {
        List<Car> cars = new ArrayList<>();
        cars.add(new Car("Honda", "Civic Type R", 1997));
        cars.add(new Car("BMW", "3 Series", 1983));
        cars.add(new Car("VW", "Polo", 1975));

        printList(cars);

//        cars.sort(null);
        //  ↑　OR　↓
        cars.sort(new Comparator<Car>() {
            @Override
            public int compare(Car o1, Car o2) {
                return o1.getYear() - o2.getYear();
            }
        });

        printList(cars);
    }

    public static void printList(List<Car> list){
        for (Car car: list
             ) {
            System.out.println("Element: " + car);
        }
        System.out.println("***********************");
    }
}

class Car implements Comparable<Car>{
    String make;
    String model;
    int year;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Car.class.getSimpleName() + "[", "]")
                .add("make='" + make + "'")
                .add("model='" + model + "'")
                .add("year=" + year)
                .toString();
    }

    @Override
    public int compareTo(Car obj){
//        if(year == obj.year){
//            return 0;
//        }else if(year > obj.year){
//            return 1;
//        }else{
//            return -1;
//        }
        return Integer.compare(year, obj.year);
    }
}





//
////----My Attempt---------------------------------------------------------------
//class Cars {
//    String make;
//    String model;
//    int year;
//
//    //Contructor
//    public Cars(String make, String model, int year) {
//        this.make = make;
//        this.model = model;
//        this.year = year;
//    }
//
//    //Getter
//    public String getMake() {
//        return make;
//    }
//
//    public String getModel() {
//        return model;
//    }
//
//    public int getYear() {
//        return year;
//    }
//
//    //Setter
//    public void setMake(String make) {
//        this.make = make;
//    }
//
//    public void setModel(String model) {
//        this.model = model;
//    }
//
//    public void setYear(int year) {
//        this.year = year;
//    }
//
//    //ToString()
//    @Override
//    public String toString() {
//        return new StringJoiner(", ", Cars.class.getSimpleName() + "[", "]")
//                .add("make='" + make + "'")
//                .add("model='" + model + "'")
//                .add("year=" + year)
//                .toString();
//    }
//}
//
//
//public class Lab3Q3 {
//    public static void main(String[] args) {
//        List<Cars> cars = new ArrayList<>();
//        cars.add(new Cars("Honda", "Civic Type R", 1997));
//        cars.add(new Cars("BMW", "3 Series", 1983));
//        cars.add(new Cars("VW", "Polo", 1975));
//
//
//        System.out.println("Before Sorting: " + cars);
//
//        Collections.sort(cars, new Comparator<Cars>() {
//            @Override
//            public int compare(Cars o1, Cars o2) {
//                return Integer.compare(o1.getYear(), o2.getYear());
//            }
//        });
//
//        System.out.println("After Sorting: " + cars);
//
//    }
//}
//





