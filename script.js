//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
//n = 5
//*****
//*****
//*****
//*****
//*****

let n = 5;
let asteriscos = '*';
let linha = '';

for (let index= 0; index < n; index+= 1) {
  linha = linha + asteriscos;
};
for (let index = 0; index < n; index += 1) {
  console.log(linha);
};