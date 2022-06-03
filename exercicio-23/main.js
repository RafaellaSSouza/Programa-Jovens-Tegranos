function calculaValores() {
    // Captura o valor do input
    var x = document.querySelector('#x').value;
    var y = document.querySelector('#y').value;


    // Limpa os resultados quando digitar um novo numero
    document.getElementById('resultado').innerHTML ="";

    var soma = 0;
    var total = 0;
    
    // Determina os pares e mostra o resultado
    for(var i = parseFloat(x); i < parseFloat(y); i++) {
        if(i%2===1) {
            // Se o primeiro número digitado for impar, nao entra na soma
            if(parseFloat(x)%2===1) {
                soma += i;
                total = soma - parseFloat(x);
                document.getElementById('resultado').innerHTML = "SOMA DOS ÍMPARES = " + total;
            } else {
                soma += i;
                document.getElementById('resultado').innerHTML = "SOMA DOS ÍMPARES = " + soma;
            }
        }
    }
}