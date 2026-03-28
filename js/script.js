const open = document.getElementById("open")
const close = document.getElementById("close")
let order = document.querySelectorAll(".order")
let count = 0  
const catalog = document.getElementById("catalog")
const cataloj = document.getElementById("cataloj")

function openmore(){
    document.querySelector(".catalog__main-more").style.height = "100%"
}

function delmore1(){
    document.getElementById('catalog').style.display = "none"
}

function appmore1(){
    document.getElementById('catalog').style.display = "block"
}

function delmore2(){
    document.getElementById('cataloj').style.display = "none"
}

function appmore2(){
    document.getElementById('cataloj').style.display = "block"
}

function closemore(){
    document.querySelector(".catalog__main-more").style.height = "0"
}

catalog.addEventListener('click', () => {
    openmore()
    appmore2()
    delmore1()
})

cataloj.addEventListener('click', () => {
    closemore()
    appmore1()
    delmore2()
})

order.forEach((btn) => {
    let count = 0;

    btn.addEventListener("click", () => {
        count++;

        const counter = btn.parentElement.querySelector(".counter");

        counter.innerText = count;
        counter.style.display = "block";
    });
});

function openNavbar(){
    document.querySelector(".nav__under-right").style.left = "0%"
}

function closeNavbar(){
    document.querySelector(".nav__under-right").style.left = "-100%"
}

open.addEventListener("click", () => {
    openNavbar()
})

close.addEventListener("click", () => {
    closeNavbar()
})

document.querySelectorAll(".navbar a").forEach(link =>{
    link.addEventListener("click", () => {
        closeNavbar()
    })
})