const config = {
    gamers: [],
    gamerList: '',
    roletaShow: true,
    pontosRoleta: 0,
    jogadorAtual: false,
    totalLetras: 0,
    LetrasEncontradas: 0 
}

const el = {
    home: document.querySelector('.pag-home'),
    game: document.querySelector('.pag-game'),
    areaGame: document.querySelector('.area-game'),
    roleta: document.querySelector('.area-roleta'),
    letra: document.querySelector('#letraTample'),
    alfabeto: document.querySelector('#alfabetoTample'),
    listaJogadores: document.querySelector('.gamers')
}

let panelWords = [];
let panelWordsUsed = [];

function init() {
    event.preventDefault();

    el.home.style.display="none";
    el.game.style.display="block";

    let primeiroJogador = Math.floor(Math.random() * config.gamers.length);
    config.gamers[primeiroJogador].jogando = true;
    config.jogadorAtual = primeiroJogador;

    el.listaJogadores.appendChild(ListaJogadores())

    //Painel
    addPanel();
    alfabetoGamer();
    showRoleta();
}

function ListaJogadores() {
    const listaJogadores = document.createElement('ul');
    listaJogadores.id = 'actualGamers'

    config.gamers.forEach( (gamer, index) => {
        const itemGame = document.createElement('li');
        itemGame.id = 'playID' + index
        if (gamer.jogando) {
            itemGame.classList.add('playing');
        }

        const nomeJogador = document.createElement('span');
        nomeJogador.classList.add('nomeJogador');
        nomeJogador.innerHTML = gamer.jogador;

        const pontosTotais = document.createElement('span');
        pontosTotais.classList.add('pontosTotais');
        pontosTotais.innerHTML = gamer.pontosTotais;

        const pontosRodada = document.createElement('span');
        pontosRodada.classList.add('pontosRodada');
        pontosRodada.innerHTML = gamer.pontosRodada;
       
        itemGame.appendChild(nomeJogador);
        itemGame.appendChild(pontosTotais);
        itemGame.appendChild(pontosRodada);

        listaJogadores.appendChild(itemGame);
    })

    return listaJogadores;
}

function sorteWord() {
    //criar arra com já sortieda para não repetir
    let newSorteWord = false
    if(panelWordsUsed.length !== DBWords.length) {
       
        do {
            newSorteWord = Math.floor(Math.random() * DBWords.length)
        } while (panelWordsUsed.indexOf(newSorteWord) !== -1);

        panelWordsUsed.push(newSorteWord)

        return DBWords[newSorteWord];
    } else {
        alert('Não há mais palavras no Banco de Dados')
        return false
    }

}

function addPanel() {
    const ActualWord = sorteWord();
    
    const maiorWord = ActualWord.word.reduce(function (atual, proximo) {
        return atual.length > proximo.length ? atual : proximo;
    });

    const pConfig = {
        initRow: ActualWord.word.length < 3 ? 1 : 0,
        initColl: maiorWord.length < 11 ? 2 : 1
    }
  
    let indexWord = 0
    for(let i = 0; i<4; i++) {
        let painel = document.createElement('div');
        painel.classList.add('linha')

        let indexChar = 0
        for(let j = 0; j<14; j++) {
            const letra = el.letra.cloneNode(true);
            letra.id = `L${i}-C${j}`;
            if(i >= pConfig.initRow && 
               j >= pConfig.initColl && 
               i < ActualWord.word.length + pConfig.initRow &&
               j <= ActualWord.word[indexWord].length + pConfig.initColl - 1) {
                letra.classList.add('sorte-letra')
                panelWords.push({id: `L${i}-C${j}`, letter: ActualWord.word[indexWord][indexChar].toUpperCase()})
                indexChar++;
                config.totalLetras++;
            }

            painel.appendChild(letra);
        }
   
        if ( i >= pConfig.initRow & ActualWord.word.length-1 > indexWord) 
            indexWord++;
        
        document.querySelector('.area-game .dica').innerText = ActualWord.tip;
        document.querySelector('.area-game .panel').appendChild(painel);
    }
}

function alfabetoGamer() {
    
    let alfabeto = {
        linha01: document.createElement('div'),
        linha02: document.createElement('div')
    }

    for(let i = 97; i<123; i++) {
        document.querySelector('.pag-game .area-alfabeto').innerHTML = '';
        alfabeto.linha01.classList.add('linha-01');
        alfabeto.linha02.classList.add('linha-02');

        const letraAtual = String.fromCharCode(i);
        const letraAlfabeto = el.alfabeto.cloneNode(true);
        letraAlfabeto.id = `lt-${letraAtual}`;
        letraAlfabeto.addEventListener('click', () => handleLetter(letraAtual.toUpperCase())); 
        letraAlfabeto.innerHTML = letraAtual.toUpperCase()

        i < 111 ? alfabeto.linha01.appendChild(letraAlfabeto) : alfabeto.linha02.appendChild(letraAlfabeto);

    }

    document.querySelector('.pag-game .area-alfabeto').appendChild(alfabeto.linha01);
    document.querySelector('.pag-game .area-alfabeto').appendChild(alfabeto.linha02);
}

