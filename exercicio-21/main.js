function calculaValores() {
    // Captura o valor do input
    var x = document.querySelector('#x').value;

    // Limpa os resultados quando digitar um novo numero
    document.getElementById('resultado').innerHTML =""

    // Determina os pares e mostra o resultado
    for(var i = 2; i <= x; i++) {
        if(i%2==0) {
            document.getElementById('resultado').innerHTML += i + "<br>";
        }
    }
}