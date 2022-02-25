// No cambies los nombres de las funciones.

const { mayuscula } = require("../../07-JS-VI/homework/homework");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const obje1 = Object.entries(objeto);
  return obje1;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obje = {};
  for(i=0; i< string.length; i++){
    if(obje.hasOwnProperty(string[i])){
      obje[string[i]] += 1;
    }else{
      obje[string[i]] = 1;
    }
  }return obje;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var palabra = s.split("");
  var mayusculas = [];
  var minusculas = [];
  
  for(i=0; i < palabra.length; i++){
    if(palabra[i] === palabra[i].toUpperCase()){
      mayusculas.push(palabra[i]);
    }else if(palabra[i] === palabra[i].toLowerCase()){
      minusculas.push(palabra[i]);
    }
  }return mayusculas.join('') + minusculas.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var esp = str.split(' ');
  var uni = [];
  for(i=0; i< esp.length; i++){
    uni.push(esp[i].split('').reverse().join(''));
  }return uni.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var letra = numero.toString();
  var rever = letra.split('').reverse().join('');
  
  if(letra === rever){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newCadena = "";
  for(i=0; i< cadena.length; i++){
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      continue;
    }else{
      newCadena += cadena[i];
    }
  }return newCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var marca = true
  while(marca){
  marca = false;
  for(i=0; i<arr.length-1; i++){
    if(arr[i].length > arr[i+1].length){
      aux = arr[i];
      arr[i] = arr[i+1]
      arr[i+1] = aux;
      marca = true;
    }
  }
}return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoarr= [];
  for(i=0; i<arreglo1.length; i++){
    for(j=0; j<arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
         nuevoarr.push(arreglo1[i]);
      }
    }
  }return nuevoarr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

