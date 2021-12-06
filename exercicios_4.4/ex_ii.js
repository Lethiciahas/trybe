//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
///Exemplo de palíndromo: arara .
//verificaPalindrome('arara') ;
//Retorno esperado: true
//verificaPalindrome('desenvolvimento') ;
//Retorno esperado: false

function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
 // console.log(verificaPalindrome('arara'));
  //console.log(verificaPalindrome('desenvolvimento'));


//
function posicaoMaior (number) {
    let numeroMaior = 0;
    for(let indice in number){
        if(number[numeroMaior]<number[indice]){
            numeroMaior = indice;
        }
    }
    return numeroMaior;
}
console.log(posicaoMaior ([0,5,6,80,50,1]));