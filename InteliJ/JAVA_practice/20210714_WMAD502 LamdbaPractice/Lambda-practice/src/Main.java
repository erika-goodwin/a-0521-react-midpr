//
//public class Main {
//
//	public static void main(String[] args) {
//
//		//**PROBLEM**
//		//We always have to initiate CLASSES
//		Human tom = new Human();
////		tom.walk(); //CONSOLE: Human Walking
//		walker(tom);
//
//		Robot wale = new Robot();
////		wale.walk();//CONSOLE: Human Walking
//		walker(wale);
//
//		//-----------------------------------------------------------------------------
//		//anonymous class definition
////		walker(new Walkable() {
////			@Override
////			public void walk() {
////				System.out.println("Custom object walking.....");
////			}
////		});
////	}
//		public static void walker(Walkable walkEntity) {
//			walkEntity.walk();
//		}
//
//		//-----------------------------------------------------------------------------`
//		//Lambda Expression
//
//		//Single line
////		walker( () -> System.out.println("Custom object walking....."));
//
//		//Multipul line
//		ALambdaInterface aBlockOfCode = () -> {
//			System.out.println("Custom object walking.....");
//			System.out.println("The object tripped....");
//		};
//	}
//}