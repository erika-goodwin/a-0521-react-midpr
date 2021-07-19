package com.NonStaticNested.LocalInnerClass;

public class Door {
    public boolean isLocked(String key){
        class Lock{
            public boolean isLock(String key){
                if(key.equals("qwerty")){
                    return false;
                }else{
                    return true;
                }
            }
        }
        return new Lock().isLock(key);
    }
}
