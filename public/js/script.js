const button = document.querySelector("#play");
const incorrect = document.querySelector("#incorrect");
const form = document.querySelector("form");
const sucess = document.querySelector("#sucess");
const newGame = document.querySelector("#new-game");
const frase = document.querySelector("#frase");

let tentativas = 1;

let numberRandom = Math.round(Math.random() * 10);

button.addEventListener("click", (e) =>{
    e.preventDefault();
    const tentativa = document.querySelector("#tentativa").value;

    if(numberRandom == tentativa){
        incorrect.classList.add("hidden");
        form.classList.add("hidden");
        frase.innerText = `Acertou em ${tentativas} tentativas!`
        sucess.classList.remove("hidden");
    }else{
        tentativas++;
        incorrect.classList.remove("hidden");
    }
});

newGame.addEventListener("click", (e) =>{
    e.preventDefault();
    form.classList.remove("hidden");
    sucess.classList.add("hidden");

    numberRandom = Math.round(Math.random() * 10);
    tentativas = 1;
})