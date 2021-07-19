package com.Animal;

public class Animal_super {
    //STATE OR PROPERTIES
    private int height;
    private int weight;
    private String animalType;
    private String bloodType;

    //DEFAULT CONSTRUCTOR
    public Animal_super(){
        this.height = 10;
        this.weight = 20;
        this.animalType = "animal";
        this.bloodType = "B";
    }

    //PARAMETERIZED CONSTRUCTOR
    public Animal_super(int height, int weight, String animalType, String bloodType) {
        this.height = height;
        this.weight = weight;
        this.animalType = animalType;
        this.bloodType = bloodType;
    }

    public int getHeight() {
        return height;
    }

    public int getWeight() {
        return weight;
    }

    public String getAnimalType() {
        return animalType;
    }

    public String getBloodType() {
        return bloodType;
    }
}
