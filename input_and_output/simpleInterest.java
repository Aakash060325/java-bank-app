package input_and_output;
import java.util.*;

public class simpleInterest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int p=sc.nextInt();
        int r=sc.nextInt();
        int t=sc.nextInt();

        double ans=(p*r*t)/100.0;


        System.out.println(ans);
    }
}
