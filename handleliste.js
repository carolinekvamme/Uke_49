var handleliste = document.getElementById("handleliste");
var inpVare = document.getElementById("inpVare");
var btnAdd = document.getElementById("btnAdd");
var btnNy = document.getElementById("btnNy");
var varer = [];

function visVarer(){
    handleliste.innerHTML = "";
    for (var vare of varer){
    handleliste.innerHTML += `
        <p>
            ${vare}
        <p>
        `;
    }
}

btnAdd.onclick = function() {
    varer.push(inpVare.value);
    visVarer();
    inpVare.value = "";   
}

btnNy.onclick = function(){
    varer.length = 0; 
    visVarer();
}