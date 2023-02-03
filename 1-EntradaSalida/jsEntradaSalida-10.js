/*Antonella Posteraro DIV D GRUPO 2
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado; 

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	resultado = importe * 0.75;
	
	document.getElementById("txtIdResultado").value = resultado;
}

/*
txtIdImporte
txtIdResultado
*/
 

// EJERCICIO INTEGRADOR 2
/* Antonella Posteraro DIV D GRUPO 2
se ingresará por id el valor de una compra de productos para el hogar. Se deberá agregar el iva (21%) y  
luego se deberá restar el 5% en concepto de 
compra mayorista. El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, 
el valor del descuento y el total a pagar.

 */

function mostrarAumento()
{
	var importeCompra;
	var importeConIva;
	var totalAPagar;
	var iva;
	var descuento;
	

	importeCompra = document.getElementById("txtIdImporte").value;
	importeCompra = parseInt(importeCompra);

	iva = importeCompra * 0.21;

	importeConIva = importeCompra + iva;

	descuento = importeConIva * 0.05;

	totalAPagar = importeConIva - descuento;

	alert("Importe bruto: " + importeCompra + " IVA: " + iva + " Importe + IVA: " + importeConIva 
	+ " Descuento: " + descuento + " Importe a pagar: " + totalAPagar);

}

// txtIdImporte
