import java.util.ArrayList;
import java.util.Random;

class ItemList {

//--------------------------------------------------------
//-------------------ARRAY LIST --------------------------
//--------------------------------------------------------

    private ArrayList<Item> list = new ArrayList<>();;

    //CONSTRUCTOR: Adding to Arraylist: Name & Code                           //WHAT IS CONSTRUCTOR???????
    public void ItemList(){
        // init list with items
        addItem("Banana",4011);
        addItem("Gala Apple",4171);
        addItem("Lemon",4053);
        addItem("Rime", 4048);
        addItem("Yellow Potato", 4727);
        addItem("Cherry", 4259);
    }

//--------------------------------------------------------
//-------------------SWITCH CASE -------------------------
//--------------------------------------------------------

    //CASE A: Displaying the list of arrayList
    void displayList(){
        for (int i=0; i < list.size(); i++){
            System.out.println(list.get(i).toString());                //how toString() is working : Need to google!!!!!!!!!!!!!!!!!
        }
    }

    //CASE B: Adding the new name & number to Arraylist
    protected void addItem(String name, int code) {
        list.add(new Item(name, code));
    }

    //CASE C: Quiz mode: Generating the random question
    Item getRandomItem() {
            Random rand = new Random();
            Item randomItem = list.get(rand.nextInt(arraySize()));          //what is rand.next.... : Need to google!!!!!!!!!!!!!!!!!
//            int randomElement = randomItem.getName();
        return randomItem;
    }
    public int arraySize(){
        int arraySize = list.size();
        return arraySize;
    }
}