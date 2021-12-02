var ham = document.getElementById("ham");

// ham.addEventListener("click", showAlert);

var text = document.getElementById("text");
const nav = document.querySelector("nav ul");

ham.addEventListener("click", function () {
  nav.classList.toggle("sidenav");
});
