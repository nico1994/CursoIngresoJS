//pedir el nombre de un animal, peso y la temperatura del habitat en el q vive -40 a +40
// al final informar la cantidad de temperaturas pares,impares,nombre del animal mas pesado
//nombre del animal menos pesado,cantidad de animales cuyo abitat tiene menos de 0 grados
//promedio de peso de todos los animanles,temperatura maxima y minima ingresada





//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var temperaturaPares=0;
	var temperaturaImpares=0;
	var animalMenosPesado;
	var animalMasPesado;
	var nombreMasPesado;
	var nombreMenosPesado;
	var animalMenosDeCero=0;
	var promedioAnimales;
	var acumuladorPeso=0;
	var tempMax;
	var tempMin;
	var respuesta="";
	var contador=0;


	while(respuesta!="no")
	{
	//pido nombre de animal
	nombre=prompt("Ingrese nombre de animal : ");

	//valido que sean letras

	while(!isNaN(nombre))
	{
		nombre=prompt("Ingrese nombre de animal : ");
	}

	//pido peso

	peso=prompt("Ingrese peso de animal : ");
	peso=parseInt(peso);
	//valido peso mayor a 1
	while(peso<1 || isNaN(peso))
	{
		peso=prompt("Ingrese peso de animal : ");
		peso=parseInt(peso);
	}
	
	//pido temperatura
	temperatura=prompt("Ingrese temperatura del hábitat del animal : ");
	temperatura=parseInt(temperatura);
	//valido temperatura 
	while(temperatura<-40 || temperatura>40 || isNaN(temperatura))
	{
		temperatura=prompt("Ingrese temperatura del hábitat del animal : ");
		temperatura=parseInt(temperatura);
	}


	//temperaturas pares e impares
	if (temperatura!=0)
	{
		if(temperatura%2==0 )
	{
		temperaturaPares++;
	}else
	
		temperaturaImpares++;
	}

	//animal mas pesado y menos pesado

	if(contador==0)
	{
		animalMasPesado=peso;
		nombreMasPesado=nombre;

	}else
	{
		if(animalMasPesado<peso)
		{
			animalMasPesado=peso;
			nombreMasPesado=nombre;
		}
	}

	//animal menos pesado

	if(contador==0)
	{
		animalMenosPesado=peso;
		nombreMenosPesado=nombre;

	}else
	{
		if(animalMenosPesado>peso)
		{
			animalMenosPesado=peso;
			nombreMenosPesado=nombre;
		}
	}

	//animal con hábitat de menos 0 grados

	if(temperatura<0)
	{
		animalMenosDeCero++;
	}

	//temperatura maxima y minima

	if(contador==0)
	{
		tempMax=temperatura;
		

	}else
	{
		if(tempMax<temperatura)
		{
			tempMax=temperatura;
		}
	}

	if(contador==0)
	{
		tempMin=temperatura;
		

	}else
	{
		if(tempMin>temperatura)
		{
			tempMin=temperatura;
		}
	}

	acumuladorPeso=acumuladorPeso+peso;
	contador++;

	respuesta=prompt("Escriba no para salir");

 }


	promedioAnimales=acumuladorPeso/contador;


	document.write("<br>"+"Temperaturas pares : "+temperaturaPares);
	document.write("<br>"+"Temperaturas impares : "+temperaturaImpares);
	document.write("<br>"+"Animal mas pesado :"+nombreMasPesado);
	document.write("<br>"+"Animal menos pesado : "+nombreMenosPesado);
	document.write("<br>"+"cantidad de animales cuyo abitat tiene menos de 0 grados "+animalMenosDeCero);
	document.write("<br>"+"promedio de peso de todos los animanles "+promedioAnimales);
	document.write("<br>"+"Temperaturas maxima : "+tempMax);
	document.write("<br>"+"Temperaturas minima: "+tempMin);
	


}

