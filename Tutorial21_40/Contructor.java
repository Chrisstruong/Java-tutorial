package Tutorial21_40;

class Machine{
    // Contructor is the method has the same name as class
    private String name;
    private int code;
    public  Machine(){
        this("Triet",123); //This is how you recall the other constructor. It should be appear on the first line.
        System.out.println("Constructor running!");
    }
    public Machine(String name){
        this(name,0);
        System.out.println("Second constructor");
        this.name= name;
    }

    // Recommended to use the most complex contructor 
    public Machine(String name, int code){
        System.out.println("Third contructor running");
        this.name = name;
        this.code = code;
    }

}

public class Contructor {
    public static void main(String[] args){
        Machine machine1 = new Machine();
        // Machine machine2 = new Machine("Bertie");//Based on the parameter decide which contructor Java is gonna take.
        // Machine machine3 = new Machine("Chalky", 123);


    }
}
