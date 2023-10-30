function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInválido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
    elementoChute.innerHTML += `
    <div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>
    `
}    

if (numero === numeroSecreto){
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
    `
}else if (numero > numeroSecreto){
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
}else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> 
    `
}
}

function chuteForInválido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}