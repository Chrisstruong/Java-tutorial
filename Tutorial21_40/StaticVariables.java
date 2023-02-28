package Tutorial21_40;

class Thing {
    public String name ;
    public static String description;
    // Static is constant (const in JavaScript)

    public void showName(){
        // Instant method can access to static variables(datas)
        System.out.println(description + ": "+name);
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
        System.out.println(Thing.description);
        Thing.showInfo();

        Thing thing1 = new Thing();
        Thing thing2 = new Thing();

        thing1.name = "Bob";
        thing2.name = "Sue";

        thing1.showName();
        thing2.showName();
    }
}
