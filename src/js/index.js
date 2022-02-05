import "../scss/styles.scss";

//////////////////// DARK THEME

const themeToggle = document.querySelector("#theme-toggle");

const currentTheme = localStorage.getItem("theme");
const pageTheme = document.body;

let isDark = true;

if (currentTheme === "dark") {
  pageTheme.classList.add("dark-theme");
  themeToggle.innerText = "Light";
} else {
  themeToggle.innerText = "Dark";
}

function themeMode() {
  isDark = !isDark;
  isDark ? (themeToggle.innerText = "Dark") : (themeToggle.innerText = "Light");
  pageTheme.classList.toggle("dark-theme");

  let theme = "light";
  if (pageTheme.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", themeMode);

//////////////////// Language Toggle

let langToggle = document.querySelector("#lang-toggle"),
  langItem = document.getElementsByClassName("langitem");

langToggle.addEventListener("click", () => {
  for (let i = 0; i < langItem.length; i++) {
    if (
      langItem[i].getAttribute("lang") === langToggle.innerText.toLowerCase()
    ) {
      langItem[i].style.display = "block";
    } else {
      langItem[i].style.display = "none";
    }
  }

  if (langToggle.innerText === "EN") {
    langToggle.innerText = "JP";
  } else {
    langToggle.innerText = "EN";
  }
});

// SHOW MENU

let navBtn = document.querySelector(".nav__btn"),
  navMenu = document.querySelector(".nav__menu"),
  navLink = document.querySelectorAll(".nav__link");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navBtn.classList.toggle("change");
});

function linkAction() {
  navMenu.classList.remove("show");
  navBtn.classList.remove("change");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Scroll



function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   // reset: true
// })
