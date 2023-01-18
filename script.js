//Borra el texto y imagen de "ningun mensaje encontrado"//
function myFunction() {
    document.getElementById("div1").style.display = "none";
} //Borra el texto y imagen de "ningun mensaje encontrado"//

async function limpiar() {
    //limpiar campo
    document.getElementById("campo1").value = "";  
}

function encriptar() {
    // Obtiene el valor actual del textarea
    var textareaValue = document.getElementById("campo1").value;
    // Reemplaza las vocales en el valor del textarea
    textareaValue = textareaValue.replace(/a/gi, "ap");
    textareaValue = textareaValue.replace(/e/gi, "enter");
    textareaValue = textareaValue.replace(/i/gi, "imes");
    textareaValue = textareaValue.replace(/o/gi, "ober");
    textareaValue = textareaValue.replace(/u/gi, "ufat");
    // guarda el valor cambiado en una variable
    var newTextareaValue = textareaValue;
    
    // Establece el nuevo valor del textarea
    document.getElementById("campo1").value = textareaValue;
  
    // Establece el nuevo valor en el segundo textarea
    document.getElementById("resultado").value = newTextareaValue;
}