public class VolData {
    private volatile int num = 69;

    public int getNum(){
        return num;

    }

    public void changeNum(){
        num++;

    }
}
