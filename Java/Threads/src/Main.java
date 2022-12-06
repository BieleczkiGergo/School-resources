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
        //Runnable object are not interruptable
    }
}