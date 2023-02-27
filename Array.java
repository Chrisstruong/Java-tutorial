import java.util.Scanner;
public class Array {
    public static void main(String[] args){
        int value = 7;

        int[] values;
        values = new int[3];//Declare how many numbers you want in this array
        System.out.println(values[0]);

        values[0] = 10;
        values[1] = 20;
        values[02] = 30;
        // System.out.println(values[0]);
        // System.out.println(values[1]);
        // System.out.println(values[2]);

        for (int i=0; i < values.length; i++){
            System.out.println(values[i]);
        }
        int[] numbers = {5,6,7};//This is a list
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
