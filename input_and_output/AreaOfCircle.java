package input_and_output;
import java.util.*;

public class AreaOfCircle {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int r=sc.nextInt();
    double area=3.14*r*r;

    System.out.printf("%.2f",area); 
    }
}
