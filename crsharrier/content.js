const davidButton = document.getElementById("davidButton");
const christianButton = document.getElementById("christianButton");

resetNameButtons();

function clickDavid() {
    moveNameButton("davidButton")
    scrollToSection('about');
}

function clickChristian() {
    moveNameButton("christianButton")
    scrollToSection('about');
}

function resetNameButtons() {
    const daveDest = document.getElementById("origDave");
    const daveDestPosition = daveDest.getBoundingClientRect();

    const chrisDest = document.getElementById("origChris");
    const chrisDestPosition = chrisDest.getBoundingClientRect();

    // Apply the new position with a CSS transition
    davidButton.style.top = `${daveDestPosition.top}px`;
    davidButton.style.left = `${daveDestPosition.left}px`;
    christianButton.style.top = `${chrisDestPosition.top}px`;
    christianButton.style.left = `${chrisDestPosition.left}px`;

    davidButton.style.display = 'block'
    davidButton.disabled = false
    christianButton.style.display = 'block'
    christianButton.disabled = false

    davidButton.onclick = clickDavid
    christianButton.onclick = clickChristian
}



function moveNameButton(nameButton) {
    const gapForName = document.getElementById('gapForName')
    const gapForNamePosition = gapForName.getBoundingClientRect();
    const selectedButton = document.getElementById(nameButton)

    selectedButton.style.top = `${gapForNamePosition.top}px`;
    selectedButton.style.left = `${gapForNamePosition.left}px`;

    let otherButton = ''

    if (nameButton === 'davidButton') {
        otherButton = christianButton
    } else {
        otherButton = davidButton
    }

    otherButton.style.display = 'none';
    otherButton.disabled = 'true';

    for (let button of [davidButton, christianButton]) {
        button.style.position = "absolute";
    }

    // Disable the onclick event after clicking the button
    davidButton.onclick = null;
}