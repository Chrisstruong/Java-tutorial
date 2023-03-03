package Tutorial21_40;

class Thing {
    public final static int LUCKY_NUMBER = 7;
    public String name ;
    public static String description;
    // final is constant (const in JavaScript)

    public static int count = 0;

    public int id;
    
    public Thing(){

        id =count;

        count++;
    }

    public void showName(){
        // Instance method can access to static variables(datas)
        System.out.println("Object id: " + id + " description" + ": " + name);
    }

    public static void showInfo(){
        // Static method can access into static variables inside Class (Thing)
        System.out.println(description);
        //Wont work: System.out.println(name);
    }

}

public class StaticVariables {
    public static void main(String[] args){

        Thing.description = "I am a thing";

        Thing.showInfo();

        System.out.println("Before creating objects, count is: "+ Thing.count);

        Thing thing1 = new Thing();//Contrstuctor is called (whenenver creating a instance of Thing)
        Thing thing2 = new Thing();//Contrstuctor is called

        System.out.println("After creating objects, count is: "+ Thing.count);


        thing1.name = "Bob";
        thing2.name = "Sue";

        thing1.showName();
        thing2.showName();

        System.out.println(Math.PI);

        System.out.println(Thing.LUCKY_NUMBER);



        
    }
}
