class cleanup{
    height = 20;
    width = 20;
    house = 0;
    constructor(ID){
        this.house = document.getElementById(ID);
        for(let i=0; i < this.height; i++){
            let row = this.house.insertRow(i);
            for(let j=0; j < this.width; j++){
                let cell = row.insertCell(j);
                cell.className = "cleanup-cell";

                let btn = document.createElement("button");
                btn.className = "cleanup-button cleanup-disabled";
                btn.onclick = function(){
                    let cl = document.getElementById(ID).rows[i].cells[j].childNodes[0];
                    if(cl.className == "cleanup-button cleanup-enabled"){
                        cl.className = "cleanup-button cleanup-disabled";

                    }else{
                        cl.className = "cleanup-button cleanup-enabled";
                    }
                }
                cell.appendChild(btn);
            }
        }
    };
}

let cleanupGame = new cleanup("cleanup");