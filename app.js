function encriptar() {
  var textoInput = document.getElementById("textoInput").value;
  var textoOutput = document.getElementById("textoOutput").value;

  // Verificar si el texto de entrada no está vacío y si no es igual al texto ya encriptado
  if (textoInput && textoInput !== textoOutput) {
    var textoEncriptado = realizarReemplazo(textoInput, true);
    document.getElementById("textoOutput").value = textoEncriptado;
  }
}

function desencriptar() {
  var textoInput = document.getElementById("textoInput").value;
  var textoOutput = document.getElementById("textoOutput").value;

  // Verificar si el texto de entrada no está vacío y si no es igual al texto ya desencriptado
  if (textoInput && textoInput !== textoOutput) {
    var textoDesencriptado = realizarReemplazo(textoInput, false);
    document.getElementById("textoOutput").value = textoDesencriptado;
  }
}
function copiarAlPortapapeles() {
  var textoOutput = document.getElementById("textoOutput");
  textoOutput.select();
  document.execCommand("copy");
}

function realizarReemplazo(texto, encriptar) {
  var reemplazos = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  var expresionRegular = encriptar ? /[eioua]/g : /enter|imes|ai|ober|ufat/g;

  return texto.replace(expresionRegular, function (match) {
    return encriptar
      ? reemplazos[match]
      : Object.keys(reemplazos).find((key) => reemplazos[key] === match);
  });
}

function borrarTexto() {
  document.getElementById("textoInput").value = "";
  document.getElementById("textoOutput").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  var textoInput = document.getElementById("textoInput");

  // Agregar un listener para el evento input
  textoInput.addEventListener("input", function () {
    // Obtener el valor actual del input
    var texto = textoInput.value;

    // Verificar si el texto contiene mayúsculas o caracteres especiales
    if (/[A-Z]/.test(texto) || /[^a-zA-Z\s]/.test(texto)) {
      alert(
        "No se pueden encriptar textos con mayúsculas o caracteres especiales."
      );
      // Eliminar las mayúsculas y caracteres especiales del texto
      texto = texto.replace(/[A-Z]/g, "").replace(/[^a-zA-Z\s]/g, "");
      // Actualizar el valor del input con el texto modificado
      textoInput.value = texto;
    }
  });
});
