let listaNumeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNatela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
function mensagemInicial (){
    exibirTextoNatela('h1', 'Jogo secreto');
    exibirTextoNatela('p',`Escolha um número entre 1 e ${numeroLimite}`);
}

mensagemInicial ();

function verificarChute (){

        let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNatela('h1','Acertou!!');
            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}`
        exibirTextoNatela('p', mensagemTentativas);

            document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto){
        exibirTextoNatela('p', 'O número é menor que o chute');
    } else {
        exibirTextoNatela('p', 'O número é maior que o chute');
    }

    tentativas++ 
    limparCampo ();

    }
}

function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteado.length;

        if (quantidadeDeElementosNaLista == numeroLimite){
            listaNumeroSorteado = []
        }
        if (listaNumeroSorteado.includes(numeroEscolhido)){
            return gerarNumeroAleatorio()
        } else {
          listaNumeroSorteado.push(numeroEscolhido);
          console.log(listaNumeroSorteado)
          return numeroEscolhido;

        }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo (){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

