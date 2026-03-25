function ternario(){
    let dia;
    let data = new Date().getDay()

    dia = data == 0? "Domingo":
          data == 1? "segunda-feira":
          data == 2? "terça-feira":
          data == 3? "Quarta-Feira":
          data == 4? "Quinta-Feira":
          data == 5? "Sexta-feira":
          "Sábado";

    document.getElementById("demo").innerHTML = "Hoje é " + dia;
}