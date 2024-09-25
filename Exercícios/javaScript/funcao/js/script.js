// funções

function minhaFuncao(){
    console.log("Teste de Função")
}


minhaFuncao();
minhaFuncao();

//Função na variavel
const minhaFuncaonaVariavel =  function(){
    console.log("teste de Função na variável")
}

minhaFuncaonaVariavel()

//Função por parâmetro
function funcaonoParametro(txt){
    console.log(`exibindo ${txt}`);
}

funcaonoParametro("Teste de Função no Parâmetro");

//return

const a = 5
const b = 6
const c = 10
const d = 40


function soma(n1, n2){
    return n1 + n2
}

const resultado = soma (a,b);
console.log(resultado);

console.log(soma(c,d));

//escopo alinhado
let m = 15;

function escopoAninhado(){
    let m = 30;
    
    if(true){
        let m = 35;
        console.log(m)
    }
    console.log(m)
}

escopoAninhado()
console.log(m);

// Arrou function 
const quadrado = (numero) => numero * numero;

console.log(quadrado(5));

const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5))
console.log(raizQuadrada2(12))