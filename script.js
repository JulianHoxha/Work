document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const logo = document.querySelector('.logo img'); // Select the logo image

    // Function to handle scrolling and add sticky class to header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');  // Add 'sticky' class to header
            logo.style.maxWidth = '100px';   // Shrink the logo size
        } else {
            header.classList.remove('sticky'); // Remove 'sticky' class when back to top
            logo.style.maxWidth = '300px';     // Restore original logo size
        }
    });
});
