/*Antonella Posteraro DIV D GRUPO 2
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreDelAlumno;
	var edadDelAlumno;

	nombreDelAlumno = document.getElementById("txtIdNombre").value;
	edadDelAlumno = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años.");
}

// txtIdNombre
// txtIdEdad
