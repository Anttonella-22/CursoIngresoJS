/* Antonella Posteraro DIV D GRUPO 2
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

/*
txtIdNumeroUno
txtIdNumeroDos*/

/* 
operadores aritmeticos
+ - * / %

operadores relacionales

> < <= >= == !=

operadores logicos
&& ||  !

*/

