/*1)Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:
   a)Ordenar os elementos do array na ordem invertida*/
 function listaDeEstados () {
     let estados = [ "Pernambuco" ,"Paraíba", "Alagoas"]
     estados.reverse()
     console.log (estados)
    } 
listaDeEstados()
//2)Criar uma função que recebe duas strings:
 function strings01 (palavra1 , palavra2) {
     let stg1 = palavra1
     let stg2 = palavra2
    console.log(stg1.toUpperCase());
    console.log(stg1.concat(stg2));
 }
 strings01 ("Olá " , "Mundo")
 //3) Criar uma função que retorne 17 vezes a palavra Repetição.

 var retorne = function(){

    for(let repetir = 0; repetir <= 17; repetir++){
        console.log("Repetição")
    }

}

console.log(retorne()); 
 
 
 
             


 