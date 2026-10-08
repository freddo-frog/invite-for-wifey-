const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const yesMessage = document.getElementById("yes-message");


const noTexts = ["No", ":(", "SOOOOOO STINKY EWW", "so u hate me..", "and u wanna break up???"];
let attempts = 0;

function moveNoButton() {
    // Switch to fixed positioning on first dodge so it can go anywhere on screen
    noBtn.style.position = "fixed";

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    noBtn.style.left = Math.max(padding, Math.random() * maxX) + "px";
    noBtn.style.top = Math.max(padding, Math.random() * maxY) + "px";

    attempts++;
    noBtn.textContent = noTexts[attempts % noTexts.length];
}

// Desktop: dodge when the mouse gets on it
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile: dodge when tapped, before the click registers
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// Fallback (e.g. keyboard Enter/Space): never actually say no
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener("click", () => {
    noBtn.remove();
    yesBtn.remove();
    yesMessage.hidden = false;
});
