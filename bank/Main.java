import java.util.Scanner;

public class Main {

    static Scanner sc=new Scanner(System.in);
    public static void main(String[] args) {
        //Java banking program for beginners
        
        
        //Declare variables
        
        double balance = 0;
        boolean isRunning =true;
        int choice;
        
        while (isRunning) {
             //Display menu

        System.out.println("***************");
        System.out.println("BANKING PROGRAM");
        System.out.println("***************");
        System.out.println("1. Show Balance");
        System.out.println("2. Deposit");
        System.out.println("3. Withdraw");
        System.out.println("4. Exit");
        System.out.println("***************");

        //Get and Process Users choice 

        System.out.println("Enter your choice (1-4):  ");
        choice = sc.nextInt();

        switch(choice){
            case 1-> showBalance(balance);
            case 2-> balance+=deposit();
            case 3-> balance-=withdraw(balance);
            case 4-> isRunning=false;
            default-> System.out.println("INVALID CHOICE");
        }
        }
       
        //Exit message
        System.out.println("**************************");
        System.out.println("Thank You Have a nice day!");
        System.out.println("**************************");
    }
    
    //showBalance()
    static void showBalance(double balance){
        System.out.println("***************");
        System.out.printf("$%.2f\n",balance);
    }

    //Deposit()
    static double deposit(){
        double amount;
        System.out.print("Enter an amount to be deposited: ");
        amount=sc.nextDouble();

        if(amount <0){
            
            return 0;
        }
        else{
             return amount;
        }
    }

    //withdraw()
    static double withdraw(double balance){
        
        double amount;

        System.out.print("Enter the amount to be  withdrawn:  ");
        amount=sc.nextDouble();
        if(amount>balance){
            System.out.println("INSUFFICIENT FUNDS");
            return 0;
        }
        else if(amount<0){
            System.out.println("Amount can't be negative");
            return 0;
        }
        else{
            return amount;
        }
    }
}
