
let ctxCurve = 0;

function setup(){
    let canvas = document.getElementById("bezier-cut-canvas");
    ctxCurve = canvas.getContext("2d");

}

function bezierCutRefresh(){
    let curve = [50, 50, 100, 125, 175, 25, 250, 50];
    let front = parseInt( document.getElementById("bezier-cut-range-f").value ) / 100;
    let back = 1- parseInt( document.getElementById("bezier-cut-range-b").value ) / 100;
    //back = (1 / front) * back;
    //front*back + (1-front)*back
    ctxCurve.fillStyle = "white";
    ctxCurve.fillRect(0, 0, 300, 150);

    
    let temp = bezierSlice(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], front);
    temp = bezierSlice(temp[6], temp[7], temp[4], temp[5], temp[2], temp[3], temp[0], temp[1], back);

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


//setup();
//bezierCutRefresh();

let v = [1, 2, 3, 4, 5];
console.log(v.reduce((r, i) => r+i))

console.log(markPoint.name);
console.log(typeof(null));

function Phrog(type){
    this.type = type;

}

frog = new Phrog("Red");
console.log(typeof(frog));
console.log(frog.type);

let a = 1
let b = 2
let myPromise = new Promise((resolve, reject) => {
    if(a+b == 3){
        resolve("Resolved");

    }else{
        reject("Rejected");

    }
})

let myPromise2 = myPromise.then(text => {
    console.log(text);
    return "String of success";

}, text => {
    console.log(text);
    throw new Error("oops");

})

myPromise2.then( text => {
    console.log("2nd promise resolved | " + text);

}).catch( text => {
    console.log("2nd promise rejected | " + text);

})

let promises = [myPromise, myPromise2]
Promise.all(promises).then(() =>{
    console.log("All promises were resolved")
}, () =>{
    console.log("At least one promise was rejected")
})

function* collatz(val=0){
    while(val != 2){

        yield val;

        if(val%2 == 1){
            val = (3*val) +1;

        }else{
            val /= 2;

        }

    }
    return val;
}

let i = 0;

function getCollatz(x){
    i=0;
    for (const num of collatz(x)){
        console.log(i + ": " + num);
        i++;
    
    }
    i++;
    console.log("Finished in " + i + " steps");

    return i;
}

