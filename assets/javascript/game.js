
let goal = Math.floor(Math.random() * 100) + 50
let current = 0
let wins = 0
let losses = 0
const renderGems = () => {
    current = 0
    document.getElementById('gems').innerHTML = ''
    for(let i= 0; i < 4; i++) {
        const random = Math.floor(Math.random() * 20) + 1
        let gemElem = document.createElement("div")
        gemElem.className = 'col s2'
        gemElem.innerHTML = `
        <div class="card">
            <div class="card-image">
                <img id="gemPic" src="./assets/images/gem${i + 1}.png" class="gemElem" data-value="${random}">
            </div>
        </div>
        `

        document.getElementById('gems').append(gemElem)
    }
    document.getElementById('targetNumber').textContent = goal
    document.getElementById('chosenNumber').textContent = current
    document.getElementById('winCount').textContent = wins
    document.getElementById('lossCount').textContent = losses
}

document.addEventListener('click', event => {
    if (event.target.className === 'gemElem') {
        let gemValue = parseInt(event.target.dataset.value)
        current += gemValue
        console.log(gemValue)
        if (current === goal) {
            wins++
            renderGems ()
            
        } else if (current > goal) {
            losses++
            renderGems ()
            
        } else {

        }
    }
    document.getElementById('chosenNumber').textContent = current
})


renderGems()

