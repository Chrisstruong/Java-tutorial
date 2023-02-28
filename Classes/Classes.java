package Classes;

class Person {

    // Instance variables (data or "state")
    String name;
    int age;

    // Classes can contain
    // 1. Data
    // 2. Subroutines (methods)
}

class Fruit {
    String name;
    int age;
}

public class Classes {
    public static void main(String[] args) {
        Person person1 = new Person();
        person1.name = "Joe Bloggs";
        person1.age = 37;
        System.out.println(person1.name);

        Person person2 = new Person();
        person2.name = "Sarah Smith";
        person2.age = 20;

        Fruit fruit1 = new Fruit();
        fruit1.name = "hihihi";
        fruit1.age = 89;

        System.out.println(fruit1.age);
    }
}
