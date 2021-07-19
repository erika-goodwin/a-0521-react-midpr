package Generics_Example;

import java.util.StringJoiner;

public class Person {
    //No Generics
    private final String name;

    //Constructor
    public Person(String name) {
        this.name = name;
    }

    //toString()
    @Override
    public String toString() {
        return new StringJoiner(", ", Person.class.getSimpleName() + "[", "]")
                .add("name='" + name + "'")
                .toString();
    }
}
