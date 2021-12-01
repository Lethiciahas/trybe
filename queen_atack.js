// posição rainha
let posicaoRainhalinha=2;
let posicaoRainhaColuna=6;

//posição da outra peça
let posicaoPecaLinha =2;
let posicaoPecaColuna=6;

// variavel que identifica se o ataque fou bem sucedido
let ataqueBemSucedido=false;

// testar linha e coluna
if (posicaoPecaLinha===posicaoRainhalinha) {
    ataqueBemSucedido=true;
    console.log("ataque bem sucedido na mesma linha")
}
if (posicaoPecaColuna===posicaoRainhaColuna) {
    ataqueBemSucedido=true;
    console.log("ataque bem sucedido na mesma coluna")
}
// variavel identificar diagonal inferior esquerda
for(let casas=1; casas < 8; casas+=1) {
    let linhaRainha= posicaoRainhalinha - casas;
    let colunaRainha=posicaoRainhaColuna - casas;

    if(linhaRainha < 0 || colunaRainha <0) {
        break;
    }

    if ((posicaoPecaLinha===linhaRainha) && (posicaoPecaColuna===colunaRainha)){
        ataqueBemSucedido=true;
        console.log("ataque bem sucedido na diagonal inferior esquerda");
        break;
    }
}
// variavel identificar diagonal superior direita
for(let casas=1; casas < 8; casas+=1) {
    let linhaRainha= posicaoRainhalinha + casas;
    let colunaRainha=posicaoRainhaColuna + casas;

    if(linhaRainha > 7 || colunaRainha < 7) {
      break;
    }

    if ((posicaoPecaLinha===linhaRainha) && (posicaoPecaColuna===colunaRainha)){
        ataqueBemSucedido=true;
        console.log("ataque bem sucedido na diagonal superior direita");
        break;
    }
}
// variavel indentificar diagonal superior esquerda
for(let casas=1; casas < 8; casas+=1) {
    let linhaRainha= posicaoRainhalinha + casas;
    let colunaRainha=posicaoRainhaColuna - casas;

    if(linhaRainha > 7 || colunaRainha < 0) {
      break;
    }

    if ((posicaoPecaLinha===linhaRainha) && (posicaoPecaColuna===colunaRainha)){
        ataqueBemSucedido=true;
        console.log("ataque bem sucedido na diagonal superior esquerda");
        break;
    }
}
// variavel indentificar diagonal inferior direita
for(let casas=1; casas < 8; casas+=1) {
    let linhaRainha= posicaoRainhalinha - casas;
    let colunaRainha=posicaoRainhaColuna + casas;

    if(linhaRainha < 0 || colunaRainha > 7) {
      break;
    }

    if ((posicaoPecaLinha===linhaRainha) && (posicaoPecaColuna===colunaRainha)){
        ataqueBemSucedido=true;
        console.log("ataque bem sucedido na diagonal inferior direita")
        break;
    }
}
if (ataqueBemSucedido=== false) {
    console.log("ataque mal sucedido")
}