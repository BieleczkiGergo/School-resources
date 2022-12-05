public class Th extends Thread {
    @Override
    public void run() {
        try{
            System.out.println("Thread " + Thread.currentThread().getId());

        }catch(Exception e) {
            System.out.println("Exception was caugth");

        }
        try{
            Thread.sleep(1000);
        }catch(InterruptedException e){
            System.out.println("Secondary thread was interrupted");
        }

    }

    public int calculate(){

        return 3;
    }


}
