// Ensure DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
    <nav id="nav">
        <ul class="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
        </ul>
        <ul class="icons">
            <li><a href="https://github.com/SthuthyEva" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/sthuthy-evangeline-m-8b501b76/" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
            <li><a class="icon fa-file-pdf" href="./assets/resume.pdf" download> Resume </a></li>
        </ul>
    </nav>
    `;

    const navbarContainer = document.getElementById("navbar-placeholder");
    if(navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }

    // Optional: add smooth scroll if needed
    document.querySelectorAll('#nav .links a').forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });
});
