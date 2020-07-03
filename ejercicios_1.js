/*export const validar = isText => typeof(isText);*/

/*1) Programa una función que cuente el 
número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */

/*
const contar = palabra =>{

    if(validar(palabra) === "string")
        return palabra.length;
    else 
        console.log("Debes introducir texto");

} 
console.log(contar("hola mundo"));*/

/*2) Programa una función que te devuelva el 
texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
/*
const cortar = (palabra,cant) =>{

    if(validar(palabra) === "string" && !isNaN(cant) === true)
        return palabra.substr(0,cant);
    else 
        console.log("Debes introducir texto y como sgundo parametro un numero");

} 

console.log(cortar("hola mundo",4));*/

/*Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
/*
 const separar = (palabra, separador) => {
     let palabras = [];

     if(validar(palabra) === "string")
        palabras.push(palabra.split(separador));
    else{
        console.log("Debes introducir texto");
        return;
    }
        
     return palabras;
 }

 console.log(separar("Yorman Josue Galindo Pastran"," "));*/

 /*Programa una función que repita un texto 
 X veces, pe. miFuncion('Hola Mundo', 3) 
 devolverá Hola Mundo Hola Mundo Hola Mundo.*/
/*

 const repetir = function(palabra , num){
    if(validar(palabra) === "string"){

        for(let i = 0 ; i < num ; i++)
            console.log(palabra);
    }

 }

 repetir("Yorman Galindo",4);
*/