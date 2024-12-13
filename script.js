document.querySelectorAll(".pesanButton").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("popupBox").style.display = "block";
  });
});

document.getElementById("batalButton").addEventListener("click", function () {
  document.getElementById("popupBox").style.display = "none";
});
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}
