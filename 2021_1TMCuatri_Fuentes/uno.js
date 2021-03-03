/*
JAZMÍN NAZARZADEH
PUNTO 1
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/

function mostrar() {
	let nombreProducto;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let tipoInflamable;
	let marca;
	let flagTipoMasCaro;
	let tipoMasCaro;
	let marcaMasCara;
	let precioTipoMasCaro;
	let acumuladorAlcohol;
	let contadorAlcohol;
	let acumuladorIac;
	let contadorIac;
	let acumuladorQuat;
	let contadorQuat;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let contadorIacDoscientos;
	let acumuladorIgnifugo;
	let acumuladorCombustible;
	let acumuladorExplosivo;
	let inflamableMayorCantidad;

	flagTipoMasCaro = true;
	acumuladorAlcohol = 0;
	contadorAlcohol = 0;
	acumuladorIac = 0;
	contadorIac = 0;
	acumuladorQuat = 0;
	contadorQuat = 0;
	contadorIacDoscientos = 0;
	contadorIgnifugo = 0;
	acumuladorIgnifugo = 0;
	acumuladorCombustible = 0;
	acumuladorExplosivo = 0;

	for (let i = 0; i < 5; i++) {
		nombreProducto = prompt("Ingrese nombre del producto");
		while (isNaN(nombreProducto) == false) {
			nombreProducto = prompt("Error. Reingrese nombre del producto");
		}

		tipoProducto = prompt("Ingrese tipo de producto(alcohol-iac-quat)");
		tipoProducto = tipoProducto.toLowerCase();
		while (isNaN(tipoProducto) == false || tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat") {
			tipoProducto = prompt("Error. Reingrese tipo de producto(alcohol-iac-quat)");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precio = parseFloat(prompt("Ingrese precio del producto(entre 100 y 300)"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseFloat(prompt("Error. Reingrese precio del producto(entre 100 y 300)"));
		}

		cantidadUnidades = parseInt(prompt("Ingrese cantidad de unidades(hasta 1000)"))
		while (isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000) {
			cantidadUnidades = parseInt(prompt("Error. Reingrese cantidad de unidades(hasta 1000)"))
		}

		tipoInflamable = prompt("Ingrese tipo de inflamable(ignifugo-combustible-explosivo)");
		tipoInflamable = tipoInflamable.toLowerCase();
		while (isNaN(tipoInflamable) == false || tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo") {
			tipoInflamable = prompt("Error. Reingrese tipo de inflamable(ignifugo-combustible-explosivo)");
			tipoInflamable = tipoInflamable.toLowerCase();
		}

		marca = prompt("Ingrese marca");

		// a) El promedio de cantidad por tipo de producto
		switch (tipoProducto) {
			case "alcohol":
				acumuladorAlcohol += cantidadUnidades;
				contadorAlcohol++;
				break;
			case "iac":
				// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
				if (precio > 199) {
					contadorIacDoscientos++;
				}
				acumuladorIac += cantidadUnidades;
				contadorIac++;
				break;
			case "quat":
				acumuladorQuat += cantidadUnidades;
				contadorQuat++;
				break;
		}

		// b) El tipo de inflamable con más cantidad de unidades en total de la compra
		switch (tipoInflamable) {
			case "ignifugo":
				acumuladorIgnifugo += cantidadUnidades;
				break;
			case "combustible":
				acumuladorCombustible += cantidadUnidades;
				break;
			case "explosivo":
				acumuladorExplosivo += cantidadUnidades;
				break;
		}

		// d) la marca y tipo del más caro de los productos
		if (flagTipoMasCaro || precio > precioTipoMasCaro) {
			tipoMasCaro = tipoProducto;
			marcaMasCara = marca;
			flagTipoMasCaro = false;
		}

	}

	// a) El promedio de cantidad por tipo de producto
	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	promedioIac = acumuladorIac / contadorIac;
	promedioQuat = acumuladorQuat / contadorQuat;

	if (contadorAlcohol != 0) {
		document.write("<br><b>Promedio de cantidad del alcohol: </b>" + promedioAlcohol);

	} else {
		document.write("<br><b>Promedio de cantidad del alcohol:</b> No hay alcohol");
	}

	if (contadorIac != 0) {
		document.write("<br><b>Promedio de cantidad del Iac: </b>" + promedioIac);
	} else {
		document.write("<br><b>Promedio de cantidad del Iac: </b> No hay iac");
	}

	if (contadorQuat != 0) {
		document.write("<br><b>Promedio de cantidad del Quat:</b> " + promedioQuat);
	} else {
		document.write("<br><b>Promedio de cantidad del Quat:</b> No hay quat");

	}

	// b) El tipo de inflamable con más cantidad de unidades en total de la compra

	if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo) {
		inflamableMayorCantidad = "ignifugo";
	} else {
		if (acumuladorCombustible > acumuladorExplosivo) {
			inflamableMayorCantidad = "combustible";
		} else {
			inflamableMayorCantidad = "explosivo";
		}
	}


	document.write("<br><b>Tipo de inflamable con más cantidad de unidades en total de la compra:</b> " + inflamableMayorCantidad);


	// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
	if (contadorIacDoscientos != 0) {
		document.write("<br<b>>Unidades de IAC con precios menos a 200 (inclusive) que se compraron en total:</b> " + contadorIacDoscientos);
	} else {
		document.write("<br><b>Unidades de IAC con precios menos a 200 (inclusive) que se compraron en total:</b> No hay");

	}
	// d) la marca y tipo del más caro de los productos
	document.write("<br><b>Tipo del más caro de los productos:</b> " + tipoMasCaro + " <b>y la marca</b> " + marcaMasCara);
}