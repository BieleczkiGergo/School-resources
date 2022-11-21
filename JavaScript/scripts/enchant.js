class enchant{
    charset = "abcdefghijklmnopqrstuvxyz";
    rows = 5;
    cols = 5;
    table = "";
    target = "";
    targetChar = 0;
    read = true;
    cells = [];
    correct = [0, 0];
    buttons = {
        restart : 0,
        mode : 0,
    }

    constructor( table, target, resbtn, modebtn ){
        this.table = document.getElementById(table);
        this.target = document.getElementById(target);
        this.buttons.restart = document.getElementById(resbtn);
        this.buttons.mode = document.getElementById(modebtn);
        
        this.fillTable();
        this.targetChar = Math.floor(Math.random()*this.charset.length);
        this.correct = [Math.floor(Math.random()*this.rows), Math.floor(Math.random()*this.cols)];
        this.fillChars();
        this.target.className = (this.read ? "enchantFont" : "");
        this.target.innerText = this.charset.charAt(this.targetChar).toUpperCase();

        this.buttons.restart.onclick = () =>{
            this.targetChar = Math.floor(Math.random()*this.charset.length);
            this.target.innerText = this.charset.charAt(this.targetChar).toUpperCase();
            this.fillTable();
            this.fillChars();
        };
        this.buttons.mode.onclick = () => {
            this.read = !this.read;
            this.buttons.restart.click();
            this.target.className = (this.read ? "enchantFont" : "");
        };

    };

    fillTable(){
        this.table.innerHTML = "";
        this.cells = [];
        for(let i=0; i<this.rows; i++){
            let row = document.createElement("tr");
            this.cells.push([]);

            for(let j=0; j<this.cols; j++){
                let col = document.createElement("td");
                col.className = "enchantCard" + (this.read ? "" : " enchantFont");
                col.onclick = () =>{
                    if(col.innerText == this.charset.charAt(this.targetChar)){
                        col.className += " enchantCorrect";
                    }else{
                        col.className += " enchantWrong";
                        this.reveal();
                    }
                }

                row.appendChild(col);
                this.cells[i].push(col);


            }
            this.table.appendChild(row);
        }
    };

    reveal(){
        this.table.rows[this.correct[0]].cells[this.correct[1]].className += " enchantCorrect";

    };

    fillChars(){
        for(let i=0; i<this.rows; i++){
            for(let j=0; j<this.cols; j++){
                this.cells[i][j].innerText = this.charset.charAt(Math.floor(Math.random()*this.charset.length));

            }
        }
        this.cells[this.correct[0]][this.correct[1]].innerText = this.charset.charAt(this.targetChar);

    };

}

let enchantGame = new enchant("enchant-options", "enchant-example", "enchantReset", "enchantFlipMode");