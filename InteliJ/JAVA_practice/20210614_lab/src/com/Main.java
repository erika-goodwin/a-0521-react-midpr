package com.company;

import com.animal_type.Fish;
import com.animal_type.Reptile;
import com.animal_type.Birds;

public class Main {
    public static void main(String[] args) {
//        System.out.println("test");

        Crocodile1 crocodile1 = new Crocodile1();
        Crocodile2 crocodile2 = new Crocodile2();
        System.out.println("=============================================");

        Eel1 eel1 = new Eel1();
        Eel2 eel2 = new Eel2();
        System.out.println("=============================================");

        Eagle1 eagle1 = new Eagle1();
        Eagle2 eagle2 = new Eagle2();
        System.out.println("=============================================");
    }
}

// SUB-CLASS-2 CROCODILE-----------------------------------------------------------
class Crocodile1 {
        public Crocodile1() {

            Reptile crocodile1 = new Reptile();
            System.out.println("Crocodile1 = " + crocodile1.showInfo());
            System.out.println("Type of shelled eggs: " + crocodile1.getEggType());
        }
}
class Crocodile2 {
    public Crocodile2() {

        Reptile crocodile2 = new Reptile("Dry Skin", "Backbone", "Hard-Shelled Eggs", 200, 100, "Reptile", "O");
        System.out.println("Crocodile2 = " + crocodile2.showInfo());
    }
}

// SUB-CLASS-2 EEL-----------------------------------------------------------
class Eel1 {
    public Eel1() {

        Fish eel1 = new Fish();
        System.out.println("Eel1 = "+ eel1.showInfo());
        System.out.println("Plcase to live: " + eel1.getPlaceToLive());
    }
}
class Eel2 {
    public Eel2() {

        Fish eel2 = new Fish("Live in water", "Breath by gills", 300, 50, "Fish", "A");
        System.out.println("Eel2 = " + eel2.showInfo());
    }
}

// SUB-CLASS-2 EAGLE-----------------------------------------------------------
class Eagle1 {
    public Eagle1() {

        Birds eagle1 = new Birds();
        System.out.println("Eagle1 = "+ eagle1.showInfo());
        System.out.println("Eagle is: " + eagle1.getCanFly());
    }
}
class Eagle2 {
    public Eagle2() {

        Birds eagle2 = new Birds("Animal with feathers", "Can fly", 100, 40, "Birds", "AB");
        System.out.println("Eagle2 = " + eagle2.showInfo());
    }
}


