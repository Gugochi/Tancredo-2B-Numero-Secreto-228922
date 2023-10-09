window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const Recognition = new SpeechRecognition ();
Recognition.lang = 'pt-BR'
Recognition.start()

Recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    console.log(e.results [0][0].transcript)
}