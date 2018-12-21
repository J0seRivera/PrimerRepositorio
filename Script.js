var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xInicial, yinicial, xFinal, yFinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yinicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("red", 100, 100 , 200, 250);
dibujarLinea("green", 200, 10 , 250, 200);
