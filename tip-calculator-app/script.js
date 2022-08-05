const inputBill = document.querySelector(".bill")
const inputPerson = document.querySelector(".person")
const custom = document.querySelector(".custom")
const btnPercent = document.querySelectorAll(".btn__percentage .btn")
const tip = document.querySelector(".amount")
const total = document.querySelector(".total")
const btnReset = document.querySelector(".reset")
const btnCompute = document.querySelector(".compute")

let percentageValue = 0
let customValue = 0
let billAmount = 0
let personNum = 0

window.addEventListener('DOMContentLoaded', () =>{
    getInput()
    selectedPercentageValue()
    computingTip()
})

btnReset.addEventListener('click', () => {
    tip.textContent = "0"
    total.textContent = "0"
    inputBill.value = ""
    inputPerson.value = ""
})

const getInput = () => {
    inputBill.addEventListener('input', () => {
        billAmount = inputBill.value
    })
    
    inputPerson.addEventListener('input', () => {
        personNum = inputPerson.value
    })
    
    custom.addEventListener('input', () => {
        customValue = custom.value
    })
}

const selectedPercentageValue = () =>{
    for (const percentBtn of btnPercent){
        percentBtn.addEventListener('click', () => {
            percentageValue = percentBtn.value
        })
    }
}

const computingTip = () => {
    btnCompute.addEventListener('click', () => {
        if(true){
            //Compute tip amount
            let convertToDecimal = percentageValue / 100
            let getPercentage = convertToDecimal * billAmount
            //Comppute total / person
            let totalAmount = getPercentage / personNum

            tip.textContent = `${getPercentage}` 
            total.textContent = `${totalAmount}` 
        }
    })
}
