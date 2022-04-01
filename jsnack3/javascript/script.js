// Jsnack3

// Inizializzazione variabili
const myArray = [];
const app = document.getElementById("app");
const enter = document.getElementById("enter");
const input = document.getElementById("userNumber");
const reset = document.getElementById("reset");
const label = document.getElementById("label");
let tot = 0;

// Impostazione iniziale pagina
enter.disabled = true;
input.focus();

// Creazione elemento di output
const h2 = document.createElement("h2");
app.append(h2);

// Eventi
enter.addEventListener("click", enterFunction);
reset.addEventListener("click", resetFunction);
input.addEventListener("keyup", checkFunction);

// Funzioni
// Controllo numero cifre e somma
function enterFunction(){
    const userNumber = input.value;
    userNumberArray = userNumber.split("");
        for(var i = 0; i < userNumberArray.length; i++) {
            userNumberArray[i] = parseInt(userNumberArray[i]);
            tot += userNumberArray[i];
        }
        label.classList.add("hide");
        input.classList.add("hide");
        enter.classList.add("hide");
        reset.classList.remove("hide");
        h2.innerHTML = `La somma delle quattro cifre è: ${tot}`;
}
// Reset
function resetFunction() {
    label.classList.remove("hide");
    input.classList.remove("hide");
    enter.classList.remove("hide");
    reset.classList.add("hide");
    h2.innerHTML = "";
    input.focus();
    enter.disabled = true;
    tot = 0;
}
// Attivazione bottone alla quarta cifra
function checkFunction(){
    if(input.value.split("").length == 4) {
        enter.disabled = false;
    } else {
        enter.disabled = true;
    }
}