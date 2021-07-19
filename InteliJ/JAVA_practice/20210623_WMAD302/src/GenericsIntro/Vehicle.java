package GenericsIntro;

import java.util.StringJoiner;

public class Vehicle {
    String make;
    String model;
    int price;
    boolean fourWD;

    public Vehicle(String make, String model, int price, boolean fourWD) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.fourWD = fourWD;
    }
//Getter
    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getPrice() {
        return price;
    }

    public boolean isFourWD() {
        return fourWD;
    }
//Setter
    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setFourWD(boolean fourWD) {
        this.fourWD = fourWD;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Vehicle.class.getSimpleName() + "[", "]")
                .add("make='" + make + "'")
                .add("model='" + model + "'")
                .add("price=" + price)
                .add("fourWD=" + fourWD)
                .toString();
    }
}
