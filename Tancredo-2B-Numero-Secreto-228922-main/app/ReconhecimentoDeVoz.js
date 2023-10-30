const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const Recognition = new SpeechRecognition ();
Recognition.lang = 'pt-BR'
Recognition.start()

Recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results [0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(){
    elementoChute.innerHTML = `
    <div> Você dissse </div>
    <span class="box">${chute}</span>
    `
}

Recognition.addEventListener('end', () => Recognition.start())