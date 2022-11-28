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

        Test1 t = new Test1(){
            @Override
            public int num() {
                return 6;
            }
        };
        System.out.println("" + t.num());
        /*
        System.out.println("Runnables");

        for (int i = 0; i < n; i++){
            Thread obj = new Thread(new Run());
            obj.start();

        }
        */



    }
}