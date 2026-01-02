// // Wait for the DOM (HTML) to be fully loaded before running the script
// document.addEventListener('DOMContentLoaded', () => {

//     // 1. Smooth Scroll for the CTA Button
//     const ctaButton = document.getElementById('cta-btn');
//     const projectsSection = document.getElementById('projects');

//     if (ctaButton) {
//         ctaButton.addEventListener('click', () => {
//             projectsSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     }

//     // 2. Simple Navigation Link Highlighting (Optional Logic)
//     // This selects all links in our navbar
//     const navLinks = document.querySelectorAll('#navbar ul li a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             // Optional: You could add a console log to track which section is clicked
//             console.log(`Navigating to: ${link.textContent}`);
//         });
//     });

//     // 3. Welcome Message
//     console.log("Welcome to my portfolio! JavaScript is successfully linked.");
//     // 4. Contact Form Handling
//     const contactForm = document.getElementById('contact-form');

//     if (contactForm) {
//         contactForm.addEventListener('submit', function (e) {
//             // Prevent the default form submission (page reload)
//             e.preventDefault();

//             // Get the values from the input fields
//             const userName = document.getElementById('name').value;
//             const userEmail = document.getElementById('email').value;

//             // For now, we will simulate a successful send
//             // In the future, you can use services like Formspree or EmailJS here
//             alert(`Thank you, ${userName}! Your message has been sent successfully. I will contact you at ${userEmail} soon.`);

//             // Clear the form fields
//             contactForm.reset();
//         });
//     }
//     // 5. Dynamic Projects Data
//     const myProjects = [
//         {
//             title: "E-commerce Site",
//             description: "A fully responsive online store built with HTML, CSS, and JS.",
//             link: "#"
//         },
//         {
//             title: "Weather App",
//             description: "Uses a Fetch API to show real-time weather data.",
//             link: "#"
//         },
//         {
//             title: "Task Manager",
//             description: "A productivity tool to track daily goals and deadlines.",
//             link: "#"
//         }
//     ];

//     function displayProjects() {
//         const projectContainer = document.getElementById('project-container');

//         // Loop through the array and create HTML for each project
//         myProjects.forEach(project => {
//             const card = document.createElement('div');
//             card.classList.add('project-card');

//             card.innerHTML = `
//             <h3>${project.title}</h3>
//             <p>${project.description}</p>
//             <a href="${project.link}" style="color: #00adb5; text-decoration: none; font-weight: bold;">View Project →</a>
//         `;

//             projectContainer.appendChild(card);
//         });
//     }

//     // Call the function inside your DOMContentLoaded listener
//     displayProjects();
//     // // 6. Scroll Reveal Animation
//     function revealOnScroll() {
//         const reveals = document.querySelectorAll('.reveal');

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 // If the element is visible in the viewport
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('active');
//                 }
//             });
//         }, {
//             threshold: 0.1 // Trigger when 10% of the element is visible
//         });

//         reveals.forEach(reveal => {
//             observer.observe(reveal);
//         });
//     }

//     // Call this inside your DOMContentLoaded listener
//     revealOnScroll();
//     // 7. Infinite JavaScript Typewriter Function
//     const textElement = document.getElementById('typewriter-text');
//     const fullText = "A Full-Stack Web Developer passionate about building clean applications.";
//     let index = 0;

//     function typeWriterEffect() {
//         if (index < fullText.length) {
//             // Add the next letter
//             textElement.textContent += fullText.charAt(index);
//             index++;
//             // Wait 50ms before the next letter
//             setTimeout(typeWriterEffect, 50);
//         } else {
//             // The sentence is finished. Wait 2 seconds, then reset.
//             setTimeout(() => {
//                 textElement.textContent = ""; // Clear the text
//                 index = 0;                    // Reset the counter
//                 typeWriterEffect();           // Start over
//             }, 2000); // 2000ms = 2 second pause at the end
//         }
//     }

//     // Call this inside your existing DOMContentLoaded listener
//     typeWriterEffect();
//     // 8. Profile Theme Toggle
//     const profileToggle = document.getElementById('profile-toggle');
//     // const profilePic = document.getElementById('profile-pic');
//     // const header = document.querySelector('header');

//     if (profileToggle) {
//         profileToggle.addEventListener('change', () => {
//             // Toggle classes on the image and the header
//             // Toggle the class on the body element
//             document.body.classList.toggle('alt-body-theme');

//             console.log("Global theme switched!")
//         });

//     }
//     const menuIcon = document.getElementById('menu-icon');
//     const navList = document.getElementById('nav-list');
//     const navLinks = document.querySelectorAll('#navbar ul li a');

//     // Toggle Menu
//     menuIcon.addEventListener('click', () => {
//         navList.classList.toggle('active');

//         // Optional: Animate hamburger to X
//         menuIcon.classList.toggle('toggle-anim');
//     });

//     // Catch click on links to close menu
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             navList.classList.remove('active');
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('#navbar ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Toggle animation for hamburger bars (optional)
        menuIcon.classList.toggle('open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('#navbar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // 2. Dark/Light Mode Toggle
    const themeToggle = document.getElementById('profile-toggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('alt-body-theme');
    });

    // 3. Typewriter Effect Logic
const textElement = document.getElementById('typewriter-text');
const fullText = "A Full-Stack Web Developer passionate about building clean applications.";
let index = 0;

function typeWriterEffect() {
    if (index < fullText.length) {
        // Add the next letter
        textElement.textContent += fullText.charAt(index);
        index++;
        // Wait 50ms before the next letter
        setTimeout(typeWriterEffect, 50);
    } else {
        // The sentence is finished. Wait 2 seconds, then reset.
        setTimeout(() => {
            textElement.textContent = ""; // Clear the text
            index = 0;                    // Reset the counter
            typeWriterEffect();           // Start over
        }, 2000); // 2000ms = 2 second pause at the end
    }
}

// Call this inside your existing DOMContentLoaded listener
typeWriterEffect();
    // 4. Reveal on Scroll Logic
    const revealSections = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(section => {
            const windowHeight = window.innerHeight;
            const revealTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                section.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealSections);

    // 5. Dynamic Project Loading (Example)
    const projectData = [
        { title: "E-Commerce App", desc: "A full-stack React shop." },
        { title: "Dashboard", desc: "Data visualization with D3.js." },
        { title: "Task Manager", desc: "Efficient productivity tool." }
    ];

    const container = document.getElementById('project-container');
    projectData.forEach(project => {
        container.innerHTML += `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <a href="#" style="color: var(--text-accent); text-decoration: none; margin-top: 10px; display: inline-block;">Learn More →</a>
            </div>
        `;
    });
    // Locate the button
    const ctaBtn = document.getElementById('cta-btn');

    // When clicked, scroll to the projects section
    ctaBtn.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
});