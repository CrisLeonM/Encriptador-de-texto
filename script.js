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

//Boton Desencriptar
function desencriptar() {
    var textareaValue2 = document.getElementById("campo1").value;
    
    textareaValue2 = textareaValue2.replace(/ap/gi, "a");
    textareaValue2 = textareaValue2.replace(/enter/gi, "e");
    textareaValue2 = textareaValue2.replace(/imes/gi, "i");
    textareaValue2 = textareaValue2.replace(/ober/gi, "o");
    textareaValue2 = textareaValue2.replace(/ufat/gi, "u");
    var newTextareaValue2 = textareaValue2;
    document.getElementById("campo1").value = "";
    document.getElementById("resultado").value = newTextareaValue2;
  
    // Seleccionar el textarea
    var textarea = document.getElementById("campo1");
  
    // Agregar un evento input al textarea
    textarea.addEventListener("input", function() {
    // Convertir todas las letras a minúsculas
    textarea.value = textarea.value.toLowerCase();
  
    // Quitar acentos
    textarea.value = textarea.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  });
  
}

//Boton copiar
function copiar() {
    var textarea = document.getElementById("resultado");
    textarea.select();
    document.execCommand("copy");
    // Seleccionar el textarea de origen
    var textareaOrigen = document.getElementById("resultado");
    // Seleccionar el textarea de destino
    var textareaDestino = document.getElementById("campo1");
    // Asignar el valor del textarea de origen al textarea de destino
    textareaDestino.value = textareaOrigen.value;
    //limpiar campo
    document.getElementById("resultado").value = "";
}