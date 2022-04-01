// Jsnack1

// Creazione array ospiti
const guests = [
    "Aldo Baglio",
    "Giovanni Storti",
    "Giacomo Poretti",
    "Ugo Fantozzi"
]

// Inizializzazione variabili con gli elementi della pagina
const app = document.getElementById("app");
const check = document.getElementById("check");
const reset = document.getElementById("reset");

// Impostazione iniziale pagina
document.getElementById("nome").focus();

// Creazione elemento di output
const h2 = document.createElement("h2");
app.append(h2);

// Eventi
check.addEventListener("click", checkFunction);
reset.addEventListener("click", resetFunction);

// Funzioni
// Controllo nome
function checkFunction(){
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const userName = nome.concat(" ", cognome);
    let verify = false;
    let i = 0;
    do {
        if(userName == guests[i]){
            h2.innerHTML = "Puoi entrare";
            verify = true;
        }
        i++;
    }
    while (i < guests.length && verify == false);
    if(verify == false) {
        h2.innerHTML = "Non puoi entrare";
    }
}

// Reset output
function resetFunction() {
    h2.innerHTML = "";
}