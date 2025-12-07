package bank_oop;

public class BankAccount {
    private double balance;

    //constructor
    public BankAccount(){
        this.balance=0;
    }

    //show balance
    public void showBalance(){
        System.out.printf("$%.2f",balance);
    }

    //Deposit
    public void deposit(double amount){
        if(amount <=0){
            System.out.println("Deposite amount must be positive. ");
        }
        else{
            balance+=amount;
            System.out.println("Deposite Sucessful");
        }
    }
    
    //withdraw 
    public void withdraw(double amount){
        if (amount <= 0){
            System.out.println("Withdrawal amount must be positive");
        } 
        else if(amount > balance){
            System.out.println("INSUFFICIENT FUNDS");
        }
        else{
            balance -= amount;
            System.out.println("Withdrawal Sucessfull");
        }
    }
}

