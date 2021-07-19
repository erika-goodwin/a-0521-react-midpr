package com.NonStaticNested.MemberInner;

public class Door {

    //lock:  valuable of the Inner class
    private Lock lock;

    //Default Constructor
    public Door(){
        lock = new Lock(true);
    }

    //Another variable
    public Lock getLock(){
        return lock;
    }
    //Another Method
    public void shopStatus(){
        System.out.println(lock.isLock());
    }

    //Inner Class
    public class Lock{
        private boolean lock;

        //constructor
        public Lock(boolean lock) {
            this.lock = lock;
        }
        //Getter
        public boolean isLock() {
            return lock;
        }
        //Setter
        public void setLock(boolean lock) {
            this.lock = lock;
        }
    }
}
