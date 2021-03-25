window.onload = letöltések()

var kérdések;
var holvunk = 0;
var kérdészekSzáma;
var jóVálasz;

function letöltések()
{
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d;
        kérdésMegjelenítés(0)
        kérdészekSzáma = kérdések.length;


        
        
    }
    
    
    
    
};
function kérdésMegjelenítés(kérdésszorszám) {
    console.log(`${kérdések.length} letöltés érkezett`)

    let kérdés = document.getElementById("kérdés_szöveg")
    kérdés.innerText = kérdések[kérdésszorszám].questionText;
    

    let megjelenítettKép = document.getElementById("kép1")
    megjelenítettKép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésszorszám].image
    
    let válasz1 = document.getElementById("válasz1")
    let válasz2 = document.getElementById("válasz2")
    let válasz3 = document.getElementById("válasz3")
    válasz1.innerHTML = kérdések[kérdésszorszám].answer1
    válasz2.innerHTML = kérdések[kérdésszorszám].answer2
    válasz3.innerHTML = kérdések[kérdésszorszám].answer3

    jóVálasz = kérdések[kérdésszorszám].correctAnswer;

    válasz2.classList.remove("jó","rossz")
    válasz1.classList.remove("jó", "rossz")
    válasz3.classList.remove("jó", "rossz")

    
}
function előre() {
    if (holvunk == kérdészekSzáma-1) {
        holvunk = 0;
        kérdésMegjelenítés(holvunk)

    }
    else {
        holvunk = holvunk + 1;
        kérdésMegjelenítés(holvunk);
    }
    
}
function vissza() {
    if (holvunk == 0) {
        holvunk = kérdészekSzáma-1
        kérdésMegjelenítés(holvunk)
        

    }
    else {
        holvunk = holvunk - 1;
        kérdésMegjelenítés(holvunk);
    }
    
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




