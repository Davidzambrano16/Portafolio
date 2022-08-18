let menu = document.querySelector("ul.nav--menu")
let icon = document.getElementById("icon-menu")
let botonHome = document.getElementById("botonHome")
let botonAcerca = document.getElementById("botonAcerca")
let botonHabilidad = document.getElementById("botonHabilidad")
let botonExperiencia = document.getElementById("botonExperiencia")
let botonPortafolio = document.getElementById("botonPortafolio")
let botonContacto = document.getElementById("botonContacto")

icon.addEventListener("click", toggleMenu)
botonHome.addEventListener("click", toggleMenu)
botonAcerca.addEventListener("click", toggleMenu)
botonHabilidad.addEventListener("click", toggleMenu)
botonExperiencia.addEventListener("click", toggleMenu)
botonPortafolio.addEventListener("click", toggleMenu)
botonContacto.addEventListener("click", toggleMenu)

function toggleMenu(){
    menu.classList.toggle("visible")
}