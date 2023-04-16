let array = [3, 10, 5, 8, 33, 9, 0, 1, 2, 4]
var resultado
let num_real = [1.11, 3.89, 0.412, 6.034, 7.65]
let opcao = prompt('Insira a opção desejada (1, 2, 3 ou 4):')

// Realizando a operação escolhida
switch (opcao) {
  case "1":
    resultado = num1 + num2;
    break;
  case "2":
    resultado = num1 - num2;
    break;
  case "3":
    resultado = num1 * num2;
    break;
  case "4":
    resultado = num1 / num2;
    break;
  default:
    console.log("Operação inválida!");
    break;
}

// Exibindo o resultado da operação
if (resultado !== undefined) {
  console.log(`O resultado de ${num1} ${operacao} ${num2} é ${resultado}`);
}
*/

Exec 1:

// Criando um array com 10 elementos
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando a estrutura de repetição while
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Usando a estrutura de repetição do-while
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);

// Usando a estrutura de repetição for
for (let k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}

// Usando a estrutura de repetição foreach
arr.forEach((element) => {
  console.log(element);
});

ExEC 2:

for(let conta= 1; conta <= 10; conta++){

  resultado = conta * 2;
    console.log('Tabuada de 2 =' + conta + ' * 2 =' + resultado)
}
eXEC 3:


// Criando um array com 5 números reais
let numeros = [3.14, 2.71, 1.618, 0.577, 1.414]

// Exibindo o quadrado de cada número
numeros.forEach(num => {
  console.log(`O quadrado de ${num} é ${Math.pow(num, 2)}`)
})

// Exibindo a raiz quadrada de cada número
numeros.forEach(num => {
  console.log(`A raiz quadrada de ${num} é ${Math.sqrt(num)}`)
})

// Exibindo apenas a parte inteira de cada número
numeros.forEach(num => {
  console.log(`A parte inteira de ${num} é ${Math.floor(num)}`)
})

// Exibindo o número arredondado para baixo
numeros.forEach(num => {
  console.log(`O número ${num} arredondado para baixo é ${Math.floor(num)}`)
})

// Exibindo o número arredondado para cima
numeros.forEach(num => {
  console.log(`O número ${num} arredondado para cima é ${Math.ceil(num)}`)
})
