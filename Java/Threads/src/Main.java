public class Main{

    public static void main(String[] args) {

        int n = 8;
        for (int i = 0; i < n; i++){
            Th obj = new Th();
            obj.start();

        }

        System.out.println("Runnables");

        for (int i = 0; i < n; i++){
            Thread obj = new Thread(new Run());
            obj.start();

        }

    }
}