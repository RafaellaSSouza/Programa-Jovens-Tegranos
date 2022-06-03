function calculaValores() {
    // Captura os valores dos inputs
    var escala = document.querySelector('#escala').value;
    var temperatura = document.querySelector('#temperatura').value;

    // Arrays para comparação
    var comparaC = ['c', 'C'];
    var comparaF = ['f', 'F'];

    // Verificar se tem a escala no array
    var validaC = comparaC.indexOf(escala);
    var validaF = comparaF.indexOf(escala)

    // Converte celcius-fahrenheit, mostra resultado
    if(validaC != -1) {
        var fahrenheit = (parseFloat(temperatura) * 1.8 + 32).toFixed(2);
        document.getElementById('resultado').innerHTML = 'Temperatura equivalente em Fahrenheit: ' + fahrenheit
    } else {
        document.getElementById('resultado').innerHTML = 'Escala não informada'
    };

    // Converte fahrenheit-celcius, mostra resultado
    if(validaF != -1) {
        var celcius = ((parseFloat(temperatura) - 32) / 1.8).toFixed(2);
        document.getElementById('resultado').innerHTML = 'Temperatura equivalente em Celsius: ' + celcius
    };
    
}