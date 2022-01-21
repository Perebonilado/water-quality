const observerBx = document.getElementById('observers')
const addObserverBtn = document.getElementById('add-observer-btn')
const addSpeciesBtn = document.getElementById('add-species-btn')
const calcSignal = document.getElementById('calculate-signal')
const keyBx = document.getElementById('key-section')
const closeKeyBtn = document.getElementById('close-key-icon')
const animals = new Map ([
    ['Acarina', 6],
    ['Amphipoda', 3],
    ['Anaspidacea', 6],
    ['Anostraca', 1],
    ['Bivalvia', 3],
    ['Branchiura', 1],
    ['Bryozoa', 4],
    ['Coleoptera', 5],
    ['Collembola', 1],
    ['Conchostraca', 1],
    ['Decapoda', 4],
    ['Diplopoda', 4],
    ['Diptera', 3],
    ['Ephemeroptera', 9],
    ['Gastropoda', 1],
    ['Hemiptera', 2],
    ['Hirudinea', 1],
    ['Hydrozoa', 1],
    ['Isopoda', 2],
    ['Lepidoptera', 2],
    ['Mecoptera', 10],
    ['Megaloptera', 8],
    ['Nematoda', 3],
    ['Nemertea', 3],
    ['Neuroptera', 6],
    ['Nematomorpha', 6],
    ['Notostraca', 1],
    ['Odonata', 3],
    ['Oligochaeta', 2],
    ['Plecoptera', 10],
    ['Porifera', 4],
    ['Trichoptera', 8],
    ['Turbellaria', 2]
  ])


//   key functionality

closeKeyBtn.addEventListener('click', ()=>{
    keyBx.style.display = 'none'
})

document.getElementById('identify-species').addEventListener('click',()=>{
    keyBx.style.display = 'block'
})

// Add observer functionality

addObserverBtn.addEventListener('click', ()=>{

    // create the input box
    let observerInput = document.createElement('input')
    observerInput.className = 'observer'
    observerInput.type = 'text'
    observerInput.placeholder = 'Observer Name'

    // create observer-input-bx
    let inputBx = document.createElement('div')
    inputBx.className = 'observer-input-bx'
    inputBx.appendChild(observerInput)

    // create the delete icon
    let iconBx = document.createElement('div')
    iconBx.className = 'delete-observer-bx'
    let delObsIcon = document.createElement('i')
    delObsIcon.className = 'fal fa-trash-alt delete-observer'
    iconBx.appendChild(delObsIcon)
    
    // append icon to inputbox as sibling
    observerInput.after(iconBx)
    
    
    //console.log(observerBx)



    observerBx.appendChild(inputBx)
})

// delete observer functionality

document.getElementById('observers').addEventListener('click',(e)=>{
    if (e.target.classList.contains('delete-observer')) {
        
        e.target.parentElement.parentElement.remove()
        e.target.parentElement.remove()
    }
})





// add species functionality

addSpeciesBtn.addEventListener('click', ()=>{

    let newSpeciesInput = document.createElement('div')
    newSpeciesInput.className = 'order-select'

    newSpeciesInput.innerHTML = `<select name="" class="select">
    <option value="">Acarina</option>
    <option value="">Amphipoda</option>
    <option value="">Anaspidacea</option>
    <option value="">Anostraca</option>
    <option value="">Bivalvia</option>
    <option value="">Branchiura</option>
    <option value="">Bryozoa</option>
    <option value="">Coleoptera</option>
    <option value="">Collembola</option>
    <option value="">Conchostraca</option>
    <option value="">Decapoda</option>
    <option value="">Diplopoda</option>
    <option value="">Diptera</option>
    <option value="">Ephemeroptera</option>
    <option value="">Gastropoda</option>
    <option value="">Hemiptera</option>
    <option value="">Hirudinea</option>
    <option value="">Hydrozoa</option>
    <option value="">Isopoda</option>
    <option value="">Lepidoptera</option>
    <option value="">Mecoptera</option>
    <option value="">Megaloptera</option>
    <option value="">Nematoda</option>
    <option value="">Nemertea</option>
    <option value="">Neuroptera</option>
    <option value="">Nematomorpha</option>
    <option value="">Notostraca</option>
    <option value="">Odonata</option>
    <option value="">Oligochaeta</option>
    <option value="">Plecoptera</option>
    <option value="">Porifera</option>
    <option value="">Trichoptera</option>
    <option value="">Turbellaria</option>
                                </select>

                        <select name="" class='select-abundance'>
                        <option value="">1(+)</option>
                        <option value="">2 to 10(++)</option>
                        <option value="">>11-100(+++)</option>
                        <option value="">>100(++++)</option>
                        <option value="">>1000(+++++)</option>
                        </select>
                        
                        <div id="delete-animal">
                        <i class="fal fa-trash-alt delete-animal"></i>
                        </div>
                        
                        `;
                        
    document.getElementById('select-container').appendChild(newSpeciesInput)
    
})

