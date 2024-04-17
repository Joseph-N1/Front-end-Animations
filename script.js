document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let timeout; // Variable to store the timeout

        card.addEventListener('mouseenter', () => {
            // Start a timeout to show content after 1.8 seconds
            timeout = setTimeout(() => {
                card.querySelector('.content').classList.add('show');
            }, 1800);
        });

        card.addEventListener('mouseleave', () => {
            // Clear the timeout if the user leaves before 1.8 seconds
            clearTimeout(timeout);
            card.querySelector('.content').classList.remove('show');
        });

        // Click functionality remains the same
        card.addEventListener('click', () => {
            const content = card.querySelector('.content');
            content.classList.toggle('show');
        });
    });
});
