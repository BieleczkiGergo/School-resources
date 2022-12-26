function radians(deg){
    return deg*Math.PI/180;
}

let canvas = document.getElementById("canvas1");
if(canvas.getContext){
    var ctx = canvas.getContext("2d");

}else{

    document.getElementById("canvas1-exc").innerHTML = "";
    
}

let logos = [
    //0 = Draw sprite 1
    (x, y) => {
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(x, y, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect(x+20, y+20, 50, 50);

        ctx.fillStyle = "rgb(0, 0 255)";
        ctx.strokeRect(x+15, y+15, 60, 60);

        ctx.clearRect(x+25, y+25, 20, 20);
    },

    //1 = Draw sprite 2
    (x, y) => {
        ctx.fillStyle = "rgb(88, 47, 130)";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y+60);
        ctx.lineTo(x+60, y+30);
        ctx.closePath();
        ctx.fill();

        //ctx.beginPath();
        ctx.moveTo(x-5, y-5);
        ctx.lineTo(x-5, y+65);
        ctx.lineTo(x+65, y+30);
        ctx.closePath();
        ctx.stroke();

    },

    //2 = Draw sprite 3
    (x, y) => {
        
        ctx.beginPath();
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.arc(x+15, y+15, 20, 0, 2*Math.PI, false);
        ctx.fill();
        
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 255, 0, 0.75)";
        ctx.arc(x, y, 20, 0, 2*Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.arc(x+15, y+15, 5, 0, 2*Math.PI, false);
        ctx.fill();

    },

    //3 = Draw sprite 4
    //Doesn't work
    (x, y) => {
        console.log("Sprite 4 was attempted to be drawn");
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arcTo(x, y, x+25, y, 40);
        ctx.stroke();

    },

    //4 = Draw sprite 5 (naruto)
    //Doesn't work
    (x, y) => {
        let img = new Image();
        img.addEventListener('load', () => {
            ctx.drawImage(img, x, y, 100, 100);

        }, false);
        img.src = "pictures/naruto-uzumaki.svg";

    },

    //5 = Draw sprite 6 (rinnegan)
    (x, y) => {
        ctx.moveTo(x, y);
        ctx.fillStyle = "#c7b5cc";
        ctx.strokeStyle = "#000000";

        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2, false);
        ctx.fillStyle = "#402262";
        ctx.fill();
    },

    //6 = Draw sprite 7 (junctions)
    (x, y) => {
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 10;
        ctx.lineJoin = "round";
        ctx.moveTo(x, y);
        ctx.lineTo(x+40, y+15);
        ctx.lineTo(x, y+30);
        ctx,moveTo(x+20, y-10);
        ctx.lineTo(x+20, y+40);
        ctx.closePath();
        ctx.stroke();
        
        
    },
    
    //7 = Draw sprite 8 (pylon)
    //Biggest one yet
    (x, y) => {

        let gradient2 = ctx.createLinearGradient(x+30, y-15, x+50, y+85);
        gradient2.addColorStop(0, "#ff8c1a");
        gradient2.addColorStop(0.25, "#b35900");
        gradient2.addColorStop(1, "#0c3300");
    
        ctx.beginPath();
        ctx.fillStyle = gradient2;
        ctx.moveTo(x-40, y-30);
        ctx.lineTo(x+120, y-30);
        ctx.lineTo(y+120, y+100);
        ctx.lineTo(x-40, y+100);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#336699";
        ctx.moveTo(x, y);
        ctx.lineTo(x+40, y-15);
        ctx.lineTo(x+80, y);
        ctx.lineTo(x+40, y+15);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#204060";
        ctx.moveTo(x, y);
        ctx.lineTo(x+40, y+15);
        ctx.lineTo(x+40, y+85);
        ctx.lineTo(x, y+70);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#19334d";
        ctx.moveTo(x+40, y+15);
        ctx.lineTo(x+80, y);
        ctx.lineTo(x+80, y+70);
        ctx.lineTo(x+40, y+85);
        ctx.closePath();
        ctx.fill();

        let gradient = ctx.createLinearGradient(x+40, y-15, x+40, y+85);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 127)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.moveTo(x, y);
        ctx.lineTo(x+40, y-15);
        ctx.lineTo(x+80, y);
        ctx.lineTo(x+80, y+70);
        ctx.lineTo(x+40, y+85);
        ctx.lineTo(x, y+70);
        ctx.closePath();
        ctx.fill();


    },

    //8 = Draw sprite 9 (text)
    (x, y) => {
        ctx.font = "24px gang-of-three";
        ctx.fillText("Henlo, world!", x, y);
    }
]

function draw() {
    logos[4](40, 40);
    //logos[4](200, 20);

}

let BRANCHES = 8;
let CURVE = 14;
let TreeCanvas = document.getElementById("treeCanvas");
let Treectx = TreeCanvas.getContext("2d");

function colorPipe(n){
    function mixColors(a, b, t){
        return [
            a[0]*(1-t) + b[0]*t,
            a[1]*(1-t) + b[1]*t,
            a[2]*(1-t) + b[2]*t
        ]
    }
    let color = mixColors([00, 00, 153], [204, 00, 255], n/BRANCHES);
    color = Math.round(color[0]).toString(16).padStart(2, 0) +
            Math.round(color[1]).toString(16).padStart(2, 0) +
            Math.round(color[2]).toString(16).padStart(2, 0);
    console.log(color);

    return "#" + color;
}

function drawTree(){
    for(let t=0; t < (Math.pow(2, BRANCHES)); t++)
    {
        let pos = [300, 200];
        for(let i=0; i<BRANCHES; i++)
        {
            Treectx.beginPath();
            Treectx.moveTo(pos[0], pos[1]);
            Treectx.strokeStyle = colorPipe(i);
            Treectx.lineWidth = 3;

            let size = 30;
            let angle = 90 - (i*CURVE);

            pos[0] +=
                size *
                Math.cos(radians(angle)) *
                ( t&Math.pow(2, i) ? -1 : 1 );
            pos[1] -=
                size *
                Math.sin(radians(angle));
            

            Treectx.lineTo(pos[0], pos[1]);
            Treectx.stroke();
            Treectx.closePath();
        }
        
    }
}
