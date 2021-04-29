var holvunk = 1;
window.onload = kérdésBetöltés(holvunk)

var kérdések;

var kérdészekSzáma;
var jóVálasz;




function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
} 
    

function kérdésMegjelenítés(kérdés) {

    console.log(kérdés)

    let kérdésszoveg = document.getElementById("kérdés_szöveg")
    kérdésszoveg.innerText = kérdés.questionText;
    

    let megjelenítettKép = document.getElementById("kép1")
    if (kérdés.image == "") {
        megjelenítettKép.src = "https://cdn.nwmgroups.hu/s/img/i/1603/201603245.jpg?w=800&h=511&t=5"
        
    }
    else { megjelenítettKép.src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;}
    
        
    let válasz1 = document.getElementById("válasz1")
    let válasz2 = document.getElementById("válasz2")
    let válasz3 = document.getElementById("válasz3")
    válasz1.innerHTML = kérdés.answer1
    válasz2.innerHTML = kérdés.answer2
    válasz3.innerHTML = kérdés.answer3

    jóVálasz = kérdés.correctAnswer;

    válasz2.classList.remove("jó","rossz")
    válasz1.classList.remove("jó", "rossz")
    válasz3.classList.remove("jó", "rossz")

    
}

function előre() {
    holvunk++;
    kérdésBetöltés(holvunk);
    
}
function vissza() {
    holvunk--;
    kérdésBetöltés(holvunk);
    
}
function megjelöltVálasz1() {
    let megjelöltválasz1 = document.getElementById("válasz1")

    if (jóVálasz==1) {
        megjelöltválasz1.classList.add("jó")
    }
    else {
        megjelöltválasz1.classList.add("rossz")
    }
    
}
function megjelöltVálasz2() {
    let megjelöltválasz2 = document.getElementById("válasz2")

    if (jóVálasz == 2) {
        megjelöltválasz2.classList.add("jó")
    }
    else {
        megjelöltválasz2.classList.add("rossz")
    }
}
function megjelöltVálasz3() {

    let megjelöltválasz3 = document.getElementById("válasz3")

    if (jóVálasz == 3) {
        megjelöltválasz3.classList.add("jó")
    }
    else {
        megjelöltválasz3.classList.add("rossz")
    }
}




