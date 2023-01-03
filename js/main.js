/*let oracion = "esta es una oracion de prueba";
let oracionArray = oracion.split("")
let index;
let oracionEncriptadaArray;


for(let i = 0; i < oracionArray.length; i++ ){
    if( oracionArray[i] == 'a' ){
        oracionArray[i] = "ai"
    } else if( oracionArray[i] == 'e'){
        oracionArray[i] = "enter"
    } else if( oracionArray[i] == 'i'){
        oracionArray[i] = "imes"
    } else if( oracionArray[i] == 'o'){
        oracionArray[i] = "ober"
    } else if( oracionArray[i] == 'u'){
        oracionArray[i] = "ufat"
    }
}
console.log(oracionArray.join(''))

//Desencriptar


let oracionEncriptada = "enterstai enters ufatnai oberraicimesobern denter prufatenterbai";

console.log(oracionEncriptada)

//Caso de 'a'
while(oracionEncriptada.indexOf("ai") != -1){
    index = oracionEncriptada.indexOf("ai")
    oracionEncriptadaArray = oracionEncriptada.split('')
    oracionEncriptadaArray.splice(index, 2)
    oracionEncriptadaArray.splice(index, 0,"a")
    oracionEncriptada = oracionEncriptadaArray.join('')
}

//Caso de 'e'
while(oracionEncriptada.indexOf("enter") != -1){
    index = oracionEncriptada.indexOf("enter")
    oracionEncriptadaArray = oracionEncriptada.split('')
    oracionEncriptadaArray.splice(index, 5)
    oracionEncriptadaArray.splice(index, 0,"e")
    oracionEncriptada = oracionEncriptadaArray.join('')
}
//Caso de 'i'
while(oracionEncriptada.indexOf("imes") != -1){
    index = oracionEncriptada.indexOf("imes")
    oracionEncriptadaArray = oracionEncriptada.split('')
    oracionEncriptadaArray.splice(index, 4)
    oracionEncriptadaArray.splice(index, 0,"i")
    oracionEncriptada = oracionEncriptadaArray.join('')
}

console.log(oracionEncriptada)
*/
function transformar(){
    let cajaTexto = document.getElementById("cajaTexto").value;
    let rectangulo = document.getElementById("rectangulo");
    let oracionArray = cajaTexto.split("")

    for(let i = 0; i < oracionArray.length; i++ ){
        if( oracionArray[i] == 'a' ){
            oracionArray[i] = "ai"
        } else if( oracionArray[i] == 'e'){
            oracionArray[i] = "enter"
        } else if( oracionArray[i] == 'i'){
            oracionArray[i] = "imes"
        } else if( oracionArray[i] == 'o'){
            oracionArray[i] = "ober"
        } else if( oracionArray[i] == 'u'){
            oracionArray[i] = "ufat"
        }
    }

    let oracionLista = oracionArray.join('')
    rectangulo.innerHTML = oracionLista;

    document.getElementById("cajaMensajes").style.display = "none";
    document.getElementById("munieco").style.display = "none";

    let espacio = document.getElementById("espacio")
    let buttonCopiar = document.createElement('BUTTON');
    buttonCopiar.onclick = copiarClipboard;
    buttonCopiar.className = "botonCopiar";
    let divCopiar = document.createElement('DIV');
    divCopiar.className = "botonCopiar_texto";
    let textCopiar = document.createTextNode("Copiar");
    divCopiar.appendChild(textCopiar);
    buttonCopiar.appendChild(divCopiar);
    espacio.appendChild(buttonCopiar);
}

function desTransformar(){
    let oracionEncriptada = document.getElementById("cajaTexto").value;
    let rectangulo = document.getElementById("rectangulo");
    let oracionEncriptadaArray;
    let index;
    //Caso de 'a'
    while(oracionEncriptada.indexOf("ai") != -1){
        index = oracionEncriptada.indexOf("ai")
        oracionEncriptadaArray = oracionEncriptada.split('')
        oracionEncriptadaArray.splice(index, 2)
        oracionEncriptadaArray.splice(index, 0,"a")
        oracionEncriptada = oracionEncriptadaArray.join('')
    }

    //Caso de 'e'
    while(oracionEncriptada.indexOf("enter") != -1){
        index = oracionEncriptada.indexOf("enter")
        oracionEncriptadaArray = oracionEncriptada.split('')
        oracionEncriptadaArray.splice(index, 5)
        oracionEncriptadaArray.splice(index, 0,"e")
        oracionEncriptada = oracionEncriptadaArray.join('')
    }
    //Caso de 'i'
    while(oracionEncriptada.indexOf("imes") != -1){
        index = oracionEncriptada.indexOf("imes")
        oracionEncriptadaArray = oracionEncriptada.split('')
        oracionEncriptadaArray.splice(index, 4)
        oracionEncriptadaArray.splice(index, 0,"i")
        oracionEncriptada = oracionEncriptadaArray.join('')
    }
    //Caso de 'o'
    while(oracionEncriptada.indexOf("ober") != -1){
        index = oracionEncriptada.indexOf("ober")
        oracionEncriptadaArray = oracionEncriptada.split('')
        oracionEncriptadaArray.splice(index, 4)
        oracionEncriptadaArray.splice(index, 0,"o")
        oracionEncriptada = oracionEncriptadaArray.join('')
    }
    //Caso de 'u'
    while(oracionEncriptada.indexOf("ufat") != -1){
        index = oracionEncriptada.indexOf("ufat")
        oracionEncriptadaArray = oracionEncriptada.split('')
        oracionEncriptadaArray.splice(index, 4)
        oracionEncriptadaArray.splice(index, 0,"u")
        oracionEncriptada = oracionEncriptadaArray.join('')
    }
    rectangulo.innerHTML = oracionEncriptada;
    document.getElementById("cajaMensajes").style.display = "none";
    document.getElementById("munieco").style.display = "none";

    let espacio = document.getElementById("espacio")
    let buttonCopiar = document.createElement('BUTTON');
    buttonCopiar.onclick = copiarClipboard;
    buttonCopiar.className = "botonCopiar";
    let divCopiar = document.createElement('DIV');
    divCopiar.className = "botonCopiar_texto";
    let textCopiar = document.createTextNode("Copiar");
    divCopiar.appendChild(textCopiar);
    buttonCopiar.appendChild(divCopiar);
    espacio.appendChild(buttonCopiar);
}

function copiarClipboard(){
    let rectangulo = document.getElementById("rectangulo");
    navigator.clipboard.writeText(rectangulo.innerHTML);

    alert("Se copio el texto a su clipboard: " + rectangulo.innerHTML);
}