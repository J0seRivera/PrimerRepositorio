var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
while (l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l +1);

  dibujarLinea("red", 300 , yi, xf, 0);

  l= l+1;
}
dibujarLinea("red", 1,1,1,299);
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
