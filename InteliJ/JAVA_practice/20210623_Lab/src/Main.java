public class Main {
    public static void main(String[] args) {
//        int x;
//        for(x=1; x<5; x++){
//            System.out.println(x);
//        }
//        int y;
//        for(y=1; y<5; ++y){
//            System.out.println(y);
//        }

//        int x = 5, y = 5;
//
//        System.out.println(++x); // outputs 6
//        System.out.println(x); // outputs 6
//
//        System.out.println(y++); // outputs 5
//        System.out.println(y); // outputs 6


        int x = 1;
        while(x < 10) {
            System.out.println(x++);  //1-9
        }

        int y = 1;
        while(y < 10) {
            System.out.println(++y); //2-10
        }
    }
}
