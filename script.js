// Récupération des différents éléments
const menuItemsAll = document.querySelectorAll(".item");
const menuIndicator = document.querySelector(".indicator");
const body = document.querySelector("body");

// Boucle for qui va parcourir tous les items
for (let i = 0; i < menuItemsAll.length; i++) {
  menuItemsAll[i].addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    menuItemsAll[i].classList.add("active");
    body.style.backgroundColor = menuItemsAll[i].getAttribute("color");
    menuIndicator.style.backgroundColor = menuItemsAll[i].getAttribute("color");
    menuIndicator.style.left = `calc(${i * 20 + 20}px + ${i * 50}px)`;
  });
}
