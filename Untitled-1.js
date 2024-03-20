
function increaseFontSize() {
    document.body.style.fontSize = "1.2em";
}

function decreaseFontSize() {
    document.body.style.fontSize = "0.8em";
}

function resetFontSize() {
    document.body.style.fontSize = "1em";
}
var colorsInverted = false;


function invertColors() {
    var body = document.body;
    var header = document.querySelector("header");
    var buttons = document.querySelectorAll("button");

    if (!colorsInverted) {
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";

        header.style.backgroundColor = "#000";
        header.style.color = "#fff";

        buttons.forEach(button => {
            button.style.backgroundColor = "#000";
            button.style.color = "#fff";
        });

        colorsInverted = true;
    } else {
        body.style.backgroundColor = "#333";
        body.style.color = "#fff";

        header.style.backgroundColor = "#333";
        header.style.color = "#fff";

        buttons.forEach(button => {
            button.style.backgroundColor = "#333";
            button.style.color = "#fff";
        });

        colorsInverted = false;
    }
}
