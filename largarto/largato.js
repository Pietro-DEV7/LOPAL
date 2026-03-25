async function largata(){

    let largata = "()()()()()()()(00)";
    let encolhida= "( )( )( )( )( )( )( )(00)"
    let espaco = "  ";

    function sleep(ms){
      return new Promise( resolve => setTimeout (resolve, ms));
    
    }

    for(let i = 0; i < 30; i++){
        largata = espaco + largata;
        encolhida = espaco + encolhida;
        
        console.log(i % 2 == 0? largata: encolhida)
        await sleep (1000);
        console.clear();
        
    }
}       
