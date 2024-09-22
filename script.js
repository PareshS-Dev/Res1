const Menu = document.querySelector(".nright button")
const offScreenMenu = document.querySelector(".off-screen-menu")

Menu.addEventListener("click", ()=>{
    Menu.classList.toggle("active")
    offScreenMenu.classList.toggle("active")
    // Menu.style.backgroundColor = "black"
    // Menu.style.color = "#fff"
    // Menu.style.border = "2px solid black"
    // Menu.style.opacity = ""
})