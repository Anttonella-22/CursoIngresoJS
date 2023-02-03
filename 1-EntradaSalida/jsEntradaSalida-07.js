/*Antonella Posteraro DIV D GRUPO 2
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
		var unNumero;
		var otroNumero;
		var suma;

		unNumero = document.getElementById("txtIdNumeroUno").value;
		otroNumero = document.getElementById("txtIdNumeroDos").value;

		unNumero = parseInt(unNumero);
		otroNumero = parseInt(otroNumero);

		suma = unNumero + otroNumero;
		
		alert("La suma es: " + suma);
}

function restar()
{ 
	var unNumero;
	var otroNumero;
	var resta;

	unNumero = document.getElementById("txtIdNumeroUno").value;
	otroNumero = document.getElementById("txtIdNumeroDos").value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	resta = unNumero - otroNumero; 
    
	alert("La resta es: " + resta);

}

function multiplicar()
{ 
	var unNumero;
	var otroNumero;
	var multiplicación;
	
	unNumero = document.getElementById("txtIdNumeroUno").value;
	otroNumero = document.getElementById("txtIdNumeroDos").value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	multiplicación = unNumero * otroNumero;

	alert("La multiplicación es: " + multiplicación);

}

function dividir()
{
	var unNumero;
	var otroNumero;
	var división;

	unNumero = document.getElementById("txtIdNumeroUno").value;
	otroNumero = document.getElementById("txtIdNumeroDos").value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	división = unNumero / otroNumero;

	alert("La división es: " + división);

}

/* txtIdNumeroUno
   txtIdNumeroDos
*/