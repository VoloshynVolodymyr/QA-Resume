function set_active_link() {
  const navLinks = document.querySelectorAll(".nav__list a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
}

export default set_active_link;