// calculate signal

calcSignal.addEventListener('click', ()=>{
    let ordersArray = []
    let signalArray = []
    let selectText = document.getElementsByClassName('select')
    let selectAbundance = document.getElementsByClassName('select-abundance')
    let signalScore = 0
    let resultInputs = document.getElementById('result-inputs')

    // get the values of all inputs and push into array
    for (const text of selectText) {
        ordersArray.push(text.options[text.selectedIndex].text)
    }
    
    // get the keys(signal value) of animals and put into array
    for (const item of ordersArray) {
        signalArray.push(animals.get(item))
    }

    // get the total of the signals in the array

    let totalSignal = signalArray.reduce((acc, signal)=>{
        return acc + signal
    },0)

    // calculate signal score

    signalScore = totalSignal/ordersArray.length
    
    
    console.log(`The signal score is ${signalScore.toFixed(1)}`)
    
    // insert orders and abuncance
    
    // order
    let orderContent = ''
    let abundanceContent = ''
    
    for (const text of selectText) {
        orderContent += `<p>${text.options[text.selectedIndex].text}</p>`
    }

    document.getElementById('order-name').innerHTML += orderContent
    
    for (const text of selectAbundance) {
        abundanceContent += `<p>${text.options[text.selectedIndex].text}</p>`
    }

    document.getElementById('res-val').innerHTML += abundanceContent

    // fill in form headings

    // get from form
    let siteName = document.getElementById('site-name')
    let dateString = document.getElementById('date')
    let habitatName = document.getElementById('habitat')
    let timeMin = document.getElementById('time-taken-min')
    let timeSec = document.getElementById('time-taken-sec')
    let observers = document.getElementsByClassName('observer')

    // display in table
    // site name
    document.getElementById('table-site-name').innerHTML = `<b>Site Name:</b> ${siteName.value}`

    // site date

    document.getElementById('table-site-date').innerHTML = `<b>Date:</b> ${dateString.value}`

    // habitat

    document.getElementById('table-site-habitat').innerHTML = `<b>Habitat:</b> ${habitatName.value}`

    // time taken

    document.getElementById('table-site-time').innerHTML = `<b>Time Taken:</b> ${timeMin.value}:${timeSec.value}secs `

    // observers
    let obsContent = ''

    for (const observer of observers) {
         obsContent += `<li>${observer.value}</li>`
    }

    document.getElementById('table-site-observer').innerHTML = `<h3>Observers</h3><ol>${obsContent}</ol>`

    // Summary

    document.getElementById('summary').innerHTML = `<b>Summary:</b>The SIGNAL for this water body is ${signalScore.toFixed(1)}, meaning the water body is ${signalConvert(signalScore.toFixed(1))}`

    document.getElementById('result-bx').style.display = 'block'
    
    // console.log(window.scrollY)
    window.scrollTo(0, 639)
})

        

// functionn to convert signal score water health

function signalConvert(num) {
    if (num<4) {
        return 'very polluted'
    }

    else if (num >= 4 && num<5) {
         return 'mildly polluted'
    }

    else if (num >=5 && num <=6) {
        return 'moderately polluted'
    }

    else if (num>6) {
        return 'a healthy habitat'
    }
}

// delete an order

document.getElementById('select-container').addEventListener('click', (e)=>{
    if (e.target.classList.contains('delete-animal')) {
        console.log(e.target.parentElement.parentElement.remove())
    }
})
















