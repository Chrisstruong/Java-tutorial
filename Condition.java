public class Condition {
    public static void main(String[]args) {
        int myInt = 15;
        if ( myInt < 10 ){
            System.out.println("Yes, Its true!");
        } 
        else if(myInt > 20) {
            System.out.println("No! Its false");
        } 
        else {
            System.out.println("None of the above.");
        }

        int loop = 0;
        while (true) {
            System.out.println("Looping: " + loop);
            if (loop == 5){
                break;
            }
            loop ++;
            System.out.println("Running");
        }
    }
    
}
