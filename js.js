// HEADER SCROLL OBSERVER
const header = document.querySelector("header");
const sectionOne = document.querySelector(".about");

const sectionOneOptions = {
  rootMargin: "-550px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// NAV ACTIVE UNDERLINE

$(function() {
  $("#navbar a").click(function() {
    $("#navbar a").removeClass("active");
    $(this).addClass("active");
  });
});

// HAMBERGER
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("act");
});
