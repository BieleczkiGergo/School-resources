import java.util.Scanner;

public class Main{

    public static void main(String[] args) {

        /*Th obj = new Th();
        obj.start();
        try{
            Thread.sleep(50);
        }catch(InterruptedException e){
            System.out.println("What even happened");
        }
        System.out.println(Thread.currentThread());
        obj.interrupt();

        Thread run = new Thread(new Run(), "Valami");
        run.start();*/
        Scanner input = new Scanner(System.in);
        int a = 15;
        int b = 12;
        System.out.println("The two numbers are: " + a + " and " + b);
        System.out.println("GCD is: " + gcd(a, b));


    }

    public static int gcd(int a, int b){
        if(a == 0 || b == 0)
            return Math.max(a, b);

        int temp = 0;
        while(b != 0) {
            temp = a%b;
            a = b;
            b = temp;
        }
        return a;
    }
}