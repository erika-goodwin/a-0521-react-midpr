import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

public class App {

	public static void main(String[] args) {
		
		List<Car> cars = Arrays.asList(
				new Car("Honda", "Accord","Red", 22300),
				new Car("Honda", "Civic","Blue", 17700),
				new Car("Toyota", "Corolla","Black", 16000),
				new Car("Nissan", "Sentra","White", 22300),
				new Car("Mitsubshi", "Lancer","White", 30000),
				new Car("Jeep", "Wrangler","Red", 25000)
				);
		
		Function<Car,String> priceAndColor = (c) -> "Price = " + c.getPrice() + " | Color = " + c.getColor();
		String stringCar = priceAndColor.apply(cars.get(0));
		System.out.println(stringCar);
		
		System.out.println("========================================");
		System.out.println("Printing cars between 20000 and 25000");
		System.out.println("========================================\n");
		printCars(cars, (c) -> c.getPrice() >= 20000 && c.getPrice() <= 25000 );
		
		System.out.println("========================================");
		System.out.println("Printing cars that are blue");
		System.out.println("========================================");
		printCars(cars, (c) -> c.getColor().equals("Blue"));

	}
	
	public static void printCars(List<Car> cars, Predicate<Car> predicate) { //changed Condition -> Preficate
		for(Car c: cars) {
			if(predicate.test(c)) {
				c.printCar();
			}
		}
	}

}
//
//@FunctionalInterface
//interface Condition{
//	public boolean test(Car c);
//}
