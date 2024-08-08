function calcular (){
    
    let str1 = document.getElementById("nota1").value
    let str2 = document.getElementById("nota2").value
    let str3 = document.getElementById("nota3").value
    let num1 = parseInt(str1)
    let num2 = parseInt(str2)
    let num3 = parseInt(str3)


    if (str1==="" || num1>30 ){
        warning("Nota de primer parcial en blanco ó mayor que 30")  
    } else if (str2==="" || num2>30 ) {
        warning("nota del segundo parcial en blanco ó mayor que 30")
    } else if (str3==="" || num3>40){
        warning("nota del tercer parcial en blanco ó mayor que 40")
    } else {
     
        let notaFinal=num1+num2+num3
        let mensaje=""
        if (notaFinal >= 0 && notaFinal <= 59) {
            mensaje = "Reprobado";
        } else if (notaFinal >= 60 && notaFinal <= 79) {
            mensaje = "Bueno";
        } else if (notaFinal >= 80 && notaFinal <= 89) {
            mensaje = "Muy Bueno";
        } else if (notaFinal >= 90 && notaFinal <= 100) {
            mensaje = "Sobresaliente";
        } 
        document.getElementById("notaFinal").value=notaFinal
        document.getElementById("mensajeFinal").value=mensaje
                 
    }
    }

function limpiar(){
        
    document.getElementById("nota1").value=""
    document.getElementById("nota2").value=""
    document.getElementById("nota3").value=""
    document.getElementById("notaFinal").value=""
    document.getElementById("mensajeFinal").value=""
    
    
}   

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Ups...",
        text: mensaje
        });
}