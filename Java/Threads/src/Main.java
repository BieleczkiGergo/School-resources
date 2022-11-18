public class Main{

    public static void main(String[] args) {

        Th obj = new Th();
        obj.start();
        try{
            Thread.sleep(50);
            System.out.println("Sleep done");
        }catch (Exception e){
            System.out.println("Exception occured:\n" + e);
        }
        System.out.println(obj.calculate());

        /*
        System.out.println("Runnables");

        for (int i = 0; i < n; i++){
            Thread obj = new Thread(new Run());
            obj.start();

        }
        */



    }
}