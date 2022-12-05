public class Main{

    public static void main(String[] args) {

        Th obj = new Th();
        obj.start();
        try{
            Thread.sleep(50);
        }catch(InterruptedException e){
            System.out.println("What even happened");
        }
        obj.interrupt();

        Thread run = new Thread(new Run());
        run.start();
        try{
            Thread.sleep(50);
        }catch(Exception e){
            System.out.println("What even happened");

        }
        System.out.println(run.isAlive());
        run.interrupt();
    }
}