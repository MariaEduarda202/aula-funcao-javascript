 function percent( numero , porcetagem){
     let retorna = (numero/100) *porcetagem
     console.log(retorna)
 }
 console.log(percent(15,255))
 //2)Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
var arrayJuntos = (array1 , array2)=>{
      var array1 = ["Olá " , " Mundo"]
      var array2 = ["estou ", "estudando", " JavaScript!"]
      var array = array1.concat(array2)
      console.log (array.join ( "," ));
  }
 console.log (arrayJuntos());
 