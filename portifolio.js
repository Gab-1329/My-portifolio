// Wait for the DOM (HTML) to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for the CTA Button
    const ctaButton = document.getElementById('cta-btn');
    const projectsSection = document.getElementById('projects');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Simple Navigation Link Highlighting (Optional Logic)
    // This selects all links in our navbar
    const navLinks = document.querySelectorAll('#navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Optional: You could add a console log to track which section is clicked
            console.log(`Navigating to: ${link.textContent}`);
        });
    });

    // 3. Welcome Message
    console.log("Welcome to my portfolio! JavaScript is successfully linked.");
});