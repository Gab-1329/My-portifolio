document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('#navbar ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('open');
    });

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

    // 3. Typewriter Effect
    const textElement = document.getElementById('typewriter-text');
    const fullText = "A Full-Stack Web Developer passionate about building clean applications.";
    let index = 0;

    function typeWriterEffect() {
        if (index < fullText.length) {
            textElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeWriterEffect, 100);
        } else {
            setTimeout(() => {
                textElement.textContent = ""; 
                index = 0;
                typeWriterEffect();
            }, 2000);
        }
    }
    typeWriterEffect();

    // 4. About Me & Project Data Update
    const aboutParagraph = document.querySelector('#about p');
    if(aboutParagraph) {
        aboutParagraph.innerHTML = `I am a dedicated <strong>Software Engineer</strong> and a proud graduate of <strong>Arba Minch University</strong>. 
        With a strong foundation in algorithmic problem-solving and modern web technologies, I strive to bridge the gap between complex backend logic 
        and intuitive user interfaces. I am passionate about creating software that is not only functional but also contributes to solving real-world challenges through clean, maintainable code.`;
    }

    // 5. Updated Projects (Calculator & To-Do List)
    const projectData = [
        { 
            title: "E-Commerce App", 
            desc: "A full-featured shopping platform with integrated cart functionality and responsive design." 
        },
        { 
            title: "Calculator", 
            desc: "A sleek, glassmorphism-style calculator capable of handling complex arithmetic with a clean UI." 
        },
        { 
            title: "To-Do List", 
            desc: "A productivity tool featuring local storage persistence, task categorization, and an intuitive drag-and-drop interface." 
        }
    ];

    const container = document.getElementById('project-container');
    if(container) {
        container.innerHTML = ""; // Clear existing
        projectData.forEach(project => {
            container.innerHTML += `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <a href="#" style="color: var(--text-accent); text-decoration: none; margin-top: 10px; display: inline-block; font-weight: bold;">View Project →</a>
                </div>
            `;
        });
    }

    // 6. Smooth Scroll
    const ctaBtn = document.getElementById('cta-btn');
    if(ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            const projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 7. Reveal on Scroll
    const revealSections = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(section => {
            const windowHeight = window.innerHeight;
            const revealTop = section.getBoundingClientRect().top;
            if (revealTop < windowHeight - 150) {
                section.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealSections);
});
