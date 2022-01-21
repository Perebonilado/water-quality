let keyBx = document.getElementsByClassName('key-bx')
let totalKeyBx = keyBx.length
let keyBxPosition = 0
const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const SignalScores = [
    {
        order: 'Eustheniidae',
        score: 10
    },

    {
        order: 'Orthocladiinae',
        score: 4
    },

    {
        order: 'Psephenidae',
        score: 6
    }
]



//  let totalScore = SignalScores.reduce((accumulator, signal)=>{
//        return accumulator + signal.score
//        }, 0)

// let pollutionIndex = totalScore/SignalScores.length
// console.log(pollutionIndex)



function hideAllBoxes() {
   for (const box of keyBx) {
       box.classList.remove('key-bx-visible')
   }
}


// function to navigate to next slide 

nextBtn.addEventListener('click', nextSlide)

function nextSlide() {
    hideAllBoxes()
    
    if (keyBxPosition === totalKeyBx - 1) {
        keyBxPosition = 0
    }
    else{keyBxPosition++}
    
    keyBx[keyBxPosition].classList.add('key-bx-visible')
}

// function for previous slide

prevBtn.addEventListener('click', prevSlide)

function prevSlide() {
    hideAllBoxes()

    if (keyBxPosition === 0) {
        alert('There is no Previous slide')
    }
    else {keyBxPosition--}

    keyBx[keyBxPosition].classList.add('key-bx-visible')
}

//=====================inner key navigations

//jointed legs
document.getElementById('jointed-legs').addEventListener('click',(e)=>{
    hideAllBoxes()

    keyBx[8].classList.add('key-bx-visible')


    e.preventDefault()
})

// mouth part

document.getElementById('mouth-part').addEventListener('click', (e)=>{

    hideAllBoxes()

    keyBx[11].classList.add('key-bx-visible')

    e.preventDefault()
})

//has wings

document.getElementById('hasWings').addEventListener('click', (e)=>{

    hideAllBoxes()

    keyBx[12].classList.add('key-bx-visible')

    e.preventDefault()
})


//assorted crustaceans

document.getElementById('assorted crustaceans').addEventListener('click', (e)=>{

    hideAllBoxes()

    keyBx[15].classList.add('key-bx-visible')

    e.preventDefault()
})






