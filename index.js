let submenu1 = document.getElementById("submenu-1")
let submenu2 = document.getElementById("submenu-2")
let submenu3 = document.getElementById("submenu-3")

let windowSize = screen.width

let product = document.getElementById("product-option")
product.addEventListener("mouseenter",function() {
    if(windowSize > 375){
        submenu1.style.display="block"
    }
    else{
        submenu1.style.display="grid"
    }
})
product.addEventListener("mouseleave",function() {
    submenu1.style.display="none"
})
let company = document.getElementById("company-option")
company.addEventListener("mouseenter",function() {
    if(windowSize > 375){
        submenu2.style.display="block"
    }
    else{
        submenu2.style.display="grid"
    }
})
company.addEventListener("mouseleave",function() {
    submenu2.style.display="none"
})
let connect = document.getElementById("connect-option")
connect.addEventListener("mouseenter",function() {
    if(windowSize > 375){
        submenu3.style.display="block"
    }
    else{
        submenu3.style.display="grid"
    }
})
connect.addEventListener("mouseleave",function() {
    submenu3.style.display="none"
})

let navbarOptions = document.getElementById("navbar-options")

function agregarLogin() {
    if(windowSize <= 1040){
        let container = document.getElementById("container")
        let login = document.getElementById("login-navbar")
        container.removeChild(login)
        let loginNew = document.createElement("div")
        loginNew.className = "login-navbar"
        loginNew.innerHTML=`
        <hr>
        <a class='login-options-navbar' href='#'>Login</a>
        <button class='login-options-navbar' id='signup' href='#'>Sign Up</button>
        `
        navbarOptions.appendChild(loginNew)
    }
}

let hamburguer = document.getElementById("hamburguer")
hamburguer.addEventListener("click",function() {
    if(hamburguer.getAttribute("src") == "images/icon-hamburger.svg"){
        hamburguer.setAttribute("src","images/icon-close.svg")
        navbarOptions.style.display="flex"
    }
    else{
        hamburguer.setAttribute("src","images/icon-hamburger.svg")
        navbarOptions.style.display="none"
    }
})

//body3
if(windowSize<=980){
    let divLaptop = document.getElementById("img-laptop-mobile")
    let imgLaptop = document.createElement("img")
    imgLaptop.setAttribute("src","images/illustration-laptop-mobile.svg")
    imgLaptop.style.width="18em"
    divLaptop.appendChild(imgLaptop);
}
agregarLogin()
