public class Run implements Runnable {
    @Override
    public void run() {
        try{
            System.out.println("Runnable " + Thread.currentThread().getId());

        }catch(Exception e) {
            System.out.println("Exception was caugth");

        }
        try {
            wait(1000);
        }catch (InterruptedException e){
            System.out.println("Thread interrupted:\n" + e);

        }

    }
}
