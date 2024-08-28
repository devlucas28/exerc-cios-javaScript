// Crie uma variável para armazenar seu nome completo
const nomeCompleto = "Lucas Wallace SIlva dos Santos"
console.log(nomeCompleto)
 
// Crie uma variável para armazenar se você gosta de programar (true ou false)
 
const estudar = true;
const naoestudo = false;
console.log(estudar);
 
// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável
 
//2 + (3 x 4) - 5
 
 
 
const a = 2;
const b = 3;
const c = 4;
const d = 5;
 
 
console.log( (a + (b * c) -d));
 
//2 x (3 + 4) - 5 ÷ 5
 
const e = 2;
const f = 3;
const g = 4;
const h = 5;
 
 
console.log(  e * ( f + g ) - h/h );
 
 
//{[(10 - 4) / 2] * 3} + 1
 
const i = 10;
const j = 4;
const k = 2;
const l = 3;
const m = 1;
 
console.log ( (i - j)  / k * l + m);
 
//3 * 4 / 2 + 1 - 5
 
const n = 3;
const o = 4;
const p = 2;
const q = 1;
const r = 5;
 
console.log(( n * o ) / p + q - r);
 
//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
const idade = 28
const tamanho = 2.00
const poema = `
" No início, há um brilho na manhã clara Um homem alto com ${tamanho} metros de altura & se ergue, sua jornada não para.
  De passos incertos a destinos traçados, Ele molda o mundo com seus sonhos sonhados. &
  aparentemente com ${idade} anos de idade. " `
 
console.log(poema)
 
 
 
 
//Crie um programa que exiba a data atual formatada utilizando interpolação
const hoje = 28;
const mes = 8;
const ano = 2024;

console.log (` hoje é: ${hoje}/O${mes}/${ano}  " `)

//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação
/*let base = parseFloat(prompt("Insira o valor base"))
 let altura = parseFloat(prompt("Insira a altura do Retângulo"))

 let resultado = base * altura

 console.log(`O Resultado do seu Retângulo é ${resultado}`) */

//Crie uma condicional para verificar se o caractere é uma vogal
/*let letra = prompt(" insira uma letra! ")


if(letra == "a" ){
        alert(  " isso é uma vogal" )
}else if( letra == "e") {
    alert(" isso é uma Vogal! ")
}
else if( letra == "i") {
    alert(" isso é uma Vogal! ")
}

else if( letra == "o") {
    alert(" isso é uma Vogal! ")
}
else if( letra == "u") {
    alert(" isso é uma Vogal! ")
} else{
    alert("isso não é uma vogal");
} 
    */




//Crie uma condicional para verificar se o número é par ou é impar
/*let N = prompt("Digite um número")
let total = N/2

if(N%2 === 0){
    alert("o número é par")
}else{
    alert("esse é um número impar")
} */

//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:


//Calcule a média do aluno e verifique se ele foi aprovado
/*
let prova1 = parseFloat(prompt(" Qual nota o aluno tirou na primeira prova ?"))
let prova2 = parseFloat(prompt(" Qual nota o aluno tirou na segunda prova  ?"))

let Resultado = prova1/2  + prova2/2

if(Resultado >= 6.5){
    alert("O Aluno foi aprovado")
} else alert("O aluno foi reprovado") */

// Crie uma variável para armazenar um array com seus hobbies
const hobbies = ['Atividade física', 'Estudar programação', 'jogar vídeo game', 'asssistir tv' ]
console.log(hobbies)
 
/*
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.
 
*/

let frutas = ['Banana', 'Manga', 'Maça', 'Caqui', 'Uva']
console.log(frutas[1])
let frutasAdicionais = frutas.push('perâ', 'Melão')
console.log(frutas)
frutas.shift()
console.log(frutas)
 
/*
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/

let numero = 7
console.log(typeof 7)
 
/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */
 let numero1 = parseFloat(prompt("Insira um número"))
 let numero2 = parseFloat(prompt("Insira outro número"))

 

let resultado 
 
 switch(resultado) {
    case "+":
        resultado = (numero1 + numero2)
        break
    case "-":
        resultado = (numero1 - numero2)
        break
    case "*":
        resultado = (numero1 * numero2)
        break
    case "/":
        resultado = (numero1 / numero2)
        break
        default:
            resultado = alert("Digite Algo")
 
    } 


    alert(resultado) 
