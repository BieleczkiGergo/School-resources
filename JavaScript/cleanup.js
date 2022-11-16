class cleanup{
    height = 0;
    width = 0;
    house = 0;
    constructor(ID, height=5, width=5){
        this.height = height;
        this.width = width;

        this.house = document.getElementById(ID);

        for(let i=0; i < this.height; i++)
        {
            let row = this.house.insertRow(i);
            for(let j=0; j < this.width; j++)
            {
                let cell = row.insertCell(j);
                cell.className = "cleanup-cell";

                let btn = document.createElement("button");
                btn.className = "cleanup-button " + (Math.random() > 0.5 ? "cleanup-enabled" : "cleanup-disabled");

                btn.onclick = () => {
                    [
                        [i, j],
                        [i-1, j],
                        [i+1, j],
                        [i, j-1],
                        [i, j+1]

                    ].forEach( (pos) => {
                        if(pos[0] < 0 || pos[0] >= height || pos[1] < 0 || pos[1] >= width) return;

                        let el = document.getElementById(ID).rows[pos[0]].cells[pos[1]].childNodes[0];

                        if(el.className == "cleanup-button cleanup-enabled")
                        {   
                            el.className = "cleanup-button cleanup-disabled";

                        }else
                        {
                            el.className = "cleanup-button cleanup-enabled";
                        }
                    })
                }
                cell.appendChild(btn);
            }
        }
    };
}

let cleanupGame = new cleanup("cleanup-host", 7, 7);