let nav = document.getElementById("navigation-mobile");

function hiddenNav() {
  let button = document.getElementById("open").addEventListener("click", () => {
    if (nav) {
      if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
    }
  });
  return button;
}