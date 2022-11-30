class enchant1{
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

class enchant2{
    charset = "abcdefghijklmnopqrstuvxyz";
    len = 20;
    house = 0;
    input = 0;
    targetStr = "";
    constructor(house){
        this.house = document.getElementById(house + "-in");
        this.input = document.getElementById(house + "-sample");
        
        this.fillChars();

    }

    setBack(){
        this.input.className = "";
    }

    validate(){
        console.log("Event was called");
            if(this.targetStr.includes(this.input.value)){
                this.input.className = "correct";
                setTimeout(this.setBack, 200);

            }else{
                while(!this.targetStr.includes(this.input.value)){
                    let val = String(this.input.value);
                    this.input.value = val.substring(0, val.length-2);

                }
                this.input.className = "wrong";
                setTimeout(this.setBack, 200);

            }
    }

    fillChars(){
        for(let i=0; i<this.len; i++){
            this.targetStr += this.charset.charAt(
                Math.random()*this.charset.length
            );

        }
        console.log(this.targetStr);
        this.input.innerHTML = this.targetStr;
    }

}

let enchantGame = new enchant1("enchant-options", "enchant-example", "enchantReset", "enchantFlipMode");
let enchantType = new enchant2("enchant2");
