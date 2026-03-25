function lacofor(){
    
    let texto = "";
    
    for (let i= 0; i < 10; i++){
        texto += "O número é " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = texto;
}
