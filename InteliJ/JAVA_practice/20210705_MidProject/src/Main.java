import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        showMenu();
    }

//--------------------------------------------------------
//------------------- SHOW MENU --------------------------
//--------------------------------------------------------
    public static void showMenu() {
        //INSTANCE
        ItemList itemList = new ItemList();
        Scanner scanner = new Scanner(System.in);

        itemList.ItemList();
        char option;

        do {
            System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
            System.out.println("WELCOME! ");
            System.out.println("Let's remember the codes for vegetables and fruits.");
            System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
            System.out.println("Enter Your Option");
            System.out.println("A : Review the code list");
            System.out.println("B : Add new code");
            System.out.println("C : Practice your code");
            System.out.println("D : End of the practice");
            option = scanner.next().charAt(0);
            System.out.println("\n");



            switch (Character.toLowerCase(option)) {
                case 'a':
                    System.out.println("-------------------------------------------------------");
                    System.out.println("Remember the code below");
                    System.out.println("-------------------------------------------------------");

                    itemList.displayList();

                    System.out.println("\n");
                    break;
                case 'b':
                    System.out.println("-------------------------------------------------------");
                    System.out.println("Type the name of the vegetable you would like to add: ");
                    System.out.println("First: Type the NAME of the vegetable/fruit");
                    System.out.println("Second: Type the CODE of the vegetable/fruit");
                    System.out.println("-------------------------------------------------------");
                    //INPUT
                    String addingName = scanner.next();
                    Integer addingCode = scanner.nextInt();
                    //OUTPUT
                    itemList.addItem(addingName, addingCode);

                    System.out.println("\n");
                    break;
                case 'c':
                    int option1;
                    do {
                        Item randItem = itemList.getRandomItem();

                        System.out.println("-------------------------------------------------------");
                        System.out.println("What is the code for [" + randItem.getName() + "] ?");
                        System.out.println("-------------------------------------------------------");
                        System.out.println("Type here ↓");
                        //INPUT
                        Integer answer = scanner.nextInt();
                        //OUTPUT: Correct / Incorrect
                        if (randItem.getCode() == answer) {
                            System.out.println("\n");
                            System.out.println("Pinpon!!! Good job!");
                        } else {
                            System.out.println("\n");
                            System.out.println("BUBU!!!!!!!!!!!");
                            System.out.println("Correct Answer is " + randItem.getCode());
                        }
                        //Do-while option
                        System.out.println("〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰");
                        System.out.println("1: NEXT QUIZ     2: EXIT");
                        System.out.println("〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰");
                        option1 = scanner.nextInt();
                    } while (option1 != 2);
                    break;
                case 'd':
                    System.out.println("=================================");
                    System.out.println("Good job!! See you tomorrow!");
                    break;
                default:
                    System.out.println("Invalid Option!! Please Enter Correct Option...");
                    break;
            }

        } while (Character.toLowerCase(option) != 'd');
        scanner.close();
    }
}





