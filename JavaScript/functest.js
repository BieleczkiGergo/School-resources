
let ctxCurve = 0;

function setup(){
    let canvas = document.getElementById("bezier-cut-canvas");
    ctxCurve = canvas.getContext("2d");

}

function bezierCutRefresh(){
    let curve = [50, 50, 100, 125, 175, 25, 250, 50];
    let value = parseInt( document.getElementById("bezier-cut-range").value ) / 100;

    ctxCurve.fillStyle = "white";
    ctxCurve.fillRect(0, 0, 300, 150);

    
    let temp = bezierSlice(...curve, value); 
    markPoint(temp[0], temp[1]);
    markPoint(temp[2], temp[3]);
    markPoint(temp[4], temp[5]);
    markPoint(temp[6], temp[7]);
    
    ctxCurve.beginPath();
    ctxCurve.moveTo(...curve.slice(0, 2));
    ctxCurve.bezierCurveTo(...curve.slice(2));
    ctxCurve.strokeStyle = "black";
    ctxCurve.lineWidth = 1;
    ctxCurve.stroke();
    ctxCurve.closePath();

    ctxCurve.beginPath();
    ctxCurve.strokeStyle = "green";
    ctxCurve.lineWidth = 5;
    ctxCurve.moveTo(temp[0], temp[1]);
    ctxCurve.bezierCurveTo(...temp.slice(2));
    ctxCurve.stroke();
    ctxCurve.closePath();
}

function bezierSlice(sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey, t){

    return [
        //Starting coordinates
        sx, 
        sy,
        //p1 coordinates
        (1-t)*sx + t*cp1x,
        (1-t)*sy + t*cp1y,
        //p2 coordinates
        Math.pow(1-t, 2)*sx + 2*t*(1-t)*cp1x + Math.pow(t, 2)*cp2x,
        Math.pow(1-t, 2)*sy + 2*t*(1-t)*cp1y + Math.pow(t, 2)*cp2y,
        //end coordinates
        Math.pow(1-t, 3)*sx + 3*Math.pow(1-t, 2)*t*cp1x + 3*(1-t)*Math.pow(t, 2)*cp2x + Math.pow(t, 3)*ex,
        Math.pow(1-t, 3)*sy + 3*Math.pow(1-t, 2)*t*cp1y + 3*(1-t)*Math.pow(t, 2)*cp2y + Math.pow(t, 3)*ey,
    ]
}

function markPoint(x, y){
    size = 5;
    ctxCurve.fillStyle = "red";
    ctxCurve.fillRect(x-size, y-size, size, size);
}


setup();
bezierCutRefresh();

let v = [1, 2, 3, 4, 5];
console.log(v.reduce((r, i) => r+i))

console.log(markPoint.name);