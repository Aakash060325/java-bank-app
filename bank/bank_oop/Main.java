package bank_oop;

import java.util.Scanner;

public class Main {
    static Scanner sc=new Scanner(System.in);

    public static void main(String[] args) {
        BankAccount account=new BankAccount(); //Create object

        boolean isRunning=true;

        while(isRunning){
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
        int choice = sc.nextInt();

        switch(choice){
            case 1-> account.showBalance();
            case 2-> {
                System.out.print("Enter the deposit amount: ");
                double amount= sc.nextDouble();
                account.deposit(amount);
            }
        }
        }
    }
}
