package com.Stack;

import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Stack<Integer> demo = new Stack<>();
        demo.push(0);
        demo.push(1);
        demo.push(2);
        demo.push(3);
        demo.push(4);

        if(demo.isEmpty()){
            System.out.println("Stack is empty");
        } else{
            System.out.println("Stack is not empty");
            System.out.println("****************");


            for (int temp:demo
            ) {
                System.out.println(temp);
            }
            System.out.println("Peek: "+ demo.peek());//checks the last element in thee stack

            demo.pop(); //remove last entry
            System.out.println("****************");

            for (int temp:demo
            ) {
                System.out.println(temp);
            }

            System.out.println("****************");
            System.out.println("Peek: "+ demo.peek());
        }

        System.out.println(demo.search(0));


    }
}
