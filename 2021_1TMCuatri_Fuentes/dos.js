/* Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
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

  flagMejorPromedioNoMasculino = true;


  do {
    nombreAlumno = prompt("Ingresar el nombre del alumno");
    while (isNaN(nombreAlumno)) {
      nombreAlumno = prompt("Ingresar el nombre del alumno");
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
        mejorPromedioNoMasculino = nombre;
        flagMejorPromedioNoMasculino = true;
      }
    }


    // d) El promedio de nota por sexo

    // b) El nombre del mas joven de los alumnos entre los que la dan libre
    // f) La edad y nombre del que cursa mas materias que no sean en forma remota */
    switch () {

    }



    seguirIngresando = confirm("¿Ingresar más alumnos");
  } while (seguirIngresando == true);



  // a) El nombre del mejor promedio que no sea masculino
  if (//contadorFemenino<1 || contadorNobinario<1){

  }


document.write("<br>nombre del mejor promedio que no sea masculino:");
  // b) El nombre del mas joven de los alumnos entre los que la dan libre
  // d) El promedio de nota por sexo
  // f) La edad y nombre del que cursa mas materias que no sean en forma remota */




}

