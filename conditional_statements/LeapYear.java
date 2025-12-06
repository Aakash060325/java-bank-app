package conditional_statements;
import java.util.*;
public class LeapYear {
   public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num=sc.nextInt();
    if(num%400==0){
        System.out.println(num+" is a Leap Year.");
    } 
    else if(num%100==0){
        System.out.println(num+" is not a Leap Year.");
    } 
    else if(num%4==0){
        System.out.println(num+" is a Leap Year");
    }
   } 
}
