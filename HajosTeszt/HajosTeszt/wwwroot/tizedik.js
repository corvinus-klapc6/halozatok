var holvunk = 1;
window.onload = () => {init()}

var kérdések;

var kérdészekSzáma;
var jóVálasz;
var timeoutHandler;
var myStorage = window.localStorage;

var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;       //A következő kérdés száma a teljes listában

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${result.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)

                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            }
        );
}


function kérdésMegjelenítés() {
    let kérdés = hotList[displayedQuestion].question; 
    console.log(kérdés)

    let kérdésszoveg = document.getElementById("kérdés_szöveg")
    kérdésszoveg.innerText = kérdés.questionText;


    let megjelenítettKép = document.getElementById("kép1")
    if (kérdés.image == "") {
        megjelenítettKép.src = "https://cdn.nwmgroups.hu/s/img/i/1603/201603245.jpg?w=800&h=511&t=5"

    }
    else { megjelenítettKép.src = "https://szoft1.comeback.hu/hajo/" + kérdés.image; }


    let válasz1 = document.getElementById("válasz1")
    let válasz2 = document.getElementById("válasz2")
    let válasz3 = document.getElementById("válasz3")
    válasz1.innerHTML = kérdés.answer1
    válasz2.innerHTML = kérdés.answer2
    válasz3.innerHTML = kérdés.answer3

    jóVálasz = kérdés.correctAnswer;

    válasz2.classList.remove("jó", "rossz")
    válasz1.classList.remove("jó", "rossz")
    válasz3.classList.remove("jó", "rossz")


}

function init() {
     


    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function előre() {
    
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    
    kérdésMegjelenítés()
    document.getElementById("válasz1").style.pointerEvents = "auto"
    document.getElementById("válasz2").style.pointerEvents = "auto"
    document.getElementById("válasz3").style.pointerEvents = "auto"

    clearTimeout(timeoutHandler)
    

}
function vissza() {
    
    displayedQuestion--;
    if (displayedQuestion == -1) displayedQuestion = questionsInHotList - 1;
    
    kérdésMegjelenítés()

    document.getElementById("válasz1").style.pointerEvents = "auto"
    document.getElementById("válasz2").style.pointerEvents = "auto"
    document.getElementById("válasz3").style.pointerEvents = "auto"

    clearTimeout(timeoutHandler)    
}
function megjelöltVálasz1() {
    let megjelöltválasz1 = document.getElementById("válasz1")
    document.getElementById("válasz1").style.pointerEvents = "none"
    document.getElementById("válasz2").style.pointerEvents = "none"
    document.getElementById("válasz3").style.pointerEvents = "none"

    if (jóVálasz == 1) {
        megjelöltválasz1.classList.add("jó")
        hotList[displayedQuestion].goodAnswers++;
    }
    else {
        megjelöltválasz1.classList.add("rossz")
        hotList[displayedQuestion].goodAnswers = 0;
    }

    törlés();
    timeoutHandler = setTimeout(előre, 3000);
    myStorage.clear();
    myStorage.setItem(1, hotList)
}
function megjelöltVálasz2() {
    let megjelöltválasz2 = document.getElementById("válasz2")

    document.getElementById("válasz1").style.pointerEvents = "none"
    document.getElementById("válasz2").style.pointerEvents = "none"
    document.getElementById("válasz3").style.pointerEvents = "none"

    if (jóVálasz == 2) {
        megjelöltválasz2.classList.add("jó")
        hotList[displayedQuestion].goodAnswers++;
    }
    else {
        megjelöltválasz2.classList.add("rossz")
        hotList[displayedQuestion].goodAnswers = 0;
    }

    törlés();
    timeoutHandler = setTimeout(előre, 3000);
    myStorage.clear();
    myStorage.setItem(1, hotList)
}
function megjelöltVálasz3() {

    let megjelöltválasz3 = document.getElementById("válasz3")

    document.getElementById("válasz1").style.pointerEvents = "none"
    document.getElementById("válasz2").style.pointerEvents = "none"
    document.getElementById("válasz3").style.pointerEvents = "none"

    if (jóVálasz == 3) {
        megjelöltválasz3.classList.add("jó")
        hotList[displayedQuestion].goodAnswers++;
    }
    else {
        megjelöltválasz3.classList.add("rossz")
        hotList[displayedQuestion].goodAnswers = 0;
    }

    törlés();
    timeoutHandler = setTimeout(előre, 3000);   
    myStorage.clear();
    myStorage.setItem(1, hotList)
}

function törlés() {
    if (hotList[displayedQuestion].goodAnswers == 3) {

        kérdésBetöltés(nextQuestion, displayedQuestion)
        nextQuestion++;

    }
}




