package input_and_output;
import java.util.Scanner;

public class CharacterCount{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        String str=sc.nextLine();
        int c=0;
        for(int i=0;i<str.length();i++){
            c++;
        }

        System.out.println(c);
    }
}