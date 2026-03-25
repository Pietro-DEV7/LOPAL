        function loop(){

        let texto = "";
        let i = 1;

        
            while (i < 10){
                texto += "O número é " + i + "<br>";
                i++; 
            }
            document.getElementById("demo").innerHTML = texto;
        }

     