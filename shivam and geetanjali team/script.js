const hamburger = document.querySelectorAll(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")

console.log(typeof hamburger)

hamburger.forEach(item => {
    item.addEventListener("click",()=>{
        hamburger.forEach(item=>{
            item.classList.toggle("active")
        })
        mobileMenu.classList.toggle("active")
    })
});