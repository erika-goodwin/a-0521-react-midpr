package com.phone;

import com.phone.GooglePixel;
import com.phone.Iphone12;
import com.phone.Phone;

public class Main {
    public static void main(String[] args) {
//        GooglePixel gp = new GooglePixel();
//        System.out.println(gp.procesor());
//
//        Iphone12 ip12 = new Iphone12();
//        System.out.println(ip12.procesor());

        //POLYMORHISM VERSION
        Phone gp = new GooglePixel();
        System.out.println(gp.procesor());

        Phone ip12 = new Iphone12();
        System.out.println(ip12.procesor());
    }
}
