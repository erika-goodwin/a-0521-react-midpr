package Generics_Example;

/*
PlaceHolder
    T - Type
    E - Element
    K - Key (Object)
    N - Number
    V - Value (Object)
 */

// new Pair("String1", "String2", 1, 3, false)
//public class Pair<T1,T2,N1,N2,B> {   <- Can be like this


import java.util.StringJoiner;

public class Pair<T,S> {  //< >: Generics Class
    //Added "S" for stringIntegerPair

    private final T first;
    private final S second; //Changed T -> S for stringIntegerPair

    //Constructor
    public Pair(T first, S second) {//Changed T -> S for stringIntegerPair
        this.first = first;
        this.second = second;
    }

    //Getter
    public T getFirst() {
        return first;
    }

    public S getSecond() { //Changed T -> S for stringIntegerPair
        return second;
    }

    //toString()
    @Override
    public String toString() {
        return new StringJoiner(", ", Pair.class.getSimpleName() + "[", "]")
                .add("first=" + first)
                .add("second=" + second)
                .toString();
    }
}
