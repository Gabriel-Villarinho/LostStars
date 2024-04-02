const alice = document.querySelector('.alice');
const espinho = document.querySelector('.espinho')

const pulo = () => {
    alice.classList.add('pulo');

    setTimeout(() => {

        alice.classList.remove('pulo');

    }, 500);

}

const loop = setInterval(() => {

    const espinhoPosition = espinho.offsetLeft
    const alicePosition = +window.getComputedStyle(alice).bottom.replace('px', '')

    //console.log(alicePosition)

    //console.log(espinhoPosition)

    if(espinhoPosition <= 120 && espinhoPosition > 0 && alicePosition < 80){
        espinho.style.animation = 'none'
        espinho.style.left = `${espinhoPosition}px`

        alice.style.animation = 'none'
        alice.style.bottom = `${alicePosition}px`

        alice.src = 'CSS/IMG/morte.jpg'
        alice.style.width = '75px'
        alice.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', pulo);