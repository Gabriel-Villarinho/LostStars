const alice = document.querySelector('.alice');

const pulo = () => {
    alice.classList.add('pulo');

    setTimeout(() => {

        alice.classList.remove('pulo');

    }, 500);

}

document.addEventListener('keydown', pulo);