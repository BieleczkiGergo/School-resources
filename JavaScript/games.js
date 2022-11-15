laserCanvas = 0;
ctxLaser = 0;
gunPos = 30;

laserObjects = [
    //0: pointer
    [[20, 0], [10, 135], [5, 180], [10, 225]],
]

function gameSetup(ID){
    laserCanvas = document.getElementById(ID);
    ctxLaser = laserCanvas.getContext("2d");
    laserCanvas.addEventListener("keyboard", (event) =>{
        if(event.key == "a") gunpos--;
        if(event.key == "d") gunpos++;
        reDrawLaser();
    })

    reDrawLaser();
}

function reDrawLaser(){
    drawObject(ctxLaser, gunPos, 0, 300, 300);
}

function drawObject(ctx, tilt, objectNum, sx, sy){
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    for(const i of laserObjects[objectNum]){
        ctx.lineTo(sx+(Math.cos((i[0]+tilt)*180/Math.PI))*i[1], sy+(Math.sin((i[0]+tilt)*180/Math.PI))*i[1]);
    }
    ctx.closePath();
    ctx.stroke();

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

gameSetup("game1-canvas");