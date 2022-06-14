const inputEl = document.getElementById('color-input')
const selectEl = document.getElementById('color-scheme')
const btnEl = document.getElementById('btn')
const colorOne = document.getElementById('color-one')
const colorTwo = document.getElementById('color-two')
const colorThree = document.getElementById('color-three')
const colorFour = document.getElementById('color-four')
const colorFive = document.getElementById('color-five')
const colorCode1 = document.getElementById('color-code-one')
const colorCode2 = document.getElementById('color-code-two')
const colorCode3 = document.getElementById('color-code-three')
const colorCode4 = document.getElementById('color-code-four')
const colorCode5 = document.getElementById('color-code-five')

let color1
let color2
let color3
let color4
let color5

function handleClick(){
    const color = inputEl.value
    const colorScheme = selectEl.value
    const mainColor = color.substring(1)
    console.log(mainColor)
    console.log(colorScheme)
    fetch(`https://www.thecolorapi.com/scheme?hex=${mainColor}&mode=${colorScheme}`)
    .then(response => response.json())
    .then(data => {
        color1 = data.colors[0].hex.value
        color2 = data.colors[1].hex.value
        color3 = data.colors[2].hex.value
        color4 = data.colors[3].hex.value
        color5 = data.colors[4].hex.value

        colorCode1.textContent = color1
        colorCode2.textContent = color2
        colorCode3.textContent = color3
        colorCode4.textContent = color4
        colorCode5.textContent = color5

        colorOne.style.backgroundColor = color1
        colorTwo.style.backgroundColor = color2
        colorThree.style.backgroundColor = color3
        colorFour.style.backgroundColor = color4
        colorFive.style.backgroundColor = color5
    })
}

btnEl.addEventListener('click', handleClick)
