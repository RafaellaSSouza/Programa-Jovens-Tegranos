function calculaValores() {
    // Captura palavra do input
    var capturaPalavra = document.querySelector('#palavra').value;
    // Deixa todas letras minusculas
    var palavra = capturaPalavra.toLowerCase();
    // Trnasforma a string num array
    var arrayPalavra = palavra.split('');
    // Inverte o array
    var reverso = arrayPalavra.reverse();
    // Transforma o array numa string
    var palavraReversa = reverso.join('');

    // Anula o campo de resultado
    document.getElementById('resultado').innerHTML = "";

    // Compara as strings  mostra o resultado
    if(palavra == palavraReversa) {
        document.getElementById('resultado').innerHTML = "É palíndroma";
    } else {
        document.getElementById('resultado').innerHTML = "Não é palíndroma";
    }




}