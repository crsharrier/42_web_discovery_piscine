const davidButton = document.getElementById("davidButton");
const christianButton = document.getElementById("christianButton");

const davidButtonPos = ['50%', '40%'];
const christianButtonPos = ['50%', '60%'];

resetNameButtons();

function clickDavid() {
    moveNameButton("davidButton")
    scrollToSection('about');
}

function clickChristian() {
    moveNameButton("christianButton")
    scrollToSection('about');
}

function moveNameButton(nameButtonId) {
    const button = document.getElementById(nameButtonId);
    const destination = document.getElementById("gapForName");
    const destPosition = destination.getBoundingClientRect();
    const parentElement = button.parentNode;

    // Apply the new position with a CSS transition

    button.style.top = `${destPosition.top}px`;
    button.style.left = `${destPosition.left}px`;


    // Disable the onclick event after clicking the button
    button.onclick = null;
}



function resetNameButtons() {
    davidButton.style.top = davidButtonPos[0];
    davidButton.style.left = davidButtonPos[1];
    christianButton.style.top = christianButtonPos[0];
    christianButton.style.left = christianButtonPos[1];

    for (let button of [davidButton, christianButton]){
        button.style.position = "absolute";
    }

    davidButton.onclick = clickDavid
    christianButton.onclick = clickChristian

}