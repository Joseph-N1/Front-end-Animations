document.addEventListener('DOMContentLoaded', () => {
    const toggleInput = document.querySelector('.toggle-input');
    toggleInput.addEventListener('change', function() {
        if (this.checked) {
            console.log('Switch is ON');
        } else {
            console.log('Switch is OFF');
        }
    });
});
