console.log('Yo')

const board = document.querySelector('#board')
const colors = ['white']
const SQUARES_NUMBER = 800

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    element.style.backgroundColor = getRandomColor()
    element.style.boxShadow = `0 0 2px ${getRandomColor}, 0 0 10px ${getRandomColor}`
}

function removeColor (element) {
    element.style.backgroundColor = '#111111'
    element.style.boxShadow = `0 0 2px #111111`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

//