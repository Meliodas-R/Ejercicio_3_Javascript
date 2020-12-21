var x = parseFloat(prompt("Introdzuca una distancia (KM): "));
x = x / 1.609;
//Limitamos el resultado a dos decimales.
x = x.toFixed(2);
alert("Distancia equivalente en millas marinas: " + x);
