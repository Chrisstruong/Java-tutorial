public class MultiDimensionalArray {
    // Two dimensionaly array means array in array

    public static void main(String[] args) {
        int[] values = {3,5,2343};

        System.out.println(values[2]);

        int[][] grid = {
            {3,5,2343},
            {2,4},
            {1,2,3,4},
        };//grid[row index][column index]
       System.out.println(grid[1][1]); 
       System.out.println(grid[0][2]); 

       String[][] texts = new String[2][3];
       texts[0][1] = "Hello there";

       System.out.println("heelo "+texts[0][1]);
        
       for (int row =0; row< grid.length; row++){
        for (int column=0; column < grid[row].length; column++) {
            System.out.print(grid[row][column]+"\t");
        }
        System.out.println();
       }

       String[][] words = new String[2][];
       System.out.println(words[0]);
       words[0] = new String[3];
       words[0][0] = "hi there";
       System.out.println(words[0][0]);

    }
    
}
