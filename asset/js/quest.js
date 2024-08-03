document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const questContainer = document.querySelector('.quest-container');
            if (questContainer) {
                questContainer.style.display = 'none';
            }
        });
    }
});