function addGamer() {
    event.preventDefault();
    let jogador = document.querySelector('form #newGamer').value.trim();
    document.querySelector('form #newGamer').value = '';
    let jogadores = '';
    
    if ((jogador.length > 0) && (config.gamerList.indexOf(jogador) === -1)) {
        config.gamers.push({
            jogador,
            pontosTotais: 0,
            pontosRodada: 0,
            jogando: false
        });
    } else {
        alert('Coloque um nome que você ainda não adicionou')
    }
    
    config.gamerList = '';

    config.gamers.forEach(gamer => {
        config.gamerList += `<li>${gamer.jogador}</li>\n`;
    });

    document.querySelector('ul#listGamer').innerHTML =  config.gamerList;
}

const handleLetter = letter => {
    let acertos = 0

    if(!config.roletaShow) {
        panelWords.forEach( (panelLetter, index) => {
            if(panelLetter.letter.normalize('NFD').replace(/[\u0300-\u036f]/g, "") === letter) {
                const panelLetterActual = document.querySelector('#' + panelLetter.id);
                panelLetterActual.innerText = panelLetter.letter;
                panelLetterActual.classList.add('show-letra');
                panelLetterActual.classList.remove('sorte-letra');
                config.LetrasEncontradas++
                acertos++;
            }
        })
        
        let clickLetter =  document.querySelector('#lt-' + letter.toLowerCase())
        clickLetter.classList.add('used');
        clickLetter.classList.remove('not-used');
        clickLetter.removeEventListener('click', handleLetter, false);
        
        if (acertos !== 0) {
            const somaPontos = acertos * config.pontosRoleta;
            config.gamers[config.jogadorAtual].pontosRodada += somaPontos;
            document.querySelector('ul#actualGamers li.playing span.pontosRodada').innerText = config.gamers[config.jogadorAtual].pontosRodada;
        }else {

            const ataulplayID = config.jogadorAtual
            config.jogadorAtual++;
            if(config.jogadorAtual >= config.gamers.length) {
                config.jogadorAtual = 0;
            }

            document.querySelector('#playID'+ataulplayID).classList.remove('playing');
            document.querySelector('#playID'+config.jogadorAtual).classList.add('playing');

            config.pontosRoleta = 0;
        }

        config.roletaShow = true;
        showRoleta();
    } else {
        alert('Gire a Roleta');
    }

    if (config.totalLetras === config.LetrasEncontradas) {
        alert(config.gamers[config.jogadorAtual].jogador + ' Venceu a Rodada');
        config.gamers[config.jogadorAtual].pontosTotais += config.gamers[config.jogadorAtual].pontosRodada;
        config.gamers.forEach((gamer, index) =>{
            config.gamers[index].pontosRodada = 0;
            config.gamers[index].jogando = false;
        })

        if (confirm('Iniciar uma nova rodadda?')) {
            document.querySelector('.area-game .panel').innerHTML = '';
            
            config.roletaShow = true;
            config.pontosRoleta = 0;
            config.totalLetras = 0;
            config.LetrasEncontradas = 0;
            panelWords = [];

            const ataulplayID = config.jogadorAtual;
            config.jogadorAtual++;

            if(config.jogadorAtual >= config.gamers.length) {
                config.jogadorAtual = 0;
            }

            document.querySelector('#playID'+ataulplayID).classList.remove('playing');
            config.gamers[ataulplayID].jogando = false;
            config.gamers[config.jogadorAtual].jogando = true;
    
            el.listaJogadores.innerHTML = '';
            el.listaJogadores.appendChild(ListaJogadores());

            addPanel();
            alfabetoGamer();
            
        }
    }
}

function showRoleta(){
    el.areaGame.classList.add('roleta-show');
    el.roleta.classList.add('roleta-show');
}

