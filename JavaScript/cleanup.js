class cleanup{
    height = 0;
    width = 0;
    house = 0;
    constructor(ID, height=5, width=5){
        this.height = height;
        this.width = width;

        this.house = document.getElementById(ID);

        this.fillGrid();

        
    };

    fillGrid(){
        for(let i=0; i < this.height; i++)
        {
            let row = this.house.insertRow(i);
            for(let j=0; j < this.width; j++)
            {
                let cell = row.insertCell(j);
                cell.className = "cleanup-cell";
                
                let btn = this.createButton(i, j, cell);
                cell.appendChild(btn);
            }
        }
    };

    createButton(x, y){
        let btn = document.createElement("button");
        btn.className = "cleanup-button " + (Math.random() > 0.5 ? "cleanup-enabled" : "cleanup-disabled");

        btn.onclick = () => {
            [
                [x, y],
                [x-1, y],
                [x+1, y],
                [x, y-1],
                [x, y+1]

            ].forEach( (pos) => {
                if(pos[0] < 0 || pos[0] >= this.height || pos[1] < 0 || pos[1] >= this.width) return;

                let el = this.house.rows[pos[0]].cells[pos[1]].childNodes[0];

                if(el.className == "cleanup-button cleanup-enabled")
                {   
                    el.className = "cleanup-button cleanup-disabled";

                }else
                {
                    el.className = "cleanup-button cleanup-enabled";
                }
            })
        }
        return btn;
    }


}

let cleanupGame = new cleanup("cleanup-host", 6, 6);