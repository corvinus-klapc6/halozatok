
var faktorialis = function (n) {
    let eredmeny = 1
    for (let i = 2; i <= n; i++) {
        eredmeny = eredmeny * i;
    }
    return eredmeny;
} 

function szamitas() {
    let n = document.getElementById("nTb").value;
    let n2 = parseInt(n);
    let er = faktorialis(n2);
        


    document.getElementById("eredmenyDiv").innerText = er;
}