// #e70697 
/* Roleta  ----------------------------------------------------------------- */
// Create new wheel object specifying the parameters at creation time.
var theWheel = new Winwheel({
    'outerRadius'     : 180,        // Set outer radius so wheel fits inside the background.
    'innerRadius'     : 35,         // Make wheel hollow so segments don't go all way to center.
    'textFontSize'    : 24,         // Set default font size for the segments.
    'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
    'textAlignment'   : 'outer',    // Align text to outside of wheel.
    'numSegments'     : 20,         // Specify number of segments.
    'segments'        :             // Define segments including colour and text.
    [                               // font size and test colour overridden on backrupt segments.
       {'fillStyle': '#cd0000', 'text': '1000'},
       {'fillStyle': '#3cb878', 'text': '200'},
       {'fillStyle': '#cdcd00', 'text': '400'},
       {'fillStyle': '#cd0067', 'text': '700'},
       {'fillStyle': '#000000', 'text': 'PERDEU TUDO', 'textFontSize' : 12, 'textFillStyle' : '#ffffff'},
       {'fillStyle': '#6700cd', 'text': '800'},
       {'fillStyle': '#00cd66', 'text': '600'},
       {'fillStyle': '#0067cd', 'text': '500'},
       {'fillStyle': '#ffffff', 'text': 'PASSOU A VEZ', 'textFontSize' : 12},
       {'fillStyle': '#00cdcd', 'text': '900'},
       {'fillStyle': '#cd0000', 'text': '1000'},
       {'fillStyle': '#006387', 'text': '100'},
       {'fillStyle': '#cd6700', 'text': '300'},
       {'fillStyle': '#00cd66', 'text': '600'},
       {'fillStyle': '#000000', 'text': 'PERDEU TUDO', 'textFontSize' : 12, 'textFillStyle' : '#ffffff'},
       {'fillStyle': '#cdcd00', 'text': '400'},
       {'fillStyle': '#cd0067', 'text': '700'},
       {'fillStyle': '#0067cd', 'text': '500'},
       {'fillStyle': '#ffffff', 'text': 'PASSOU A VEZ', 'textFontSize' : 12},
       {'fillStyle': '#00cdcd', 'text': '900'}
    ],
    'animation' :           // Specify the animation to use.
    {
        'type'     : 'spinToStop',
        'duration' : 8,     // Duration in seconds.
        'spins'    : 3,     // Default number of complete spins.
        'callbackFinished' : alertPrize
    }
});

// Vars used by the code in this page to do power controls.
var wheelPower    = 0;
var wheelSpinning = false;

// -------------------------------------------------------
// Function to handle the onClick on the power buttons.
// -------------------------------------------------------
function powerSelected(powerLevel)
{
    // Ensure that power can't be changed while wheel is spinning.
    if (wheelSpinning == false)
    {
        // Reset all to grey incase this is not the first time the user has selected the power.
        document.getElementById('pw1').className = "";
        document.getElementById('pw2').className = "";
        document.getElementById('pw3').className = "";

        // Now light up all cells below-and-including the one selected by changing the class.
        if (powerLevel >= 1)
        {
            document.getElementById('pw1').className = "pw1";
        }

        if (powerLevel >= 2)
        {
            document.getElementById('pw2').className = "pw2";
        }

        if (powerLevel >= 3)
        {
            document.getElementById('pw3').className = "pw3";
        }

        // Set wheelPower var used when spin button is clicked.
        wheelPower = powerLevel;

        // Light up the spin button by changing it's source image and adding a clickable class to it.
        document.getElementById('spin_button').src = "spin_on.png";
        document.getElementById('spin_button').className = "clickable";
    }
}

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin()
{
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false)
    {
        // Based on the power level selected adjust the number of spins for the wheel, the more times is has
        // to rotate with the duration of the animation the quicker the wheel spins.
        if (wheelPower == 1)
        {
            theWheel.animation.spins = 3;
        }
        else if (wheelPower == 2)
        {
            theWheel.animation.spins = 6;
        }
        else if (wheelPower == 3)
        {
            theWheel.animation.spins = 9;
        }

        // Disable the spin button so can't click again while wheel is spinning.
        // document.getElementById('spin_button').src = "spin_off.png";
        // document.getElementById('spin_button').className = "";

        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();

        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

   // document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
    // document.getElementById('pw2').className = "";
    // document.getElementById('pw3').className = "";

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// -------------------------------------------------------

function alertPrize(indicatedSegment)
{
    // Just alert to the user what happened.
    // In a real project probably want to do something more interesting than this with the result.
    if (indicatedSegment.text === 'PERDEU TUDO')
    {
        alert('PERDEU TUDO');
        config.gamers[config.jogadorAtual].pontosRodada = 0;
        document.querySelector('ul#actualGamers li.playing span.pontosRodada').innerText = 0
        
        const ataulplayID = config.jogadorAtual
        config.jogadorAtual++;
        if(config.jogadorAtual >= config.gamers.length) {
            config.jogadorAtual = 0;
        }

        document.querySelector('#playID'+ataulplayID).classList.remove('playing');
        document.querySelector('#playID'+config.jogadorAtual).classList.add('playing');

        config.pontosRoleta = 0;
    }
    else if (indicatedSegment.text === 'PASSOU A VEZ')
    {
        alert('PASSA A VEZ');

        const ataulplayID = config.jogadorAtual
        config.jogadorAtual++;
        if(config.jogadorAtual >= config.gamers.length) {
            config.jogadorAtual = 0;
        }

        document.querySelector('#playID'+ataulplayID).classList.remove('playing');
        document.querySelector('#playID'+config.jogadorAtual).classList.add('playing');

        config.pontosRoleta = 0;
    }
    else
    {
        alert("You have won " + indicatedSegment.text);
        config.pontosRoleta = parseInt(indicatedSegment.text);
        el.areaGame.classList.remove('roleta-show')
        el.roleta.classList.remove('roleta-show')
        config.roletaShow = false
    }

    resetWheel()
 
}