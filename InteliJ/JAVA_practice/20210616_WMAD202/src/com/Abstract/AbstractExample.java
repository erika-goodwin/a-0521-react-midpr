package com.Abstract;

//Abstract class (抽象クラス＝共通するもの）
abstract class Dog{
    String breed;
    public void bark(){
        System.out.println("Woof!");
    }
    public abstract void poop();
}
//Abstract method (抽象的メソッド＝種ごとに異なるものを後で実装する）
//(2) So add this Sub-class of Dog
class Corgi extends Dog{
    //実装内容
    @Override
    public void poop() {
        System.out.println("unchi");
    }
}

public class AbstractExample {
    public static void main(String[] args) {
        //↓　(1) Error: this cannot instantiate -> Because we have abstract class
        //Dog dog = new Dog();

        Corgi dog = new Corgi();
        dog.bark();
        dog.poop();

    }

}
