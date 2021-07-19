package com.phone;

public class Iphone12 implements Phone{  //+ implements interfaceName
    @Override
    public String procesor() {
        return "A14";
    }

    @Override
    public String OS() {
        return "iOS";
    }

    @Override
    public int spaceInGB() {
        return 0;
    }


}

