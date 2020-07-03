/*Programa una función que obtenga 
un numero aleatorio entre 501 y 600.*/

const numRandom = () => console.log((Math.random() * (601 - 501) + 501).toFixed(0));

numRandom();

/* Programa una función que reciba un número y 
evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true.*/

const capicua = num => {
    n = num.toString();
    n = n.split("").reverse().join("");

    if(n === num.toString()) return true;
    else return false;

}
console.log(capicua(2002));

/*Programa una función que calcule el factorial 
de un número (El factorial de un entero positivo n, 
le define como el producto de todos los números enteros 
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (num) => {

    let fact=num;
    for(let i = num - 1 ; i >= 1 ; i--){
        fact *= i;
    }

    return fact;

}

console.log(factorial(10));