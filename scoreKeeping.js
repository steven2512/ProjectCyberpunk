const p1 = document.querySelector('#p1Score')
const p2 = document.querySelector('#p2Score')
const p1Add = document.querySelector('#p1Add')
const p2Add = document.querySelector('#p2Add')
const reset = document.querySelector('#reset')
const maxScore = document.querySelector('#maxScore')
p1Add.addEventListener('click', function () {
    let newValue = parseInt(p1.innerText) + 1

    p1.innerText = newValue

})
p2Add.addEventListener('click', function () {
    let newValue2 = parseInt(p2.innerText) + 1
    p2.innerText = newValue2
})

//maxScore.addEventListener('input', function (e) {
    
//})
