package input_and_output;
import java.util.*;

public class Palindrome {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    Boolean flag=true;
    String str=sc.nextLine();
    int end=str.length()-1;
    for(int i=0;i<str.length();i++){
        if(str.charAt(i)!=str.charAt(end-i)){
            flag=false;
            break;
        }
    }
    if(!flag){
        System.out.println(str+" is not a palindrome");
    }
    else{
        System.out.println(str+" is a palindrome");
    }
    }
}
