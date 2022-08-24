//DOM interactucar con HTML recibimos con getElement y mandamos a p con .innerHTML
function calcResta(){
    let num1Res = document.getElementById("num1Res").value;
    let num2Res = document.getElementById("num2Res").value;
    document.getElementById("rtaRes").innerHTML = num1Res - num2Res;
}

function calcMultiplicar(){
    let num1Mul = document.getElementById("num1Mul").value;
    let num2Mul = document.getElementById("num2Mul").value;
    document.getElementById("rtaMul").innerHTML = num1Mul * num2Mul;
}

function calcDivision(){
    let num1Div = document.getElementById("num1Div").value;
    let num2Div = document.getElementById("num2Div").value;
    document.getElementById("rtaDiv").innerHTML = num1Div / num2Div;
}

//Clase metodo 2 .on / Evento onclick
let botonRes = document.getElementById("calcRes")
botonRes.onclick = calcResta

let botonMul = document.getElementById("calcMul")
botonMul.onclick = calcMultiplicar

let botonDiv = document.getElementById("calcDiv")
botonDiv.onclick = calcDivision