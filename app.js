//get elements from html
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const btn = document.querySelector('.btn')
const footerText = document.querySelector('.footer-text')
//counter display text
const cnp = document.querySelector('.click-counter-text')
//counter display number
const counterDisplayArea = document.querySelector('.counter-display')
//define the colors array
const colors = ["#da9f64", "#f67dd1", "red", "blue", "white", "cyan", "orange", "purple", "yellow", "green", "brown", "gray", "#e0cb9a", "#348704", "#bfff4f", "#c6ecc3", "#a081e2","#c39feb",  "#022504", "#41f635", "#4c856a", "#cedd43", "#041d30", "#9c499f"];
//colors for footer
const colorsff = ["#da9f64", "#f67dd1", "red", "blue", "white", "cyan", "orange", "purple", "yellow", "green", "brown", "gray", "#e0cb9a", "#348704", "#bfff4f", "#c6ecc3", "#a081e2","#c39feb",  "#022504", "#41f635", "#4c856a", "#cedd43", "#041d30", "#9c499f"];
//create function

//function for click counter
let ffcounter = document.querySelector('.ffcounter'),
  count = 0;
ffcounter.onclick = function() {
  count += 1;
  counterDisplayArea.innerHTML = count;
};

//play audio on button 
const audioClick = document.querySelector('.clickAudio')
function clickSound(){
  audioClick.play();
}
//function for 

btn.addEventListener('click', function(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    header.style.backgroundColor = randomColor;
    footerText.classList.remove('d-none')
    cnp.classList.remove('d-none')
    clickSound()

})

btn.addEventListener('click', function(){
    const randomIndexff = Math.floor(Math.random() * colors.length);
    const randomColorff = colors[randomIndexff];
    footer.style.backgroundColor = randomColorff;
})

const changeColor = function (){
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    header.style.backgroundColor = randomColor;
}

const changeColorff = function (){
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    footer.style.backgroundColor = randomColor;
}

changeColor()
changeColorff()

