import java.util.StringJoiner;

public class Item {

    //Name of vegetables and fruits
    private String name;
    //Code of vegetables and fruits
    private int code;


    //Constructor = class name
    public Item(String name, int code) {
        this.name = name;
        this.code = code;
    }
    //Getter
    public String getName() {
        return name;
    }
    public int getCode() {
        return code;
    }

    //toString()
    @Override
    public String toString() {
        return this.code+ ": " + this.name;
    }
}
