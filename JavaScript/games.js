class laser {
    canvas = 0;
    ctx = 0;
    gunPos = 0;
    objects = [
        //0: pointer
        [[15, 0], [10, 135], [5, 180], [10, 225]],
        //1: square
        [[15, 135], [15, 45], [15, 315], [15, 225]],
    ];
    activeObjects = [];

    constructor (ID) {
        this.canvas = document.getElementById(ID);
        this.ctx = this.canvas.getContext("2d");

        document.body.addEventListener("keydown", event =>{
            if(event.key == "a") this.gunPos-=5;
            if(event.key == "d") this.gunPos+=5;
            if(event.key == "a" || event.key == "d"){
                this.reDraw();
            }
        });
        this.reDraw();
    };

    //Redraw entire canvas

    reDraw () {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, 750, 750);

        this.drawObject(0, this.gunPos, 375, 375, 1, "#0047b3");
        this.drawObject(1, 0, 30, 30);
    };

    drawObject (objectNum, tilt, sx, sy, size=1, fillStyle="white", strokeStyle="black", borderWidth=1) {
        this.ctx.beginPath();
        this.ctx.moveTo(
            sx+(Math.cos((this.objects[objectNum][0][1]+tilt)*Math.PI/180))*this.objects[objectNum][0][0]*size,
            sy+(Math.sin((this.objects[objectNum][0][1]+tilt)*Math.PI/180))*this.objects[objectNum][0][0]*size
        );

        for(let i = 1; i < this.objects[objectNum].length; i++){
            this.ctx.lineTo(
                sx+(Math.cos((this.objects[objectNum][i][1]+tilt)*Math.PI/180))*this.objects[objectNum][i][0]*size,
                sy+(Math.sin((this.objects[objectNum][i][1]+tilt)*Math.PI/180))*this.objects[objectNum][i][0]*size
            );
        }
        this.ctx.closePath();
        this.ctx.fillStyle = fillStyle;
        this.ctx.strokeStyle = strokeStyle;
        this.ctx.lineWidth = borderWidth;
        this.ctx.fill();
        this.ctx.stroke();
    };

}

/*
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
*/
laserGame = new laser("game1-canvas");