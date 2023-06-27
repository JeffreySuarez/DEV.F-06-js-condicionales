let calificacion = parseInt(prompt("Ingresa un número del 1 al 10"));

if (calificacion > 10) {
  alert("Error");
} else if (calificacion < 6) {
  alert("Reprobado");
} else if (calificacion >= 6 && calificacion <= 8) {
  alert("Regular");
} else if (calificacion === 9) {
  alert("Bien");
} else if (calificacion === 10) {
  alert("Excelente");
}
