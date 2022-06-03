function calculaValores() {
    // Captura a string do input
    var capturaPalavra = document.querySelector('#palavra').value;
    // Deixa todas letras minusculas
    var palavra = capturaPalavra.toLowerCase();
    // Declara variaveis
    var vogais = 0;
    var consoantes = 0;

    // Separa as letras numa string
    var palavraArray = palavra.split('')

    // Valida vogal e consoante
    for(var i = 0; i <= palavraArray.length-1; i++) {
        if(palavraArray[i] == "a" || palavraArray[i] == "e" || palavraArray[i] == "i" || palavraArray[i] == "o" || palavraArray[i] == "u" ) {
            vogais++;
        } else {
            consoantes++;
        }
    }

    // Limpa o campo resultado
    document.getElementById('resultado').innerHTML = "";
    // Mostra o resultado 
    document.getElementById('resultado').innerHTML = "Vogais: " + vogais + '<br>' + "Consoantes: " + consoantes;
}