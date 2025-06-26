let navMenu = document.getElementById('nav-menu')
let navToggle = document.getElementById('nav-toggle')
let navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', showMenu)

navClose.addEventListener('click', removeMenu)

let navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.addEventListener('click', removeMenu))


function showMenu() {
    navMenu.classList.add('showMenu')
}

function removeMenu() {
    navMenu.classList.remove('showMenu')
}


window.addEventListener('scroll', scrollHeader)
function scrollHeader() {
    let header = document.getElementById('header')
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }
    else {
        header.classList.remove('scroll-header')
    }
}


let sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive() {
    sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 58
        let sectionId = current.getAttribute('id')

        if (this.scrollY > sectionTop && this.scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollUp)
function scrollUp() {
    let scrollUp = document.getElementById("scroll-up")
    if (this.scrollY >= 400) {
        scrollUp.style.bottom = "3rem"
    }
    else {
        scrollUp.style.bottom = "-30%"
    }
}


let cartShop = document.getElementById("cart-shop")
let cartClose = document.getElementById("cart-close")
let cart = document.getElementById("cart")

cartShop.addEventListener("click", showCart)
function showCart() {
    cart.style.right = "0"
}
cartClose.addEventListener("click", removeCart)
function removeCart() {
    cart.style.right = "-100%"
}




let navMode = document.getElementById("nav-mode")
let darkMode = 'dark-theme'
let themeIcon = 'bx-sun'

let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')

let getCurrentTheme = () => document.body.classList.contains(darkMode) ? 'dark' : 'light'
let getCurrentIcon = () => document.getElementById("change-theme").classList.contains(themeIcon) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkMode)
    document.getElementById("change-theme").classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](themeIcon)
}

navMode.addEventListener('click',ToggleMode)
function ToggleMode()
{
    document.body.classList.toggle(darkMode)
    document.getElementById("change-theme").classList.toggle(themeIcon)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}



let cartAdd = document.querySelectorAll(".addItem")
cartAdd.forEach(n => n.addEventListener('click',AddItem))
function AddItem()
{
    console.log("clicked")
}

let cartAmt1 = document.getElementById("Res1")
let cartMinus1 = document.getElementById("Diff1")
let cartPlus1 = document.getElementById("Add1")
cartPlus1.addEventListener('click',()=>{
    itemNum = Number.parseInt(cartAmt1.innerText)
    itemNum+=1
    cartAmt1.innerText = `${itemNum}`
})
cartMinus1.addEventListener('click',Difference)
function Difference()
{
    itemNum = Number.parseInt(cartAmt1.innerText)
    itemNum===1 ? itemNum-=0 : itemNum-=1
    cartAmt1.innerText = `${itemNum}`
}