package com.animal_type;

import com.Animal.Animal_super;

public class Fish extends Animal_super {
    private String placeToLive;
    private String breath;

    public Fish() {
        this.placeToLive = "liveInWater";
        this.breath = "byGills";
    }
    public Fish(String placeToLive, String breath, int height, int weight, String animalType, String bloodType) {
        super(height, weight, animalType, bloodType);
        this.placeToLive = "liveInWater";
        this.breath = "byGills";
    }

    public String getPlaceToLive() {
        return placeToLive;
    }

    public String getBreath() {
        return breath;
    }

    public String showInfo(){
        return "EEL: [getPlaceToLive=" + getPlaceToLive() + ", getBreath()=" + getBreath() + ", getHeight()=" + getHeight() + ", getWeight()=" + getWeight() + ", getAnimalType()=" + getAnimalType() + ", getBloodType()=" + getBloodType() + "]";
    }
}
