const open = document.getElementById("open")
const close = document.getElementById("close")
let order = document.querySelectorAll(".order")
let count = 0  
const catalog = document.getElementById("catalog")
const cataloj = document.getElementById("cataloj")
const modal1 = document.getElementById("modal1")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
const modal4 = document.getElementById("modal4")
const modal5 = document.getElementById("modal5")
const modal6 = document.getElementById("modal6")
const modal7 = document.getElementById("modal7")
const modal8 = document.getElementById("modal8")
const model1 = document.getElementById("model1")
const model2 = document.getElementById("model2")
const model3 = document.getElementById("model3")
const model4 = document.getElementById("model4")
const model5 = document.getElementById("model5")
const model6 = document.getElementById("model6")
const model7 = document.getElementById("model7")
const model8 = document.getElementById("model8")

function openmodal1(){
    document.getElementById("model1").style.top = "0"
}

function closemodal1(){
    document.getElementById("model1").style.top = "-100%"
}

function openmodal2(){
    document.getElementById("model2").style.top = "0"
}

function closemodal2(){
    document.getElementById("model2").style.top = "-100%"
}

function openmodal3(){
    document.getElementById("model3").style.top = "0"
}

function closemodal3(){
    document.getElementById("model3").style.top = "-100%"
}

function openmodal4(){
    document.getElementById("model4").style.top = "0"
}

function closemodal4(){
    document.getElementById("model4").style.top = "-100%"
}

function openmodal5(){
    document.getElementById("model5").style.top = "0"
}

function closemodal5(){
    document.getElementById("model5").style.top = "-100%"
}

function openmodal6(){
    document.getElementById("model6").style.top = "0"
}

function closemodal6(){
    document.getElementById("model6").style.top = "-100%"
}

function openmodal7(){
    document.getElementById("model7").style.top = "0"
}

function closemodal7(){
    document.getElementById("model7").style.top = "-100%"
}

function openmodal8(){
    document.getElementById("model8").style.top = "0"
}

function closemodal8(){
    document.getElementById("model8").style.top = "-100%"
}

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

modal1.addEventListener('click', () => {
    openmodal1()
})

model1.addEventListener('click', () => {
    closemodal1()
})

modal2.addEventListener('click', () => {
    openmodal2()
})

model2.addEventListener('click', () => {
    closemodal2()
})

modal3.addEventListener('click', () => {
    openmodal3()
})

model3.addEventListener('click', () => {
    closemodal3()
})

modal4.addEventListener('click', () => {
    openmodal4()
})

model4.addEventListener('click', () => {
    closemodal4()
})

modal5.addEventListener('click', () => {
    openmodal5()
})

model5.addEventListener('click', () => {
    closemodal5()
})

modal6.addEventListener('click', () => {
    openmodal6()
})

model6.addEventListener('click', () => {
    closemodal6()
})

modal7.addEventListener('click', () => {
    openmodal7()
})

model7.addEventListener('click', () => {
    closemodal7()
})

modal8.addEventListener('click', () => {
    openmodal8()
})

model8.addEventListener('click', () => {
    closemodal8()
})

document.querySelectorAll(".navbar a").forEach(link =>{
    link.addEventListener("click", () => {
        closeNavbar()
    })
})