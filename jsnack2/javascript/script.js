// Jsnack2

// Inizializzazione variabili
const myArray = [];
const app = document.getElementById("app");
const enter = document.getElementById("enter");
const input = document.getElementById("userNumber");
const reset = document.getElementById("reset");
const label = document.getElementById("label");
const span = document.getElementById("counter");
let c = 0;
let entries = 1;
let counter = 6;

//Impostazione iniziale pagina
span.innerHTML = counter;
input.focus();

// Creazione elemento di output
const h2 = document.createElement("h2");
app.append(h2);

// Eventi
enter.addEventListener("click", enterFunction);
reset.addEventListener("click", resetFunction);

// Funzioni
// Controllo dispari
function enterFunction(){
    const userNumber = input.value;
    if(entries <= 6) {
        if((userNumber % 2) != 0) {
            myArray[c] = userNumber;
             c++;
         }
    }
    if(entries == 6) {
        label.classList.add("hide");
        input.classList.add("hide");
        enter.classList.add("hide");
        reset.classList.remove("hide");
        h2.innerHTML = `I numeri dispari che hai inserito sono: ${myArray}`;
    }
    input.value = "";
    input.focus();
    entries++;
    counter--;
    span.innerHTML = counter;
}
// Reset
function resetFunction() {
    label.classList.remove("hide");
    input.classList.remove("hide");
    enter.classList.remove("hide");
    reset.classList.add("hide");
    h2.innerHTML = "";
    c = 0;
    entries = 1;
    counter = 6;
    span.innerHTML = counter;
    input.focus();
}