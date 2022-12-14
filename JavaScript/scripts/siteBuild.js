let siteBuild = {
    imgWidth : 30,
    imgHeight : 30,
    wrapper : document.getElementById("menuBar"),

}

let menuVisible = false;

function menuToggle(){
    console.log("function was called");
    let menu = document.getElementById("menuWrapper");
    menu.style.display = (menuVisible ? "" : "none");
    menuVisible = !menuVisible;

}

function menuSect(src, dest, text) {
    let wrapper = document.createElement("li");
    wrapper.className = "menu-section-wrapper menu";

    let icon = new Image();
    icon.src = src;
    icon.className = "menu-icon menu";
    wrapper.appendChild(icon);

    let a = document.createElement("a");
    a.innerHTML = text;
    a.className = "menu-text menu";
    a.href = dest;
    wrapper.appendChild(a);

    return wrapper;
}

function createMenuElement(src, dest, text){
    siteBuild.wrapper.appendChild(menuSect(src, dest, text));

}

[
    ["pictures/controller.svg", "games.html", "games"],
    ["pictures/test_tube.svg", "experiment.html", "experiments"],
    ["pictures/pencil-brush.svg", "canvas.html", "canvas"],
    ["pictures/home.svg", "index.html", "home"],
    ["pictures/DSA.svg", "dsa.html", "DSA"],
    ["pictures/template.svg", "template.html", "template"],
    
].forEach(data => {
    createMenuElement(data[0], data[1], data[2]);

});