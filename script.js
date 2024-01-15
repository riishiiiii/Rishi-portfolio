const textContainer = document.getElementById('text-container');
const texts = [
    'Python developer',
    'AI Enthusiast',    
];

let currentTextIndex = 0;
let currentCharIndex = 0;

function updateText() {
    const currentText = texts[currentTextIndex];
    textContainer.textContent = currentText.substring(0, currentCharIndex);
    currentCharIndex++;

    if (currentCharIndex > currentText.length) {
        currentCharIndex = 0;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
}

// Set interval to update text every 100 milliseconds
setInterval(updateText, 150);
