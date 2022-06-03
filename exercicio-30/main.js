function calculaValores() {
    var numero = document.querySelector("#numero").value;

    var resultado = "";

    var unidade = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];


    switch (numero) {
        case "1":
            resultado = "Um"
            break;
        case "2":
            resultado = "Dois" 
            break;
        case "3":
            resultado = "Três" 
            break;
        case "4":
            resultado = "Quatro" 
            break;
        case "5":
            resultado = "Cinco" 
            break;
        case "6":
            resultado = "Seis"
            break;
        case "7":
            resultado = "Sete"
            break;
        case "8":
            resultado = "Oito"
            break;
        case "9":
            resultado = "Nove"
            break;
        case "10":
            resultado = "Dez"
            break;
        case "11":
            resultado = "Onze"
            break;
        case "12":
            resultado = "Doze"
            break;
        case "13":
            resultado = "Treze"
            break;
        case "14":
            resultado = "Quatorze"
            break;
        case "15":
            resultado = "Dez"
            break;
        case "16":
            resultado = "Dezesseis"
            break;
        case "17":
            resultado = "Dezesete"
            break;
        case "18":
            resultado = "Dezoito"
            break;
        case "19":
            resultado = "Dezenove"
            break;
        default:
            break;
    } 

    if(numero >= 20) {
        if(numero==20) {resultado = "Vinte"}
        else {
            var arraynumero = numero.split('');
            resultado = "Vinte e " + unidade[arraynumero[arraynumero.length-1]];}  
    };

    if(numero >= 30) {
        if(numero==30) {resultado = "Trinta"}
        else {
            var arraynumero = numero.split('');
            resultado = "Trinta e " + unidade[arraynumero[arraynumero.length-1]]};
    };
    if(numero >= 40) {
        if(numero==40) {resultado = "Quarenta"}
        else {
            var arraynumero = numero.split('');
            resultado = "Quarenta e " + unidade[arraynumero[arraynumero.length-1]];} 
    };
    if(numero >= 50) {
        if(numero==50) {resultado = "Cinquenta"}
        else{
            var arraynumero = numero.split('');
            resultado = "Cinquenta e " + unidade[arraynumero[arraynumero.length-1]];};
    };
    if(numero >= 60) {
        if(numero==60) {resultado = "Sessenta"}
        else {
            var arraynumero = numero.split('');
            resultado = "Sessenta e " + unidade[arraynumero[arraynumero.length-1]];}; 
    };
    if(numero >= 70) {
        if(numero==70) {resultado = "Setenta"}
        else {
            var arraynumero = numero.split('');
            resultado = "Setenta e " + unidade[arraynumero[arraynumero.length-1]];}
    };
    if(numero >= 80) {
        if(numero==80) {resultado = "Oitenta"}
        else{
            var arraynumero = numero.split('');
            resultado = "Oitenta e " + unidade[arraynumero[arraynumero.length-1]];}
    };
    if(numero >= 90) {
        if(numero==90) {resultado = "Noventa"}
        else {
            var arraynumero = numero.split('');
            resultado = "Noventa e " + unidade[arraynumero[arraynumero.length-1]];} 
    };

    document.getElementById('resultado').innerHTML = resultado
}