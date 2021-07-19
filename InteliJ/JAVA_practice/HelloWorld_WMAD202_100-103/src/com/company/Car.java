package com.company;

public class Car {
    private String door;
    private String engine;
    private String driver;
    public int speed;

    //default constructor
    public Car(){
        door = "closed";
        engine = "on";
        driver = "seated";
        speed = 10;
    }

    //parameterized constructor
    public Car(String door, String engine, String driver, int speed){
        //code block
        this.door = door;
        this.engine = engine;
        this.driver = driver;
        this.speed = speed;
    }

    public int getSpeed(){
        return speed;
    }

    public int getDoor(){
        return door;
    }
    public int getEngine(){
        return engine;
    }
    public int getDriver(){
        return driver;
    }
    public String run(){
    if(door.equal("closed") && engine.equal("on") && driver.equal("seated")&& speed.equal(12)){
        System.out.println("car is running");
    } else{
        System.out.println("car is stopped");
    }
    }
}

//    public int getSpeed(int speed){
//        this.speed = this.speed;
//        return speed;
//    }

//    public void setSpeed(int speed){
//
//    }
//}
