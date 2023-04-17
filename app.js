const signBtn = document.querySelector('.sign-btn')
const myWindow = document.querySelector('.window-hover')
const sidebarBtn = document.getElementById('section')
const sidebar = document.querySelector('.sidebar')
const blur = document.getElementById('blur_div')
const sus = document.getElementById('sus')
const hammock = document.getElementById('hammock')
const closed = document.querySelector('.closed')
const secondSec = document.getElementById('chartreuse')
const myDate = document.getElementById('date')

let date = new Date()
console.log(date)
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function setDate() {
    myDate.innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
setDate()

signBtn.addEventListener('mouseenter', function () {
    console.log('hover')
    myWindow.classList.add('sign-in')
})

signBtn.addEventListener('mouseleave', function (){
    myWindow.classList.remove('sign-in')
})

sidebarBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show')
    blur.classList.toggle('blur')
    if (blur.style.display === "block") {
        blur.style.display = "none"
    }
    else {
        blur.style.display = "block"
    }
})

sus.addEventListener('click', () => {
    sameThing(closed)
    const freccia1 = document.getElementById('turn1')
    let style = window.getComputedStyle(freccia1)
    let value = style.getPropertyValue('transform')
    if (value === 'matrix(-1, 0, 0, -1, 0, 0)') {
        freccia1.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
        freccia1.style.left = '240px'
        freccia1.style.top = '10px'
        freccia1.style.fontSize = '22px'
        freccia1.style.color = 'white'
    }
    else {
        freccia1.style.transform = 'matrix(-1, 0, 0, -1, 0, 0)'
        freccia1.style.top = '-10px'
        freccia1.style.left = '0'
    }
})

hammock.addEventListener('click', () => {
    sameThing(secondSec)
    const freccia2 = document.getElementById('turn2')
    let style2 = window.getComputedStyle(freccia2)
    let value2 = style2.getPropertyValue('transform')
    if (value2 === 'matrix(-1, 0, 0, -1, 0, 0)') {
        freccia2.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
        freccia2.style.left = '189px'
        freccia2.style.top = '10px'
        freccia2.style.fontSize = '22px'
        freccia2.style.color = 'white'
    }
    else {
        freccia2.style.transform = 'matrix(-1, 0, 0, -1, 0, 0)'
        freccia2.style.top = '-10px'
        freccia2.style.left = '0'

    }
})


function sameThing(element) {
    element.classList.toggle('visible')
}

/*Bruttura incredibile che sono costretto a fare*/
const ciao = document.getElementById('first')
ciao.style.marginBottom = '0px'
