const p1 = document.querySelector('#p1Score')
const p2 = document.querySelector('#p2Score')
const p1Add = document.querySelector('#p1Add')
const p2Add = document.querySelector('#p2Add')
const reset = document.querySelector('#reset')
const maxScore = document.querySelector('#maxScore')
let gameIsOver = false
p1Add.addEventListener('click', function () {
    if (!gameIsOver) {
        let newValue = parseInt(p1.innerText) + 1
        p1.innerText = newValue
        if (parseInt(p1.innerText) === parseInt(maxScore.value)) {
            p1.style.color = 'green';
            p2.style.color = 'red';
            gameIsOver = true
        }
    }

})
p2Add.addEventListener('click', function () {
    if (!gameIsOver) {
        let newValue2 = parseInt(p2.innerText) + 1
        p2.innerText = newValue2
        if (parseInt(p2.innerText) === parseInt(maxScore.value)) {
            p2.style.color = 'green';
            p1.style.color = 'red';
            gameIsOver = true

        }
    }
})


