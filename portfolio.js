document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
        animateOnScroll.observe(section);
    });
});

  const aboutLines = [
    "ali.akber@fsociety:~$ ssh root@10.0.3.77",
    "Connecting to 10.0.3.77...",
    "Connection established.",
    "root@compromised-server:~# ls -la /var/data",
    "total 12",
    "-rw-r--r-- 1 root root  4096 Jul 20  about_me.dat",
    "root@compromised-server:~# cat about_me.dat",
    "",    
    "Name: Ali Akber Khan",
    "Role: DevSecOps Engineer",
    "Experience: 2+ years securing CI/CD pipelines & Cloud and On-Premises infrastructure.",
    "",
    "Specialties:",
    "- Kubernetes Hardening",
    "- Infrastructure as Code (Terraform, Helm)",
    "- Cloud Security Posture Management (Azure, AWS)",
    "- Secure SDLC, SAST/DAST, SBOMs",
    "",
    "Mission:",
    "To embed security into DevOps without slowing innovation.",
    "",  
    "root@compromised-server:~# exit",
    "Connection closed by 10.0.3.77",
    "ali.akber@fsociety:~$"
  ];

  const terminalAbout = document.getElementById("typed-about");
  let aboutLineIndex = 0;
  let aboutCharIndex = 0;

  function typeAbout() {
    if (aboutLineIndex >= aboutLines.length) return;

    const line = aboutLines[aboutLineIndex];
    terminalAbout.textContent += line.charAt(aboutCharIndex);
    aboutCharIndex++;

    if (aboutCharIndex < line.length) {
      setTimeout(typeAbout, 30);
    } else {
      terminalAbout.textContent += "\n";
      aboutLineIndex++;
      aboutCharIndex = 0;
      setTimeout(typeAbout, 400);
    }
  }

  window.addEventListener("load", typeAbout);



