/*Programa una función que invierta las 
palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
/*
const reverse = function(texto){
    
    let textReverse="";

    for(let i = texto.length-1 ; i >= 0 ; i--){
        textReverse += texto.charAt(i);
    }
    return textReverse;
}

console.log(reverse("Hola mundo"));*/

/*Programa una función para contar el número de veces 
que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2*/
/*
const contPalabras = function(texto,palabra){
  let cont = 0;
  let i = 0;

    while(i !== -1){
        
        if(i !== -1){
            i = texto.indexOf(palabra,i);
            if(i === -1) return cont;
            i++;
            cont++;
        } 
    }
}

console.log(contPalabras("hola mundo mundo hola mundo mundo", "mundo"));*/

/*
Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.
*/
/*
const palindromo = function(palabra){

    let palin = "";
    palin = reverse(palabra.toLowerCase());
    console.log(palin);
    if( palin === palabra.toLowerCase())  return true; 
    else  return false;
}

console.log(palindromo("Salas"));*/

/*Programa una función que elimine cierto patrón de
 caracteres de un texto dado, 
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
 devolverá  "1, 2, 3, 4 y 5. */
/*
 const reemplazar = function(texto,patron){

    let i = 0;
    let text = "";
 
    while(i !== -1){
        
        if(i !== -1){
            text = texto.replace(patron,"");
            texto = text;
            i = texto.indexOf(patron,i);
            i++;
            if(i === 0) return text;
        }
    }
 }

 console.log(reemplazar("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz"));*/