const text = "Aspiring Software Developer & Technology Enthusiast";

const typingElement = document.querySelector(".typing");

let index = 0;
let isDeleting = false;

function typeEffect() {

    if (isDeleting) {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
    } else {
        typingElement.textContent = text.substring(0, index + 1);
        index++;
    }

    let speed = isDeleting ? 50 : 100;

    if (index === text.length) {
        isDeleting = true;
        speed = 1500;
    }

    else if (index === 0) {
        isDeleting = false;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();