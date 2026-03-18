function idade() {
    let idade;
    
    do{
        idade = parseInt(prompt("Digite sua idade (valores aceitos de 5 a 150): "));
}  while ( idade <5 || idade >150 || Number.isNaN(idade) );
   alert("Idade válida:");   

} 