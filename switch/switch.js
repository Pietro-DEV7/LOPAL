    function meuSwitch(){

        let dia; 
        let data = new Date().getDay();

        switch(data) {
        case 0:
            dia = "Domingo";
            break;
        case 2:
        case 3:
        case 4:
            dia = "o meio da semana"
            break;
        case 6:
            dia = "Sábado"
        default:
            dia = "Hoje é dia da semana"
        }
        document.getElementById("demo").innerHTML = "Hoje é " + dia;
    }
