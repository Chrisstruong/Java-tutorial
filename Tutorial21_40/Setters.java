package Tutorial21_40;

class Frog{
    private String name;
    private int age;

    // use this.nameOfSomething when the parameter and local variable have the same name. This is important to remember
    
    public void setName(String name){
        this.name = name;
        // this.name is the "private String name"
        // name is in "String name"
    }

    public void setAge(int age){
        this.age = age;
        // this.age is the "private int age"
        // age is in "int age"

    }

    public String getName(){
        return name;
    }

    public int getAge(){
        return age;
    }

    public void setInfo(String name, int age){
        setName(name);
        setAge(age);
    }
}
public class Setters {
    public static void main(String[] args){
        Frog frog1 = new Frog();
        // frog1.name = "Bertie";;
        // frog1.age = 1;

        frog1.setName("Bertie");
        frog1.setAge(1);

        System.out.println(frog1.getName());
        System.out.println(frog1.getAge());

    }
}
