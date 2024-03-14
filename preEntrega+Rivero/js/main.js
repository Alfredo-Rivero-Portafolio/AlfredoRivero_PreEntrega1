function nombreAlumnos(alumno) {
  switch (alumno) {
    case 1:
      return "Alfredo";
      break;
    case 2:
      return "Dylan";
      break;
    case 3:
      return "Virgi";
      break;
    default:
      return "No esta registrado";
  }
}
function promedioNotas(n1, n2, n3, n4, n5) {
  let suma = n1 + n2 + n3 + n4 + n5;
  let promedio = suma / 5;
  if (promedio <= 5) {
    console.log("Esta reprobado.");
  } else {
    console.log("Esta aprobado.");
  }
  return promedio;
}

let alumno = 0;
let intentos = 0;
while ((alumno < 1 || alumno > 3) && intentos < 3) {
  alumno = +prompt("Ingresa numero de alumno");
  if (alumno < 1 || alumno > 3) {
    intentos++;
  }
  if (intentos >= 3) {
    alert("Has superado el numero de intentos");
  }
}

if (alumno >= 1 && alumno <= 3) {
  let n1 = +prompt("Ingresa primera nota");
  let n2 = +prompt("Ingresa segunda nota");
  let n3 = +prompt("Ingresa tercera nota");
  let n4 = +prompt("Ingresa cuarta nota");
  let n5 = +prompt("Ingresa quinta nota");

  console.log("El nombre del alumno es: " + nombreAlumnos(alumno));
  console.log("El promedio de notas es: ", promedioNotas(n1, n2, n3, n4, n5));
}
