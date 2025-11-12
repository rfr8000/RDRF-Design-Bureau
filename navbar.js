document.addEventListener("DOMContentLoaded", () => {
  const mount = document.querySelector("navbar-component");
  if (!mount) return; // safety guard

  fetch("navbar.html") // <-- adjust this path to where your navbar.html really is
    .then(res => res.text())
    .then(html => {
      mount.innerHTML = html;
    })
    .catch(err => console.error("Navbar failed to load:", err));
});

