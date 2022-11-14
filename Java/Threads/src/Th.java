public class Th extends Thread {
    @Override
    public void run() {
        try{
            System.out.println("Thread " + Thread.currentThread().getId());

        }catch(Exception e) {
            System.out.println("Exception was caugth");

        }

    }


}
