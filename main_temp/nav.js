
let currentSection = ''
let isOnHomeScreen = false;

//detect 
function detectSnappedSection() {
    const sections = document.querySelectorAll("section");
    const sidebar = document.querySelector(".sidebar");

    // Get the current scroll position and viewport height
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = rect.bottom + scrollPosition;

        // Check if the section is at least 50% visible in the viewport
        if (sectionTop <= scrollPosition + (windowHeight / 2) && sectionBottom >= scrollPosition + (windowHeight / 2)) {
            currentSection = section.id;

            if (currentSection === 'home') {
                sidebar.classList.add("hidden");
                isOnHomeScreen = true;
                //window.addEventListener("wheel", disableScroll, { passive: false });

            } else {
                sidebar.classList.remove("hidden");
                isOnHomeScreen = false;
                //window.removeEventListener("wheel", disableScroll);
            }
            return;
        }
    }

    // If no section is snapped, show the sidebar
    sidebar.classList.remove("hidden");
    isOnHomeScreen = false;
}

function resetNameButtonsIfNeeded() {
    setTimeout(() => {
        if (isOnHomeScreen) {
            resetNameButtons();
        }
    }, 500)
}

function disableScroll(event) {
    if (currentSection === 'home') {
        event.preventDefault();
    }
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Attach the function to the scroll event
window.addEventListener("scroll", () => {
    detectSnappedSection();
    resetNameButtonsIfNeeded();
});
// window.addEventListener("scroll", console.log('hello'));



