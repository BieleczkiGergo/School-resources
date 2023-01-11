import java.util.Scanner;

public class Main{

    static int thNo = 2;
    public static void main(String[] args) {
        VolData volData = new VolData();
        Thread[] threads  = new Thread[thNo];
        for(int i=0; i<thNo; i++)
            threads[i] = new VolThread(volData);

        for(int i=0; i<thNo; i++)
            threads[i].start();

        for(int i=0; i<thNo; i++)
            threads[i].join();
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