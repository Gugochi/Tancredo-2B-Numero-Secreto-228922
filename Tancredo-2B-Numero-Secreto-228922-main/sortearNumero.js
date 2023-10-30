const menorValor = 1
const maiorValor = 100

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() *100)

}

console.log('Número Secreto é: ', numeroSecreto)

const elementoMenorValor = document.getElementById('menorValor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maiorValor')
elementoMaiorValor.innerHTML = maiorValor