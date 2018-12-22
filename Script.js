var d = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");
var botoncito = document.getElementById("button");
var lienzo = d.getContext("2d");
var ancho = d.width;
botoncito.addEventListener("click", dibujoPorClick);

dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1,299,299,299);
dibujarLinea("red", 1,1,299,1);
dibujarLinea("red", 299,1,299,299);

function dibujarLinea(color, xInicial, yinicial, xFinal, yFinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yinicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho/lineas;
  var yi, xf;
  for (l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l +1);
    dibujarLinea("red", 0, yi, xf, 300);
  }
}
