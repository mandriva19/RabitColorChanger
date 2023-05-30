
//get elements from html
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const btn = document.querySelector('.btn')
const footerText = document.querySelector('.footer-text')

//counter display text
const counterDisplayText = document.querySelector('.click-counter-text')
//counter display number
const counterDisplayArea = document.querySelector('.counter-display')


//define the colors 
const colors = ['hsl(234, 92%, 60%)', 'hsl(45, 87%, 50%)', 'hsl(189, 67%, 55%)', 'hsl(321, 62%, 60%)', 'hsl(156, 100%, 45%)', 'hsl(278, 79%, 60%)', 'hsl(82, 100%, 45%)', 'hsl(11, 88%, 55%)', 'hsl(205, 70%, 65%)', 'hsl(349, 85%, 60%)', 'hsl(60, 100%, 50%)', 'hsl(171, 60%, 50%)', 'hsl(296, 79%, 50%)', 'hsl(25, 75%, 55%)', 'hsl(205, 85%, 60%)', 'hsl(345, 65%, 55%)', 'hsl(114, 100%, 40%)', 'hsl(225, 60%, 45%)', 'hsl(165, 70%, 50%)', 'hsl(305, 60%, 50%)', 'hsl(40, 100%, 50%)', 'hsl(195, 85%, 60%)', 'hsl(330, 65%, 55%)', 'hsl(124, 100%, 40%)', 'hsl(235, 60%, 45%)', 'hsl(175, 70%, 50%)', 'hsl(315, 60%, 50%)', 'hsl(80, 100%, 50%)', 'hsl(215, 85%, 60%)', 'hsl(355, 65%, 55%)', 'hsl(134, 100%, 40%)', 'hsl(245, 60%, 45%)', 'hsl(185, 70%, 50%)', 'hsl(325, 60%, 50%)', 'hsl(100, 100%, 50%)', 'hsl(225, 85%, 60%)', 'hsl(5, 65%, 55%)', 'hsl(144, 100%, 40%)', 'hsl(255, 60%, 45%)', 'hsl(195, 70%, 50%)', 'hsl(335, 60%, 50%)', 'hsl(120, 100%, 50%)'];

//colors for footer
const colorsff = ['hsl(234, 92%, 60%)', 'hsl(45, 87%, 50%)', 'hsl(189, 67%, 55%)', 'hsl(321, 62%, 60%)', 'hsl(156, 100%, 45%)', 'hsl(278, 79%, 60%)', 'hsl(82, 100%, 45%)', 'hsl(11, 88%, 55%)', 'hsl(205, 70%, 65%)', 'hsl(349, 85%, 60%)', 'hsl(60, 100%, 50%)', 'hsl(171, 60%, 50%)', 'hsl(296, 79%, 50%)', 'hsl(25, 75%, 55%)', 'hsl(205, 85%, 60%)', 'hsl(345, 65%, 55%)', 'hsl(114, 100%, 40%)', 'hsl(225, 60%, 45%)', 'hsl(165, 70%, 50%)', 'hsl(305, 60%, 50%)', 'hsl(40, 100%, 50%)', 'hsl(195, 85%, 60%)', 'hsl(330, 65%, 55%)', 'hsl(124, 100%, 40%)', 'hsl(235, 60%, 45%)', 'hsl(175, 70%, 50%)', 'hsl(315, 60%, 50%)', 'hsl(80, 100%, 50%)', 'hsl(215, 85%, 60%)', 'hsl(355, 65%, 55%)', 'hsl(134, 100%, 40%)', 'hsl(245, 60%, 45%)', 'hsl(185, 70%, 50%)', 'hsl(325, 60%, 50%)', 'hsl(100, 100%, 50%)', 'hsl(225, 85%, 60%)', 'hsl(5, 65%, 55%)', 'hsl(144, 100%, 40%)', 'hsl(255, 60%, 45%)', 'hsl(195, 70%, 50%)', 'hsl(335, 60%, 50%)', 'hsl(120, 100%, 50%)'];


// FUNCTIONS //////
/* 
=======================================================
*/

//click counter
let ffcounter = document.querySelector('.ffcounter')
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


//function for random color generator
btn.addEventListener('click', function(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    header.style.backgroundColor = randomColor;
    footerText.classList.remove('d-none')
    counterDisplayText.classList.remove('d-none')
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

// changeColor()
// changeColorff()

// run this if the colors are match

