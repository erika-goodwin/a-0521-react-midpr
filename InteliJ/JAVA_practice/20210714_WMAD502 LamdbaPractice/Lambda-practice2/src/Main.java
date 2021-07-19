import java.util.Arrays;
import java.util.List;

public class Main {

	private static Object List;
	private static Object Car;

	public static void main(String[] args) {

		//Arraylist
		List<Car> cars = Arrays.asList(
				new Car("Honda", "Accord","Red", 22300),
				new Car("Honda", "Civic","Blue", 17700),
				new Car("Toyota", "Corolla","Black", 16000),
				new Car("Nissan", "Sentra","White", 22300),
				new Car("Mitsubshi", "Lancer","White", 30000),
				new Car("Jeep", "Wrangler","Red", 25000)
				);


//		//(1) PRICE SORT
//		System.out.println("===========================");
//		printCarsPriceRange(cars, 18000, 25000);
//		System.out.println("===========================\n");
//
//		//(2) COLOR SORT
//		System.out.println("===========================");
//		printCarByColor(cars, "Red");
//		System.out.println("===========================\n");

		//(3) Print ALL
		System.out.println("========================================\n");
		System.out.println("Printing cars between 20000 and 25000");
		System.out.println("========================================\n");
		printCars(cars, new Condition() {

			@Override
			public boolean test(Car c) {
				return c.getPrice() >= 20000 && c.getPrice() <= 25000;
			}
		} );

		printCars(cars, (c) -> c.getPrice() >= 20000 && c.getPrice() <= 25000 );

		System.out.println("========================================\n");
		System.out.println("Printing cars that are blue");
		System.out.println("========================================\n");
//		printCars(cars, new Condition() {
//
//			@Override
//			public boolean test(Car c) {
//				return c.getColor().equals("Blue");
//			}
//		} );
		printCars(cars, (c) -> c.getColor().equals("Blue"));

	}

	//(1) PRICE SORT
	public static void printCarsPriceRange(List<Car> cars, int low, int high) {
		for(Car c: cars) {
			if(low <= c.getPrice() && c.getPrice() <= high) {
				c.printCar();
			}
		}
	}

	//(2) COLOR SORT
	public static void printCarByColor(List<Car> cars, String color) {
		for(Car c: cars) {
			if(c.getColor().equals(color)) {
				c.printCar();
			}
		}
	}

	//(3) Print ALL
	public static void printCars(List<Car> cars, Condition condition) {
		for(Car c: cars) {
			if(condition.test(c)) {
				c.printCar();
			}
		}
	}

}
//(3) Print ALL
@FunctionalInterface
interface Condition{
	public boolean test(Car c);
}
