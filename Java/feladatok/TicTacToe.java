import java.util.Scanner;


//Bolondbiztosság is szempont volt
class TicTacToe{

    public static void main(String[] args) {
        char[][] grid = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
        boolean run = false;
        boolean next = true;
        boolean win = false;
        Scanner choice = new Scanner(System.in);
        byte steps = 0;

        while(!run){
            //Kirajzolja a táblát
            System.out.println("");
            for(int i=0; i<3; i++){
                for(int j=0; j<3; j++){
                    System.out.print(" " + (grid[i][j] != ' ' ? grid[i][j] : String.valueOf(i*3+j+1)) + (j != 2 ? " |" : " "));

                }
                if(i != 2) System.out.println("\n---+---+---");

            }
            //Megnézi, nyert-e valaki
            {
                /*
                Ha így írom, csupasz kapcsos zárójelekbe, lényegében
                semmi nem történik, viszont összecsukható lesz VSCode-ban
                */
                if(grid[1][1] == grid[0][0] && grid[1][1] != ' ') win = grid[0][0] == grid[2][2];
                if(!win && grid[1][1] == grid[0][1] && grid[1][1] != ' ') win = grid[0][1] == grid[2][1];
                if(!win && grid[1][1] == grid[0][2] && grid[1][1] != ' ') win = grid[0][2] == grid[2][0];
                if(!win && grid[1][1] == grid[1][0] && grid[1][1] != ' ') win = grid[1][0] == grid[1][2];
                if(!win && grid[0][0] == grid[0][1] && grid[0][0] != ' ') win = grid[0][1] == grid[0][2];
                if(!win && grid[2][0] == grid[2][1] && grid[2][0] != ' ') win = grid[2][1] == grid[2][2];
                if(!win && grid[0][0] == grid[1][0] && grid[0][0] != ' ') win = grid[1][0] == grid[2][0];
                if(!win && grid[0][2] == grid[1][2] && grid[0][2] != ' ') win = grid[1][2] == grid[2][2];
            }

            //Ha nyert, megkérdezi akarunk-e újat
            int num;
            if(steps == 9 || win){
                if(win) System.out.println("\n" + (next ? "2" : "1") + ". játékos nyert");
                else System.out.println("Senki se nyert!");
                System.out.print("\nÚj játék (i/n): ");
                boolean t1 = true;
                //Leellenőrzi a bekért értéket
                //Csak tudnám, ezt miért nem engedi összecsukni
                while(t1)
                    switch (choice.next().charAt(0)) {
                        case 'i':
                            for(int i=0; i<9 ;i++) grid[i/3][i%3] = ' ';
                            steps = 0;
                            t1 = false;
                            win = false;
                            next = true;
                            break;
                
                        case 'n':
                            run = true;
                            t1 = false;
                            break;
                        default:
                            System.out.println("Rossz érték");
                            break;
                    }
            }else/*ha nem, bekéri a következő számot*/{
                boolean t1 = true;
                while(t1){
                    System.out.print("\n" + (next ? "1" : "2") + ". játékos következik(1-9):");
                    num = choice.nextInt()-1;
                    if(num>=0 && num <=8 && grid[num/3][num%3] == ' '){
                        grid[num/3][num%3] = (next ? 'X' : 'O');
                        next = !next;
                        steps++;
                        t1 = false;

                    }else{
                        System.out.println("Helytelen érték.");
                    }

                }

            }
        }
        
        choice.close();
    }
}