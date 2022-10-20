package Java.oop;

import java.util.Scanner;

public class oop{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = 50;
        int a1[] = new int[num];
        for(int i = 0; i < num; i++){
            a1[i] = (int) Math.floor(Math.random()*100);

        }
        sc.close();
        System.out.println(max(a1));

    }

    public static int max(int ... a){
        int m = 0;
        for(int i : a){
            if(i > m){
                m = i;

            }

        }
        return m;

    }

}