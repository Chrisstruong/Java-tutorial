class Robot{
    public void speak(String text, String text2){
        System.out.println(text + text2);
    }
    
    public void jump(int height){
        System.out.println("Jumping: "+height);
    }

    public void move(String direction, double distance){
        System.out.println("Moving "+distance+" metres in direction "+direction);
    }
}

public class MethodParameters {
    public static void main(String[] args){
        Robot sam = new Robot();
        sam.speak("Hi! I'm Sam","hello");

        sam.jump(7);

        sam.move("West", 12.2);

        String greeting = "Hello there.";
        sam.speak(greeting, greeting);

        int value = 14;
        sam.jump(value);
    }
}
