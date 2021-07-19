package com.animal_type;

import com.Animal.Animal_super;

public class Reptile extends Animal_super {
    private String skinType;
    private String spainType;
    private String eggType;

    public Reptile() {
        this.skinType = "drySkin";
        this.spainType = "backbone";
        this.eggType = "softShelledEgg";
    }
    public Reptile(String skinType, String spainType, String eggType, int height, int weight, String animalType, String bloodType) {
        super(height, weight, animalType, bloodType);
        this.skinType = skinType;
        this.spainType = spainType;
        this.eggType = eggType;
    }


    public String getSkinType() {
        return skinType;
    }

    public String getSpainType() {
        return spainType;
    }

    public String getEggType() {
        return eggType;
    }

    public String showInfo(){
        return "CROCODILE: [getSkinType()=" + getSkinType() + ", getSpainType()=" + getSpainType() + ", getEggType()=" + getEggType() + ", getHeight()=" + getHeight() + ", getWeight()=" + getWeight() + ", getAnimalType()=" + getAnimalType() + ", getBloodType()=" + getBloodType() + "]";
    }

}


