package com.animal_type;

import com.Animal.Animal_super;

public class Birds extends Animal_super {

    private String bodyHair;
    private String canFly;

    public Birds() {
        this.bodyHair = "animalWithFeathers";
        this.canFly = "Flying";
    }
    public Birds(String bodyHair, String canFly, int height, int weight, String animalType, String bloodType) {
        super(height, weight, animalType, bloodType);
        this.bodyHair = "animalWithFeathers";
        this.canFly = "Flying";
    }

    public String getbodyHair() {
        return bodyHair;
    }

    public String getCanFly() {
        return canFly;
    }

    public String showInfo(){
        return "BIRDS: [getbodyHair()=" + getbodyHair() + ", getCanFly()=" + getCanFly() + ", getHeight()=" + getHeight() + ", getWeight()=" + getWeight() + ", getAnimalType()=" + getAnimalType() + ", getBloodType()=" + getBloodType() + "]";
    }
}
