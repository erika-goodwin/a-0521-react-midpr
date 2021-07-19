package com.FinalKeyword.TestRun;

public class Child  { ///extends Parent cannot use

    private final int x = 5;  //If we add "FINAL"
    //Default Constructor
    public Child() {
        super();
    }
    //Parametrize Constructor
//    public Child(int x) {
//        super();
//        this.x = x;   //Error from final
//    }
    //Getter
    public int getX() {
        return x;
    }
    //Setter
//    public void setX(int x) {
//        this.x = x;  //Error from final
//    }


}
