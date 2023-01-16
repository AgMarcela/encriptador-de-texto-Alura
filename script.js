// las siguientes vocales tendrán los valores de encriptación
// a - ai
// e - enter
// i - imes
// o - ober
// u - ufat

// Cuando se escriba una palabra, la vocal comenzará a ser reemplazada con la info anterior
// Hay que tener en cuenta el orden en las que empezará a cambiar las vocales
// para que una vez hecho el cambio, sobre esta palabra no se vuelva a realizar el cambio de nuevo,
// sino de la letra que sigue de la palabra original

// Para eso se utilizará el siguiente orden de vocales para la encriptación

// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

// Comenzamos creando la function de encriptar:

function encriptar() {
  var texto = document.querySelector(".text-area").value.toLowerCase();
  cleanImg(encrip(texto));
}

function desencriptar() {
  var texto = document.querySelector(".text-area").value.toLowerCase();
  cleanImg(desencrip(texto));

}

function copiar() {
  console.log("funcioando...");
  var contenido = document.querySelector(".texto-ingreso");
  navigator.clipboard.writeText(contenido.value);
  alert("se copió");
}

function cleanImg(texto) {
  document.querySelector(".imagen-derecha").style.display = "none";
  document.querySelector(".texto-alerta").style.display = "none";
  document.querySelector(".texto-ingreso").innerHTML = texto;
  document.querySelector(".btn-copiar").style.display = "show";
  document.querySelector(".btn-copiar").style.display = "inherit";
}

function encrip(texto) {
  var textoCifrado = texto.replace(/e/gim, "enter");
  textoCifrado = textoCifrado.replace(/o/gim, "ober");
  textoCifrado = textoCifrado.replace(/i/gim, "imes");
  textoCifrado = textoCifrado.replace(/a/gim, "ai");
  textoCifrado = textoCifrado.replace(/u/gim, "ufat");

  return textoCifrado;
}

function desencrip(texto) {
  var textoCifrado = texto.replace(/e/gim, "enter");
  textoCifrado = texto.replace(/enter/gim, "e");
  textoCifrado = textoCifrado.replace(/ober/gim, "o");
  textoCifrado = textoCifrado.replace(/imes/gim, "i");
  textoCifrado = textoCifrado.replace(/ai/gim, "a");
  textoCifrado = textoCifrado.replace(/ufat/gim, "u");

  return textoCifrado;
}

// i es para que afecte mayusculas y minusculas
// g es para toda la linea u oracion
// m es para que afecte a multiples lineas o parrafos

// Al crear las variables, se tiene en cuenta que al cifrar,
// despues de la primera variable, se empezará a encriptar desde el texto ya cifrado.
// recordar que se coloca la vocal entre barras inclinadas, para indicar que debe recorrer
// toda la palabra en busqueda de esa vocal
