package input_and_output;

import java.util.Scanner;

public class Temperature {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        double value=sc.nextDouble();

        double ans=(value*1.8)+32.0;

        System.out.print(ans);
    }
}
