package com.company;

public class Hello_car {
    public static void main(String[] args) {
        Car car = new Car("closed", "on", "seated", 12);

//        car.setSpeed(12);
//        System.out.println(car.speed);
//        System.out.println(car.run());
//        car.setSpeed(10);
//        car.setEngine("on");
//        car.setDriver("seated");

        System.out.println(car.run());
    }
}
