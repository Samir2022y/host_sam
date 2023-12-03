document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('Animated-text');
    const textToType = 'Are you?';
    let index = 0;

    function typeText() {
        textElement.textContent += textToType[index];
        index++;

        if (index < textToType.length) {
            setTimeout(typeText, 100); // Adjust the delay as needed
        }
    }

    typeText();
});