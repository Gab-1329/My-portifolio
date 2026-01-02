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
    // 4. Contact Form Handling
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // Prevent the default form submission (page reload)
            e.preventDefault();

            // Get the values from the input fields
            const userName = document.getElementById('name').value;
            const userEmail = document.getElementById('email').value;

            // For now, we will simulate a successful send
            // In the future, you can use services like Formspree or EmailJS here
            alert(`Thank you, ${userName}! Your message has been sent successfully. I will contact you at ${userEmail} soon.`);

            // Clear the form fields
            contactForm.reset();
        });
    }
    // 5. Dynamic Projects Data
    const myProjects = [
        {
            title: "E-commerce Site",
            description: "A fully responsive online store built with HTML, CSS, and JS.",
            link: "#"
        },
        {
            title: "Weather App",
            description: "Uses a Fetch API to show real-time weather data.",
            link: "#"
        },
        {
            title: "Task Manager",
            description: "A productivity tool to track daily goals and deadlines.",
            link: "#"
        }
    ];

    function displayProjects() {
        const projectContainer = document.getElementById('project-container');

        // Loop through the array and create HTML for each project
        myProjects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');

            card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" style="color: #00adb5; text-decoration: none; font-weight: bold;">View Project →</a>
        `;

            projectContainer.appendChild(card);
        });
    }

    // Call the function inside your DOMContentLoaded listener
    displayProjects();
    // 6. Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// Call this inside your DOMContentLoaded listener
revealOnScroll();
});