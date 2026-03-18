function procedimento(){

  function inicio(){
  let resultado = calcular(3, 4)
  mensagem(frase = "O resultado de a² +b² é igual a "+ resultado);
  
  }
  function mensagem(frase){

  let linha = "-"; 
  let i = 0; 

    do{
         linha = linha + "-"
         i ++;
    }while(i < 50);
        
        alert( linha + "\n" + frase + "\n" + linha);
        
     }
     function calcular (a, b){
     return a * a + b * b
     }

    inicio()
    
}