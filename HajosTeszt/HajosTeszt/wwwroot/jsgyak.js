window.onload = () => {

    let hova = document.getElementById("ide");
    for (var i = 1; i <= 10; i++) {
        let elem = document.createElement("div");
        elem.innerText = i;
        hova.appendChild(elem);
        elem.classList.add("elem")
        elem.style.background = `rgb(${255/i*2},0,0)`;
    }

    var faktorialis = function (n) {
        let eredmeny = 1
        for (let i = 2; i <= n; i++) {
            eredmeny = eredmeny * i;
        }
        return eredmeny;
    } 

    let pascaldoboz = document.getElementById("Pascaltarto");
    for (var s = 0; s < 15; s++)
    {
        let soros = document.createElement("div");
        pascaldoboz.appendChild(soros);
        soros.classList.add("sor")
        for (var o = 0; o <= s; o++)
        {
            let pelem = document.createElement("div");
            pelem.innerText = faktorialis(s)/(faktorialis(o)*faktorialis(s-o));
            soros.appendChild(pelem);
            pelem.classList.add("elem1")
        }
    }
}