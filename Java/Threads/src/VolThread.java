public class VolThread  extends Thread{
    private final VolData data;

    public VolThread(VolData data){
        this.data = data;

    }

    @Override
    public void run() {
        int val = this.data.getNum();
        System.out.println("Thread: " + Thread.currentThread().getId() + ": Old value: " + val);
        this.data.changeNum();
        val = this.data.getNum();
        System.out.println("Thread: " + Thread.currentThread().getId() + ": New value: " + val);
    }
}
