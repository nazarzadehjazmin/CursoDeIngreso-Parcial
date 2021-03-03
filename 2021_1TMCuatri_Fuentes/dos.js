/* 
JAZMÍN NAZARZADEH
PUNTO 2
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota */

function mostrar() {
  let nombreAlumno;
  let tipoCursada;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguirIngresando;
  let flagMejorPromedioNoMasculino;
  let mejorPromedioNoMasculino;
  let edadMasJoven;
  let flagMasJoven;
  let nombreEdadMasJoven;
  let contadorLibres;
  let flagCursadaNoRemota;
  let mayorCantidadMaterias;
  let nombreCursaNoRemoto;
  let acumuladorNotaFemenino;
  let contadorNotaFemenino;
  let acumuladorNotaMasculino;
  let contadorNotaMasculino;
  let acumuladorNotaNoBinario;
  let contadorNotaNoBinario;
  let promedioFemenino;
  let promedioMasculino;
  let promedioNoBinario;


  flagMejorPromedioNoMasculino = true;
  flagMasJoven = true;
  flagCursadaNoRemota = true;
  contadorLibres = 0;
  acumuladorNotaFemenino = 0;
  contadorNotaFemenino = 0;
  acumuladorNotaMasculino = 0;
  contadorNotaMasculino = 0;
  acumuladorNotaNoBinario = 0;
  contadorNotaNoBinario = 0;


  do {
    nombreAlumno = prompt("Ingresar el nombre del alumno");
    while (isNaN(nombreAlumno) == false) {
      nombreAlumno = prompt("Reingresar el nombre del alumno");
    }

    tipoCursada = prompt("Ingrese tipo de cursada(libre, presencial, remota)");
    while (isNaN(tipoCursada) == false || tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota") {
      tipoCursada = prompt("Reingrese tipo de cursada(libre, presencial, remota)");
    }

    cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias"));
    while (isNaN(cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 8) {
      cantidadMaterias = parseInt(prompt("Reingrese cantidad de materias"));
    }

    sexo = prompt("Ingrese sexo(f-m-nb)");
    sexo = sexo.toLowerCase();
    while (isNaN(sexo) == false || sexo != "f" && sexo != "m" && sexo != "nb") {
      sexo = prompt("Reingrese sexo(f-m-nb)");
      sexo = sexo.toLowerCase();
    }

    notaPromedio = parseFloat(prompt("Ingrese nota"));
    while (isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10) {
      notaPromedio = parseFloat(prompt("Reingrese nota"));
    }

    edad = parseInt(prompt("Ingrese edad"));
    while (isNaN(edad) || edad < 17) {
      edad = parseInt(prompt("Reingrese edad"));
    }


    // a) El nombre del mejor promedio que no sea masculino
    if (sexo != "m") {
      if (flagMejorPromedioNoMasculino || notaPromedio > mejorPromedioNoMasculino) {
        mejorPromedioNoMasculino = nombreAlumno;
        flagMejorPromedioNoMasculino = true;
      }
    }

    // c) El promedio de nota por sexo
    switch (sexo) {
      case "f":
        acumuladorNotaFemenino += notaPromedio;
        contadorNotaFemenino++;
        break;
      case "m":
        acumuladorNotaMasculino += notaPromedio;
        contadorNotaMasculino++;
        break;
      case "nb":
        acumuladorNotaNoBinario += notaPromedio;
        contadorNotaNoBinario++;
        break;
    }

    // b) El nombre del mas joven de los alumnos entre los que la dan libre
    if (tipoCursada == "libre") {
      contadorLibres++;
      if (flagMasJoven || edad < edadMasJoven) {
        nombreEdadMasJoven = nombreAlumno;
        flagMasJoven = false;
      }
    }

    // f) La edad y nombre del que cursa mas materias que no sean en forma remota
    if (tipoCursada != "remota") {
      if (flagCursadaNoRemota || cantidadMaterias > mayorCantidadMaterias) {
        nombreCursaNoRemoto = nombreAlumno;
        edadCursaNoRemoto = edad;
        flagCursadaNoRemota = false;
      }
    }


    seguirIngresando = confirm("¿Ingresar más alumnos");
  } while (seguirIngresando == true);



  // a) El nombre del mejor promedio que no sea masculino
  if (contadorNotaFemenino < 1 || contadorNotaNoBinario < 1) {
    document.write("<br>Nombre del mejor promedio que no sea masculino: " + mejorPromedioNoMasculino);
  } else {
    document.write("<br>Nombre del mejor promedio que no sea masculino: No hay alumnos que no sean masculinos");
  }

  // b) El nombre del mas joven de los alumnos entre los que la dan libre
  if (contadorLibres > 1) {
    document.write("<br>Nombre del mas joven de los alumnos entre los que la dan libre: " + nombreEdadMasJoven);
  } else {
    document.write("<br>Nombre del mas joven de los alumnos entre los que la dan libre: " + nombreEdadMasJoven);
  }

  // d) El promedio de nota por sexo
  promedioFemenino = acumuladorNotaFemenino / contadorNotaFemenino;
  promedioMasculino = acumuladorNotaMasculino / contadorNotaMasculino;
  promedioNoBinario = acumuladorNotaNoBinario / contadorNotaNoBinario;

  if (contadorNotaFemenino != 0) {
    document.write("<br>Promedio de notas de mujeres: " + promedioFemenino);
  } else {
    document.write("<br>Promedio de notas de mujeres: No hay mujeres");
  }

  if (contadorNotaMasculino != 0) {
    document.write("<br>Promedio de notas de hombres: " + promedioMasculino);
  } else {
    document.write("<br>Promedio de notas de hombres: No hay hombres");
  }

  if (contadorNotaNoBinario != 0) {
    document.write("<br>Promedio de notas de no binarios: " + promedioNoBinario);
  } else {
    document.write("<br>Promedio de notas de no binarios: No hay no binarios");
  }

  // f) La edad y nombre del que cursa mas materias que no sean en forma remota
  document.write("<br>Nombre del que cursa más materias que no sean en forma remota: " + nombreCursaNoRemoto + " y su edad: " + edadCursaNoRemoto);

}

