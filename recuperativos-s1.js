
//Ejercicio 11 - Nivel = Fácil - (20pts)
//creo un  prompt para ingresar las notas
//cree un "Do" como condición "no continuar hasta tener un dato"
//por último cree "While" "mientras no se cumplan las reglas, el Do no dejará que continue"

//ingreso de las notas
do{
var note1 = prompt("Ingrese calificacion 1");
}
while (note1<= 0 || note1>7);
do{
var note2 = prompt("Ingrese calificacion 2");
}
while (note2<= 0 || note2>7);
do{
var note3 = prompt("Ingrese calificacion 3");
}
while (note3<= 0 || note3>7);
do{
var note4 = prompt("Ingrese calificacion 4");
}
while (note4<= 0 || note4>7);
do{
var note5 = prompt("Ingrese calificacion 5");
}
while (note5<= 0 || note5>7);
do{
var note6 = prompt("Ingrese calificacion 6");
}
while (note6<= 0 || note6>7);
do{
var note7 = prompt("Ingrese calificacion 7");
}
while (note7<= 0 || note7>7);
do{
var note8 = prompt("Ingrese calificacion 8");
}
while (note8<= 0 || note8>7);
do{
var note9 = prompt("Ingrese calificacion 9");
}
while (note9<= 0 || note9>7);
do{
var note10 = prompt("Ingrese calificacion 10");
}
while (note10<= 0 || note10>7);

//traslado de string a número
var note1 = parseInt(note1);
var note2 = parseInt(note2);
var note3 = parseInt(note3);
var note4 = parseInt(note4);
var note5 = parseInt(note5);
var note6 = parseInt(note6);
var note7 = parseInt(note7);
var note8 = parseInt(note8);
var note9 = parseInt(note9);
var note10 = parseInt(note10);

//variable para sacar promedio
var media = (note1+note2+note3+note4+note5+note6+note7+note8+note9+note10)/10;

//veredicto final
if (media>=4){ 
document.write("aprobado"); 
} 
else{
document.write("reprobado"); 	
}
------------------------------------------------------------------------
//Ejercicio 14 - Nivel Facil - (20pts)

//arreglo de numeros
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

//para buscar numero par
var par = number.filter(function(numPar){
	return numPar % 2 === 0;
});
/*El método filter() crea un nuevo array con todos los elementos
que cumplan la condición implementada por la función dada.*/
/*Si el residuo es igual a 0 significa que es un numero par*/

document.write(par);
-------------------------------------------------------------------------
//Ejercicio 7 - Nivel Medio (30pts)

//arreglo de numeros 
var arr =[1,2,3,4]

//función creada con sus parametros respectivos
function verificar (array,num) {
	// creado un "IF" para q trabaje con la posicion de l numero recién agregado o un numero q no estuviera antes y lo pushee dentro del nuevo arreglo
	if (array.indexOf(num)== -1)  {
		array.push(num)
	} else {
		return array
	}
}
------------------------------------------------------------------------
//Ejercicio 8 - Nivel Medio - (30pts)

//arreglo de numeros
var array = [1,5,8,19];

//función creada con 1 parametro para que trabaje sobre el arreglo creado
function searchIndex (array){
	var number = 8; // variable con numero solicitado
	var index = array.indexOf(number); // método para q nos regrese el indice
	return index; //nos retorna el indice del numero
};
document.write(searchIndex(array)); //muestra en el página

//otra opión

var arr = [1,5,8,19] // variable a usar

function position (arreglo,numero){ //funcion creada para obtener la posicion
	return arreglo.indexOf(numero); //retornar el indice del arreglo trabajado
}
document.write(position(arr,19)); //ejemplo
---------------------------------------------------------------------
//Ejercicio 10 - Nivel Medio - (30pts)

//arreglo de invitados
var array = ["allison", "belen", "nadia", "marcia", "ale", "fabian"];

// el conteo inicia en 0 y da como resultado 2
array.indexOf("nadia"); 
 //El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente.

// variable creada para manejar el listado
var listArray = ["allison", "belen", "nadia", "marcia", "ale", "fabian"];

//función creada con 2 parámetros
function list (array, string){
	//prompt de solicitud de nombre pra conocer su indice.
	var string = prompt("ingrese el nombre aquí")
	var position = array.indexOf(string); // nos retorna el indice del nombre que buscamos
	return position + 1; // + 1 para cambiarle la numeracion, es decir, que inicie en 1 y no 0 como anteriormente se comentó
	};
//dos maneras de ver el resultado por consola o en el html
//console.log(list(array));
document.write(list(listArray,"allison"));
----------------------------------------------------------------------