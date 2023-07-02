// document.getElementById("count-el").innerText = 10

// function increment() {
//     console.log("clicked")
// }

// function show42() {
//     console.log("42")
// }

// let l1=34, l2=33, l3=36

// function logLapTime() {
//     console.log(l1+l2+l3)
// }

// logLapTime()

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function inc() {
    count = count + 1
    countEl.innerText = count    
}

function save() {
    saveEl.textContent += (count + ', ')
    countEl.textContent = 0
    count = 0
    // console.log(saveEl.innerText)
}