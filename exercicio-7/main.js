function calculaValores() {
    // Captura os valores dos inputs
    var distancia = document.querySelector('#distancia').value;
    var quantidade = document.querySelector('#quantidade').value;

    // Calcula o consumo
    var consumo = (distancia / quantidade).toFixed(3)

    // Mostra os resultados
    document.getElementById('resultado').innerHTML = "O consumo médio foi de " + consumo + " litros" ;
};