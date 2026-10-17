// Both pages load the same navigation component after the DOM is parsed.
const navbarContainer = document.getElementById("navbar-placeholder");
if (navbarContainer) {
    fetch("assets/components/navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Unable to load navigation");
            return response.text();
        })
        .then(html => {
            navbarContainer.innerHTML = html;
            const page = location.pathname.split("/").pop() || "index.html";
            navbarContainer.querySelectorAll(".links a").forEach(link => {
                if (link.getAttribute("href").replace("./", "") === page) {
                    link.setAttribute("aria-current", "page");
                    link.parentElement.classList.add("active");
                }
            });
        })
        .catch(error => console.error(error));
}
