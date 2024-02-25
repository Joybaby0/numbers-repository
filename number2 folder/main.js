let oneEl = 8
let twoEl = 2

document.getElementById("one-el").textContent = oneEl
document.getElementById("two-el").textContent = twoEl

let plusEl = document.getElementById("plus-el")
let minusEl = document.getElementById("minus-el")
let divideEl = document.getElementById("divide-el")
let sumEl = document.getElementById("sum-el")

plusEl.addEventListener("click", function(){
    let numbers = oneEl + twoEl
    sumEl.textContent = "Sum: " + numbers
    
})

minusEl.addEventListener("click", function(){
    let numbers = oneEl - twoEl
    sumEl.textContent = "Sum: " + numbers
    
})

divideEl.addEventListener("click", function(){
    let numbers = oneEl / twoEl
    sumEl.textContent = "Sum: " + numbers
    
})