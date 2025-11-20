
let asideToggle = document.getElementById("aside-toggle")
let aside = document.getElementById("aside")


asideToggle.addEventListener("click", () => {
    aside.classList.toggle("translate-x-[0%]")
    aside.classList.add("duration-300")
})