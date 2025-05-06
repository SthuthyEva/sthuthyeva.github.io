window.addEventListener('DOMContentLoaded', () => {
    loadSection('home', 'sections/home.html');
    loadSection('projects', 'sections/projects.html');
    loadSection('kaggle', 'sections/kaggle.html');
    loadSection('contact', 'sections/contact.html');
  });
  
  function loadSection(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(err => console.error(`Error loading ${file}:`, err));
  }
  