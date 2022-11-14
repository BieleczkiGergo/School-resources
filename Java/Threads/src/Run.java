public class Run implements Runnable {
    @Override
    public void run() {
        try{
            System.out.println("Runnable " + Thread.currentThread().getId());

        }catch(Exception e) {
            System.out.println("Exception was caugth");

        }
    }
}
