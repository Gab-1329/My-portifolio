document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle

  const menuIcon = document.getElementById("menu-icon");

  const navList = document.querySelector("#navbar ul");

  menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");

    menuIcon.classList.toggle("open");
  });

  document.querySelectorAll("#navbar ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });

  // 2. Dark/Light Mode Toggle

  const themeToggle = document.getElementById("profile-toggle");

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("alt-body-theme");

    const wrapper = document.querySelector(".toggle-wrapper");

    wrapper.style.transform = "scale(1.05)";

    setTimeout(() => (wrapper.style.transform = "scale(1)"), 200);
  });

  // 3. Typewriter Effect

  const textElement = document.getElementById("typewriter-text");

  const fullText =
    "A Full-Stack Web Developer passionate about building clean applications.";

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

  const aboutParagraph = document.querySelector("#about p");

  if (aboutParagraph) {
    aboutParagraph.innerHTML = `I am a Software Engineer student at Arba Minch University. I love solving tricky problems and building websites that look great and work perfectly. My goal is to use clean code to create helpful tools that solve real-world problems.`;
  }

  // 5. Updated Projects (Calculator & To-Do List)

  const projectData = [
    {
      title: "Calculator",

      desc: "Glassmorphism UI with JavaScript logic.",
    },

    {
      title: "To-Do List",

      desc: "MongoDB based productivity tool.",
    },
  ];

  const container = document.getElementById("project-container");

  if (container) {
    container.innerHTML = ""; // Clear existing

    projectData.forEach((project) => {
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

  const ctaBtn = document.getElementById("cta-btn");

  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      const projectsSection = document.getElementById("projects");

      projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 7. Reveal on Scroll

  const revealSections = () => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {
      const windowHeight = window.innerHeight;

      const revealTop = section.getBoundingClientRect().top;

      if (revealTop < windowHeight - 150) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealSections);
});
