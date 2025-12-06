package conditional_statements;
import java.util.*;

public class GradeCalculation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num=sc.nextInt();

        if(num>=90 && num<=100){
            System.out.println("Grade: A");
        }
        else if(num>=80 && num<=89){
            System.out.println("Grade: B");
        }
        else if(num>=70 && num<=79){
            System.out.println("Grade: C");
        }
        else if(num>=60 && num<=69){
            System.out.println("Grade: D");
        }
        else{
            System.out.println("Grade: F");
        }
    }
}
