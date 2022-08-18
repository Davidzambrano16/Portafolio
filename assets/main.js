let menu = document.querySelector("ul.nav--menu")
let icon = document.getElementById("icon-menu")


icon.addEventListener("click", toggleMenu)

function toggleMenu(){
    menu.classList.toggle("visible")
}