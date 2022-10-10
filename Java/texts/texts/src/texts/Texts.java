package texts;

/**
 *
 * @author 20d_bieleczkig
 */
import java.util.Scanner;

public class Texts {

    
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String s1 = input.nextLine();
        
        int midp = s1.length() / 2;
        
        System.out.println( (s1.length() % 2 == 1)
            ? s1.substring( midp-1, midp+2 )
            : s1.substring( midp-1, midp+1 )
        );
        
        System.out.println( (s1.contains("a"))
            ? "Tartalmaz \"a\" betűt"
            : "Nem tartalmaz \"a\" betűt"
        );
        
    }
    
}
