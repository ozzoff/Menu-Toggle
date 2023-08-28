let menu=document.querySelector(".menu")
let line1=document.querySelector(".line1")
let line2=document.querySelector(".line2")

menu.addEventListener("click", ()=>{
    line1.classList.toggle("menu-toggle")
    line2.classList.toggle("menu-toggle")
    menu.classList.toggle("menu-toggle")
})