function calculaValores() {
    // Captura o valor do input
    var valor = document.querySelector('#valor').value;

    // Muda o titulo
    document.getElementById('titulo').innerHTML = "Tabuada do " + valor;

    // Limpa os resultados quando digitar um novo valor
    document.getElementById('resultado').innerHTML = "";

    // Calcula a tabuada e mostra o resultado
    for(var i = 1; i <= 10; i++ ) {
        document.getElementById('resultado').innerHTML += valor + 'x' + i + ' = ' + valor*i + "<br>";

    }




}