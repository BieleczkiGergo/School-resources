




let knTree = {
    pointC : 30,
    pointRange : [0, 300, 0, 150],
    points : [],
    cursor : [0, 0],
    pointSize : 2,

    canvas : 0,
    ctx : 0,

    outPut : 0,

    setup(){
        this.canvas = document.getElementById("knTree-canvas");
        ctx = this.canvas.getContext("2d");

    },

    setPoint(){
        this.cursor[0] = document.getElementById("knTree-X").value;
        this.cursor[1] = document.getElementById("knTree-Y").value;
        this.reDraw();

    },

    genPoints(){
        this.points = [];
        for(let i=0; i<this.pointC; i++){
            this.points.append([Math.random()*this.pointRange[1] +this.pointRange[0], Math.random()*this.pointRange[3] +this.pointRange[2]]);

        }

    },

    reDraw(){
        console.log("function called");

        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.cursor[0], this.cursor[1], this.pointSize, this.pointSize);

        for(let i=0; i<this.pointC; i++){
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(this.points[i][0], this.points[i][1], this.pointSize, this.pointSize);

        }

    },

}

knTree.setup();