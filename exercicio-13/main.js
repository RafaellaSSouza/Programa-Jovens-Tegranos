function calculaValores() {
    // Captura os valores dos inputs
    var minutos = document.querySelector('#minutos').value;
    
    // Calcula e filtra os minutos
    if (minutos > 100) {
        var valor = ((parseFloat(minutos) - 100) * 2 + 50).toFixed(2);
    } else { 
        var valor = (50).toFixed(2);
    };

    // Mostra o resultado
    document.getElementById("valor").innerHTML = "Valor a pagar: R$ " + valor
       
    



};