package com.phone;

public class GooglePixel implements Phone {
    @Override
    public String procesor() {
        return "SD835";
    }

    @Override
    public String OS() {
        return "Android";
    }

    @Override
    public int spaceInGB() {
        return 64;
    }
}
