function calculaValores() {
    // Captura os valores dos inputs
    var inicial = document.querySelector('#inicial').value;
    var final = document.querySelector('#final').value;

    // Soma inicia nulo
    var soma = 0;
    // Incrementa de um em um, desde o numero inicial ate o final, e acumula no soma
    for(var i = parseFloat(inicial); i <= parseFloat(final); i++) {
        soma += parseFloat(i);
    };
    // Mostra o resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + soma
}