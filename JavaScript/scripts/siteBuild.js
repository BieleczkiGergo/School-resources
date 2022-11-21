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

    let a = document.createElement("a");
    a.innerHTML = text;
    a.className = "menu-text";
    a.href = dest;
    wrapper.appendChild(a);

    return wrapper;
}

function createMenuElement(src, dest, text){
    siteBuild.wrapper.appendChild(menuSect(src, dest, text));

}



createMenuElement("pictures/controller.svg", "games.html", "games");
createMenuElement("pictures/test_tube.svg", "experiment.html", "experiments");
createMenuElement("pictures/pencil-brush.svg", "canvas.html", "canvas");
createMenuElement("pictures/home.svg", "index.html", "home");
createMenuElement("pictures/template.svg", "template.html", "template")