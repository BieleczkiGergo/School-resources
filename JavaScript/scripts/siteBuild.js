let siteBuild = {
    imgWidth : 30,
    imgHeight : 30,
    wrapper : document.getElementById("menubar"),

}

function menuSect(src, dest, text) {
    let wrapper = document.createElement("div");
    wrapper.className = "menu-section-wrapper";

    let icon = new Image();
    icon.src = src;
    icon.className = "menu-icon";
    wrapper.appendChild(icon);

    let p = document.createElement("p");
    p.innerHTML = text;
    p.className = "menu-text";
    wrapper.appendChild(p);

    return wrapper;
}

function createMenuElement(src, dest, text){
    siteBuild.wrapper.appendChild(menuSect(src, dest, text));

}

createMenuElement("pictures/controller.svg", "games.html", "games");
createMenuElement("pictures/test_tube.svg", "experiment.html", "experiments");
createMenuElement("pictures/pencil-brush.svg", "canvas.html", "canvas");