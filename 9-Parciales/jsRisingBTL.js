/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var legajo;
	var sueldo;


	//pido edad
	edad=prompt("Ingrese edad : (18 a 90 años) ");
	edad=parseInt(edad);

	//valido edad
	while(edad<18 || edad>90 || isNaN(edad))
	{
		edad=prompt("Ingrese edad : ");
		edad=parseInt(edad);
	}
	//pido sexo
	sexo=prompt("Ingrese sexo : (M o F)");
	sexo=sexo.toUpperCase();

	//valido sexo
	while(sexo!="F" && sexo!="M")
	{
		sexo=prompt("Ingrese sexo : (M o F)");
		sexo=sexo.toUpperCase();
	}

	//pido estado civil
	estadoCivil=prompt("Ingrese estado civil :(1.Soltero 2.Casado 3.Divorciado 4.Viudo)");
	estadoCivil=parseInt(estadoCivil);
	//valido
	while(estadoCivil<1 || estadoCivil>4 || isNaN(estadoCivil))
	{

		estadoCivil=prompt("Ingrese estado civil :(1.Soltero 2.Casado 3.Divorciado 4.Viudo)");
	}
	//switch de estado civil
	switch(estadoCivil)
	{

		case 1: 
		{
			estadoCivil="Soltero";break;
		}

		case 2: 
		{
			estadoCivil="Casado";break;
		}

		case 3: 
		{
			estadoCivil="Divorciado";break;
		}

		case 4: 
		{
			estadoCivil="Viudo";break;
		}
	}

	//pido sueldo bruto

	sueldo=prompt("Ingrese sueldo bruto :")
	sueldo=parseInt(sueldo);

	while(sueldo<8000)
	{
		sueldo=prompt("El sueldo debe ser mayor a $8000. Ingreselo nuevamente:")
	}

	//pido legajo

	legajo=prompt("Ingrese legajo : ");
	legajo=parseInt(legajo);

	//valido legajo
	while(legajo<1000 || legajo>9999)
	{
		legajo=prompt("El legajo debe tener 4 cifras y no debe comenzar con 0. Ingreselo nuevamente : ");
		legajo=parseInt(legajo);
	}

	//pido nacionalidad

	nacionalidad=prompt("Ingrese A para argentino, E para extranjero o N para nacionalizado");

	//valido nacionalidad

	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad !="N")
	{
		nacionalidad=prompt("Ingrese A para argentino, E para extranjero o N para nacionalizado");
	}

	
	alert("la edad es : "+edad);
	alert("el sexo es : "+sexo);
	alert("estado civil : "+estadoCivil)
	alert("legajo " +legajo);
	alert("Sueldo "+sueldo);
	alert("nacionalidad "+nacionalidad)





 
}
