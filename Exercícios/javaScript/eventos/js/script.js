//adicionando evento
const btn = document.querySelector("#meu-botao");
 
/* dois argumentos, tipo de evento e função
que vai acontecer após clicar no evento */
btn.addEventListener("click", function(){
    alert("Hello Word")
});

/*selecionando o camo de entrada e a div de saída
const inputField = document.getElementById('inputField')
const output = document.getElementById('output')

// adicionando o evento keydown ao campo de entrada 
inputField.addEventListener("keydown", function(event){
//exibir qual a tecla foi pressionada
output.textContent = `Você pressionou: ${event.key}`;*/


const inputField = document.getElementById('inputField')
const output = document.getElementById('output')

// adicionando o evento keydown ao campo de entrada 
inputField.addEventListener("keyup", function(event){
//exibir qual a tecla foi pressionada
output.textContent = `Você pressionou: ${event.key}`;
});


//outros eventos de mouse
/*const eventosMouse = document.querySelector("#mouse");
 
eventosMouse.addEventListener("mousedown", () => {
   alert("pressionou o Botão do mause");
});
 
eventosMouse.addEventListener("mouseup", () => {
   alert("Soltou o botão do mouse")
});
 
eventosMouse.addEventListener("dbclicick", () => {
   alert("Duplo click");
})

// movimento do mouse 
eventosMouse.addEventListener("mousemove", (e) => {
    console.log(`Mouse no eixo x: ${e.x}`)
    console.log(`Mouse no eixo y: ${e.y}`)
}); */

// focus e blur 
const input = document.querySelector("#meu-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("saiu do input")
})