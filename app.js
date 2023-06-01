
//get elements from html
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const btn = document.querySelector('.btn')
const footerText = document.querySelector('.footer-text')
const winningOverlay = document.querySelector('.winning-overlay');
const winTitle = document.querySelector('.win-title')

//counter display text
const counterDisplayText = document.querySelector('.click-counter-text')
//counter display number
const counterDisplayArea = document.querySelector('.counter-display')


//colors for header array
const colors = ['hsl(234, 92%, 60%)', 'hsl(45, 87%, 50%)', 'hsl(189, 67%, 55%)', 'hsl(321, 62%, 60%)', 'hsl(156, 100%, 45%)', 'hsl(278, 79%, 60%)', 'hsl(82, 100%, 45%)', 'hsl(11, 88%, 55%)', 'hsl(205, 70%, 65%)', 'hsl(349, 85%, 60%)', 'hsl(60, 100%, 50%)', 'hsl(171, 60%, 50%)', 'hsl(296, 79%, 50%)', 'hsl(25, 75%, 55%)', 'hsl(205, 85%, 60%)', 'hsl(345, 65%, 55%)', 'hsl(114, 100%, 40%)', 'hsl(225, 60%, 45%)', 'hsl(165, 70%, 50%)', 'hsl(305, 60%, 50%)', 'hsl(40, 100%, 50%)', 'hsl(195, 85%, 60%)', 'hsl(330, 65%, 55%)', 'hsl(124, 100%, 40%)', 'hsl(235, 60%, 45%)', 'hsl(175, 70%, 50%)', 'hsl(315, 60%, 50%)', 'hsl(80, 100%, 50%)', 'hsl(215, 85%, 60%)', 'hsl(355, 65%, 55%)', 'hsl(134, 100%, 40%)', 'hsl(245, 60%, 45%)', 'hsl(185, 70%, 50%)', 'hsl(325, 60%, 50%)', 'hsl(100, 100%, 50%)', 'hsl(225, 85%, 60%)', 'hsl(5, 65%, 55%)', 'hsl(144, 100%, 40%)', 'hsl(255, 60%, 45%)', 'hsl(195, 70%, 50%)', 'hsl(335, 60%, 50%)', 'hsl(120, 100%, 50%)']; 

//colors for footer array
const colorsff = ['hsl(234, 92%, 60%)', 'hsl(45, 87%, 50%)', 'hsl(189, 67%, 55%)', 'hsl(321, 62%, 60%)', 'hsl(156, 100%, 45%)', 'hsl(278, 79%, 60%)', 'hsl(82, 100%, 45%)', 'hsl(11, 88%, 55%)', 'hsl(205, 70%, 65%)', 'hsl(349, 85%, 60%)', 'hsl(60, 100%, 50%)', 'hsl(171, 60%, 50%)', 'hsl(296, 79%, 50%)', 'hsl(25, 75%, 55%)', 'hsl(205, 85%, 60%)', 'hsl(345, 65%, 55%)', 'hsl(114, 100%, 40%)', 'hsl(225, 60%, 45%)', 'hsl(165, 70%, 50%)', 'hsl(305, 60%, 50%)', 'hsl(40, 100%, 50%)', 'hsl(195, 85%, 60%)', 'hsl(330, 65%, 55%)', 'hsl(124, 100%, 40%)', 'hsl(235, 60%, 45%)', 'hsl(175, 70%, 50%)', 'hsl(315, 60%, 50%)', 'hsl(80, 100%, 50%)', 'hsl(215, 85%, 60%)', 'hsl(355, 65%, 55%)', 'hsl(134, 100%, 40%)', 'hsl(245, 60%, 45%)', 'hsl(185, 70%, 50%)', 'hsl(325, 60%, 50%)', 'hsl(100, 100%, 50%)', 'hsl(225, 85%, 60%)', 'hsl(5, 65%, 55%)', 'hsl(144, 100%, 40%)', 'hsl(255, 60%, 45%)', 'hsl(195, 70%, 50%)', 'hsl(335, 60%, 50%)', 'hsl(120, 100%, 50%)'];


// FUNCTIONS //////

/* 
=======================================================
*/

//click counter function for counting click to display 
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

//change colors function for header
function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colorsff[randomIndex];
  header.style.backgroundColor = randomColor;
}

//change colors function for footer
function changeColorff() {
  const randomIndexff = Math.floor(Math.random() * colorsff.length);
  const randomColorff = colorsff[randomIndexff];
  footer.style.backgroundColor = randomColorff;
}

//show winning overlay on delay function
let showWinningOverlayDelay = () => {
  winningOverlay.classList.add('winning-show');
}

//function for comparing if colors are matching

function checkColorMatch() {
  const headerColor = header.style.backgroundColor;
  const footerColor = footer.style.backgroundColor;

  if (headerColor === footerColor) {
    //show winning overlay
    setTimeout(showWinningOverlayDelay, 3000);
    //play winning audio
    const winAudio = document.querySelector('.win-audio');
    winAudio.play();
    //hide changer btn 
    btn.classList.add('d-none')
  } 
}


//event listener for btn
btn.addEventListener('click', function(){
    //show footer text
    footerText.classList.remove('d-none')
    //show click counter
    counterDisplayText.classList.remove('d-none')
    //run functions fropm click event
    changeColor()
    changeColorff()
    clickSound()
    checkColorMatch()
})

