/*JAZMÍN NAZARZADEH
EJERCICIO 3
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final 
tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar() {
	let nombrePasajero;
	let estadoCivil;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let precioXPasajero;
	let seguirIngresando;
	let contadorViudoMasSesenta;
	let contadorSolteras;
	let edadSolteraMasJoven;
	let nombreSolteraMasJoven;
	let contadorPasajeros;
	let viajeTotalSinDescuento;
	let contadorPasajerosSesenta;
	let porcentajePasajerosSesenta;
	let descuento;
	let viajeTotalConDescuento;

	precioXPasajero = 600;
	contadorViudoMasSesenta = 0;
	contadorSolteras = 0;
	contadorPasajeros = 0;
	contadorPasajerosSesenta = 0;


	do {
		nombrePasajero = prompt("Ingrese nombre del pasajero");
		while (isNaN(nombrePasajero) == false) {
			nombrePasajero = prompt("Error. Reingrese nombre del pasajero");
		}

		estadoCivil = prompt("Ingrese estado civil del pasajero(soltero-casado-viudo)");
		estadoCivil = estadoCivil.toLowerCase();
		while (isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Error. Reingrese estado civil del pasajero");
			estadoCivil = estadoCivil.toLowerCase();
		}

		edad = parseInt(prompt("Ingrese edad del pasajero"));
		while (isNaN(edad) || edad < 18) {
			edad = parseInt(prompt("Error. Reingrese edad del pasajero"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal"));
		while (isNaN(temperaturaCorporal) || temperaturaCorporal > 40 || temperaturaCorporal < 36) {
			temperaturaCorporal = parseInt(prompt("Error. Reingrese temperatura corporal"));
		}

		sexo = prompt("Ingrese sexo(f-m-nb)");
		sexo = sexo.toLowerCase();
		while (isNaN(sexo) == false || sexo != "f" && sexo != "m" && sexo != "nb") {
			sexo = prompt("Error. Reingrese sexo(f-m-nb)");
			sexo = sexo.toLowerCase();
		}

		// a) La cantidad de personas con estado "viudo" de mas de 60 años.
		// b) el nombre y edad de la mujer soltera mas joven.
		switch (estadoCivil) {
			case "soltero":
				if (sexo == "f") {
					if (contadorSolteras < 1 || edad < edadSolteraMasJoven) {
						edadSolteraMasJoven = edad;
						nombreSolteraMasJoven = nombrePasajero;
					}
					contadorSolteras++;
				}
				break;
			case "viudo":
				if (edad > 60) {
					contadorViudoMasSesenta++;
				}
				break;
		}


		// d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , 
		// el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
		if (edad > 60) {
			contadorPasajerosSesenta++;
		}


		// c) cuanto sale el viaje total sin descuento.
		contadorPasajeros++;

		seguirIngresando = confirm("¿Seguir ingresando pasajeros?");
	} while (seguirIngresando == true);

	// a) La cantidad de personas con estado "viudo" de mas de 60 años.
	if (contadorViudoMasSesenta != 0) {
		document.write("<br>cantidad de personas con estado viudo de mas de 60 años: " + contadorViudoMasSesenta);
	} else {
		document.write("<br>cantidad de personas con estado viudo de mas de 60 años: No hay");
	}

	// b) el nombre y edad de la mujer soltera mas joven.
	if (contadorSolteras != 0) {
		document.write("<br>nombre de la mujer soltera mas joven: " + nombreSolteraMasJoven + " y su edad: " + edadSolteraMasJoven);
	} else {
		document.write("<br>nombre de la mujer soltera mas joven y su edad: No hay");
	}

	// c) cuanto sale el viaje total sin descuento.
	viajeTotalSinDescuento = precioXPasajero * contadorPasajeros;

	document.write("<br>el viaje total sin descuento es de: " + viajeTotalSinDescuento);

	// d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , 
	// el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	//total de pasajeros con 60 * 100 / totalPasajeros
	porcentajePasajerosSesenta = contadorPasajerosSesenta * 100 / contadorPasajeros;
	descuento = viajeTotalSinDescuento * 0.25;
	viajeTotalConDescuento = viajeTotalSinDescuento - descuento;

	if (porcentajePasajerosSesenta > 51) {
		document.write("<br>Ud. tiene un descuento del 25%, su precio final es: " + viajeTotalConDescuento);
	}

}



