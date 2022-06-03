function calculaValores() {
    // Captura os valores dos inputs
    var primeiroNumero = document.querySelector('#primeiroNumero').value;
    var segundoNumero = document.querySelector('#segundoNumero').value;

    // Primeira condição
    if(parseInt(primeiroNumero) > parseInt(segundoNumero)) {
        var resultado = parseInt(primeiroNumero) / parseInt(segundoNumero);
        // Mostra resultado
        if(Number.isInteger(resultado)) {
            document.getElementById('resultado').innerHTML = "São múltiplos."
        } else {
            document.getElementById('resultado').innerHTML = "Não são múltiplos."
        };
    // Segunda condição 
    } else {
        var resultado = parseInt(segundoNumero) / parseInt(primeiroNumero);
        // Mostra resultado
        if(Number.isInteger(resultado)) {
            document.getElementById('resultado').innerHTML = "São múltiplos."
        } else {
            document.getElementById('resultado').innerHTML = "Não são múltiplos."       
        };
    };
};
