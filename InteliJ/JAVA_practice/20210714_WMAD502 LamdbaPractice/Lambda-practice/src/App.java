
public class App {

	public static void main(String[] args) {
		//----------------------------------------------------
		//THIS IS
		//LAMBDA EXPRESSION
		ALambdaInterface helloVar = () -> System.out.println("hello there!");
		helloVar.someMethod();

		//----------------------------------------------------
		//LAMBDA EXPRESSION
		//With argument
		Calculate sumVar = (a,b) -> a+b;
		System.out.println(sumVar.compute(1, 3)); //passing variables //4

		//----------------------------------------------------
		//LAMBDA EXPRESSION
		//With argument (2)
		Calculate nonZeroDivider = (a,b) -> {
			if(a == 0) {
				return 0;
			}
			return a/b;
		};
		System.out.println(nonZeroDivider.compute(10, 2)); //5

		//----------------------------------------------------
		//LAMBDA EXPRESSION
		//Reversing
		StringWorker reverser = (str) -> {
			String result = "";
			for(int i = str.length() -1; i >= 0; i--) {
				result = result + str.charAt(i);
			}
			return result;
		};
		System.out.println("LAMBDA:" + reverser.work("samaritan")); //LAMBDA:natiramas

		//----------------------------------------------------
		//LAMBDA EXPRESSION
		//Factory


		//↓OBJECT
//		System.out.println(new App().factorial(5));

		//↓NOT OBJECT
//		NumberWorker facty = (num) -> {
//			int result = 1;
//			for(int i = 1; i <= num; i++) {
//				result = i * result;
//			}
//			return result;
//		};
//		System.out.println("LAMBDA:" + facty.work(7)); //LAMBDA:5040

		//----------------------------------------------------
		//LAMBDA EXPRESSION
		//Reversing
		MyGenericInterface<String> reverse = (str) -> {
			String result = "";
			for(int i = str.length() -1; i >= 0; i--) {
				result = result + str.charAt(i);
			}
			return result;
		};
		System.out.println(reverser.work("samaritan"));
		
//		MyGenericInterface<Integer> facty = (num) -> {
//			int result = 1;
//			for(int i = 1; i <= num; i++) {
//				result = i * result;
//			}
//			return result;
//		};
//		System.out.println(facty.work(7));
		
	}

	//----------------------------------------------------
	//NON LAMBDA EXPRESSION
	//Reversing
	public String reverse(String str) {
		String result = ""; //placeholder
		for(int i = str.length() -1; i >= 0; i--) {
			result = result + str.charAt(i);
		}
		return result;
	}

	//----------------------------------------------------
	//NON LAMBDA EXPRESSION
	//Factory
	public int factorial(int num) {
		int result = 1;
		for(int i = 1; i <= num; i++) {
			result = i * result;
		}
		return result;
	}

}

//----------------------------------------------------
//LAMBDA EXPRESSION
//With argument (Interface)
interface Calculate { //Datatype: Calculate
	public int compute(int a, int b); //Method: compute(int a, int b)
}

//----------------------------------------------------
//LAMBDA EXPRESSION
//Reversing (Interface)
interface StringWorker {
	public String work(String str);
}


//----------------------------------------------------
//LAMBDA EXPRESSION
//Factory (Interface)
interface NumberWorker {
	public int work(int num);
}

//----------------------------------------------------
//LAMBDA EXPRESSION
//Generic (Interface) for both String and Integer
interface MyGenericInterface<T>{
	public T work(T t);
}
