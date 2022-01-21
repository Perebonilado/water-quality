const minDisplay = document.getElementById('min')
const secDisplay = document.getElementById('sec')
const setTimerBtn = document.getElementById('set-timer')
const startTimerBtn = document.getElementById('start-timer-btn')
const resetTimerBtn = document.getElementById('reset-timer-btn')
const fiveMinResetBtn = document.getElementById('reset-five-min')
const minInput = document.getElementById('minutes')
const secInput = document.getElementById('seconds')
const colon = document.getElementById('colon-2')
const msg = new SpeechSynthesisUtterance();
const bellSound = document.getElementById('bell-sound')
let duration 
let warningTimer
let speechTimer 
let myIntref
let min = 0
let sec = 0





// ========================TIMER 


// start timer btn func
startTimerBtn.addEventListener('click', ()=>{
    setTimerBtn.style.display = 'none'

    
    
    // Set timer values
    min = minInput.value
    sec = secInput.value
    duration = (sec*1000)+(min*60*1000)
    warningTimer = duration * 0.7
    speechTimer = duration * 0.5
    
    // Start timer
    myIntref = startT()
    
    
    // disable five min reset and only enable when timer ends
    
    fiveMinResetBtn.disabled = true
    fiveMinResetBtn.style.cursor = 'not-allowed'
    fiveMinResetBtn.classList.remove('timer-btn')
    fiveMinResetBtn.classList.add('timer-btn-disabled')
    
    
// alert warning with colors
    
setTimeout(()=>{
minDisplay.classList.add('alert-time')
secDisplay.classList.add('alert-time')
colon.classList.add('alert-time')
},warningTimer)



// stop timer
setTimeout(()=>{
    clearInterval(myIntref)
    bellSound.play()
    
    minDisplay.classList.remove('alert-time')
    secDisplay.classList.remove('alert-time')
    colon.classList.remove('alert-time')
    
    minDisplay.style.color = 'rgb(148, 148, 148)'
    secDisplay.style.color = 'rgb(148, 148, 148)'
    colon.style.color = 'rgb(148, 148, 148)'
    
    
    fiveMinResetBtn.disabled = false
    fiveMinResetBtn.style.cursor = 'pointer'
    fiveMinResetBtn.classList.remove('timer-btn-disabled')
    fiveMinResetBtn.classList.add('timer-btn')
}, duration)
    
    
    

resetTimerBtn.style.display = 'block'

// timeup speech

setTimeout(()=>{
    msg.text = `Time up`;
    window.speechSynthesis.speak(msg);
}, (duration+1000))

})


// reset timer btn func

resetTimerBtn.addEventListener('click', ()=>{
    clearInterval(myIntref)
    
    min = 0
    sec = 0
    minInput.value = 0
    secInput.value = 0
    renderMinFormat()
    renderSecFormat()
    setTimerBtn.style.display = 'flex'
    resetTimerBtn.style.display = 'none'
    
    minDisplay.style.color = '#fff'
    secDisplay.style.color = '#fff'
    colon.style.color = '#fff'
    
})

// five minute reset functionality

fiveMinResetBtn.addEventListener('click', ()=>{
    min = 5
    sec = 0
   
 // set duration, warning and speech timers
 
 duration = (sec*1000)+(min*60*1000)
 warningTimer = duration * 0.7
 speechTimer = duration * 0.5

 // Start timer
 myIntref = startT()
 
// disable button on click to prevent bugs
fiveMinResetBtn.disabled = true
fiveMinResetBtn.style.cursor = 'not-allowed'
 fiveMinResetBtn.classList.remove('timer-btn')
 fiveMinResetBtn.classList.add('timer-btn-disabled')
 
 // reset timer display
 minDisplay.style.color = '#fff'
 secDisplay.style.color = '#fff'
 colon.style.color = '#fff'
 
 
//  alert with speech
 
 setTimeout(() => {
    msg.text = `You have about ${min} minutes and ${sec} seconds left`;
    window.speechSynthesis.speak(msg);
}, speechTimer);

// alert warning with colors

setTimeout(()=>{
    minDisplay.classList.add('alert-time')
    secDisplay.classList.add('alert-time')
    colon.classList.add('alert-time')
},warningTimer)


// stop timer

setTimeout(()=>{
    clearInterval(myIntref)

    bellSound.play()
    
    minDisplay.classList.remove('alert-time')
    secDisplay.classList.remove('alert-time')
    colon.classList.remove('alert-time')
    
    minDisplay.style.color = 'rgb(148, 148, 148)'
    secDisplay.style.color = 'rgb(148, 148, 148)'
    colon.style.color = 'rgb(148, 148, 148)'
    
    fiveMinResetBtn.disabled = false
    fiveMinResetBtn.style.cursor = 'pointer'
    fiveMinResetBtn.classList.remove('timer-btn-disabled')
    fiveMinResetBtn.classList.add('timer-btn')
    
    
}, duration)


// time up speech
setTimeout(()=>{
    msg.text = `Time up`;
    window.speechSynthesis.speak(msg);
}, (duration+1000))

 
})





// render minutes to screen on start
renderMinFormat()

// 5minutes warning function
// checkFiveMin()

async function checkFiveMin() {
     setInterval(() => {
        if (minDisplay.textContent==5 && secDisplay.textContent == 2) {
            msg.text = `You have 5 minutes remaining`;
            window.speechSynthesis.speak(msg); 
        }
        }, 1000);  
    }


// countdown function
function decreaseTime() {
    renderMinFormat()
    if (sec<=60 && sec >=0) {
        sec --
        if (sec === -1) {
           sec = 59
           min--
           renderMinFormat()
        }
    }
    if (sec<10) {
        sec = `0${sec}`
    }

    secDisplay.textContent = sec
}
// Render minutes to screen
function renderMinFormat() {
    if (min<10) {
        minDisplay.textContent=`0${min}`
    }
    else{minDisplay.textContent=min}
}

// render seconds to screen

function renderSecFormat() {
    if (sec<10) {
        secDisplay.textContent=`0${sec}`
    }
    else{secDisplay.textContent=sec}
}

// start Timer function

function startT() {
    let secInt = setInterval(decreaseTime, 1000)
    return secInt
}













