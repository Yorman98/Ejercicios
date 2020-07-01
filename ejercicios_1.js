/*1) Programa una función que cuente el 
número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */


const contar = palabra => palabra.length;

console.log(contar("hola mundo"));

/*2) Programa una función que te devuelva el 
texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

const cortar = (palabra,cant) => palabra.substr(0,cant);

console.log(cortar("hola mundo",4));

/*Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

 const separar = (palabra, separador) => {
     let palabras = [];

     palabras.push(palabra.split(separador));

     return palabras;
 }

 console.log(separar("hola-que-tal","-"));

 /*Programa una función que repita un texto 
 X veces, pe. miFuncion('Hola Mundo', 3) 
 devolverá Hola Mundo Hola Mundo Hola Mundo.*/


 const repetir = function(palabra , num){

    for(let i = 0 ; i < num ; i++){
        console.log(palabra);
    }

 }

 repetir("Yorman Galindo",4);