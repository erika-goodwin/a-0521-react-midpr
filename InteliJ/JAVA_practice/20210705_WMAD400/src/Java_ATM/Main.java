package Java_ATM;

import java.util.Scanner;

//Gave up at 13:47  (-13:54)

public class Main {
    public static void main(String[] args) {
        BankAccount<String, String> account = new BankAccount<>("1", "2");
        System.out.println("Welcome, " + account.getCustomerName());
        System.out.println("Your ID is:  " + account.getCustomerId());
        System.out.println("\n");

        account.showMenu();
}

static class BankAccount<s1, s2>{ //(String s1, String s2)
    int balance;
    int previousTransaction;
    private final s1 customerName;
    private final s2 customerId;

    public BankAccount(s1 customerName, s2 customerId) {
        this.customerName = customerName;
        this.customerId = customerId;
    }

    public s1 getCustomerName() {
        return customerName;
    }

    public s2 getCustomerId() {
        return customerId;
    }

    void deposit(int amount){ //update the balance
        if(amount >= 0){
            balance = balance + amount;
            previousTransaction = amount;
        }else{
            if(amount < 0){
                System.out.println("Invalid amount! Please enter correct amount");
            }else {
                System.out.println("Invalid input!");
            }
        }
    }
    void withDraw(int amount){
        if(amount >= 0 && amount != 0){
            balance = balance - amount;
            previousTransaction = -amount;
        }else{
            if(amount <= 0){
                System.out.println("Invalid amount! Please enter correct amount");
            }else {
                System.out.println("Insufficient balance");
            }
        }
    }

    void getPreviousTransaction(){
        if(previousTransaction > 0){
            System.out.println("Deposited: $" + previousTransaction);
        } else if (previousTransaction < 0){
            System.out.println("Withdraw: $" + Math.abs(previousTransaction)); //Math.abs negative -> positive
        } else {
            System.out.println("No transaction found.");
        }
    }

    void showMenu(){
        char option;
        Scanner scanner = new Scanner(System.in);

        do{
            System.out.println("------------------------------------------");
            System.out.println("Enter your option");
            System.out.println("------------------------------------------");
            System.out.println("A: Check your balance");
            System.out.println("B: Deposit");
            System.out.println("C: Withdraw");
            System.out.println("D: Previous Transaction");
            System.out.println("E: Exit the System");
            System.out.println("\n");

            option = scanner.next().charAt(0);

            switch(Character.toLowerCase(option)){
                case 'a':
                    System.out.println("------------------------------------------");
                    System.out.println("Balance = $" + balance);
                    System.out.println("------------------------------------------");
                    System.out.println("\n");
                    break;
                case 'b':
                    System.out.println("------------------------------------------");
                    System.out.println("Enter an amount to deposit");
                    System.out.println("------------------------------------------");

                    try{
                        int amount = scanner.nextInt();
                        deposit(amount);
                        System.out.println("\n");
                    } catch (Exception e){
                        System.out.println("Wrong Input! Use only integer numbers");
                        scanner.nextLine();
                    }
                    break;
                case 'c':
                    System.out.println("------------------------------------------");
                    System.out.println("Enter an amount to withdraw");
                    System.out.println("------------------------------------------");

                    try{
                        int amount2 = scanner.nextInt();
                        withDraw(amount2);
                        System.out.println("\n");
                    } catch (Exception e){
                        System.out.println("Wrong Input! Use only integer numbers");
                        scanner.nextLine();
                    }
                    break;
                case 'd':
                    System.out.println("------------------------------------------");
                    getPreviousTransaction();
                    System.out.println("------------------------------------------");
                    break;
                case 'e':
                    System.out.println("------------------------------------------");
                    break;
                default:
                    System.out.println("Invalid option! Please enter correct option...");
                    System.out.println("\n");
            }
        }

        while(Character.toLowerCase(option) != 'e');
            //only when we want to exit, then break
            System.out.println("Thank you for banking with us");
            scanner.close();
    }
}}
