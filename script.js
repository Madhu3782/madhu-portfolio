// List of titles to cycle through
const professions = ["Java Developer", "Full-Stack Learner", "Web Developer", "Programmer"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;    // Speed of typing (ms)
const erasingSpeed = 50;     // Speed of erasing (ms)
const delayBeforeNext = 1500; // Delay before starting the next text (ms)

const textElement = document.querySelector('.text-animate');

function type() {
    const currentText = professions[textIndex];
    
    if (charIndex < currentText.length) {
        textElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        // Text is fully typed, start erasing after a delay
        setTimeout(erase, delayBeforeNext);
    }
}

function erase() {
    const currentText = professions[textIndex];
    
    if (charIndex > 0) {
        // Remove the last character
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        // Text is fully erased, move to the next text in the array
        textIndex = (textIndex + 1) % professions.length;
        // Start typing the next text
        setTimeout(type, typingSpeed);
    }
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Wait briefly before starting the first type cycle
    setTimeout(type, 500);
});