const alice = document.querySelector('.alice');
const espinho = document.querySelector('.espinho')
const pontos = document.querySelector('.pontos')
const planeta = document.querySelector('.planeta');
const jogoBase = document.querySelector('.jogo-base');
const btn = document.querySelector('.start-button')
const restartbtn = document.querySelector('.restart-button')
const url = './index.html'
const url2 = './fimjogo.html'

let contar = 0

function abrirOutraAba(url){
  const win = window.open(url, '_blank')
  win.focus
}

const pulo = () => {
    alice.classList.add('pulo');

    setTimeout(() => {

        alice.classList.remove('pulo');

    }, 500);

}

const loop = setInterval(() => {

    const espinhoPosition = espinho.offsetLeft
    const alicePosition = +window.getComputedStyle(alice).bottom.replace('px', '')

    console.log(alicePosition)

    console.log(espinhoPosition)

    if(espinhoPosition <= 120 && espinhoPosition > 0 && alicePosition < 80){
        espinho.style.animation = 'none'
        espinho.style.left = `${espinhoPosition}px`

        alice.style.animation = 'none'
        alice.style.bottom = `${alicePosition}px`

        alice.src = 'CSS/IMG/morte.gif'
        alice.style.width = '75px'
        alice.style.marginLeft = '50px'

        // acha um jeito ai de fazer q quando a alice morrer abrir o fimjogo.html
        clearInterval(loop)
        abrirOutraAba(url2)
    }
    
    contar++
    pontos.innerHTML = `Score: ${contar}`

}, 10)


document.addEventListener('keydown', pulo);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.documentElement.classList.add('change-bg');
    }, 5000);
  });

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        planeta.style.opacity = 0;
        setTimeout(function() {
          planeta.src = 'CSS/IMG/planeta2.png'; // 
          planeta.style.opacity = 1; 
        }, 1000); 
      }, 5000); 
    });

    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
          espinho.style.opacity = 0;
          setTimeout(function() {
            espinho.src = 'CSS/IMG/espinho2.png'; // 
            espinho.style.opacity = 1; 
          }, 1000); 
        }, 5000); 
      });

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
          jogoBase.classList.add('ativo');
        }, 5000);
      });

/*btn.addEventListener('click', () => {
  abrirOutraAba(url)
})*/

/*restartbtn.addEventListener('click', () => {
  abrirOutraAba(url)
})*/