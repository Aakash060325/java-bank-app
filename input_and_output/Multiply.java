package input_and_output;
import java.util.*;

public class Multiply {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num=sc.nextInt();

        for(int i=1;i<=10;i++){
            int ans=i*num;
            System.out.println(num+" * "+i+" = "+ans);
        }
    }
}
