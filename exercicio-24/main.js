function calculaValores() {
    // Captura os valores do input
    var valores = document.querySelector('#valores').value;

    // Forma um array com todos os valores
    var formaArray = valores.split(",", 5);

    // Converte o array de string para number
    var converteArray = formaArray.map(Number);

    // Ordena os numeros em ordem crescente
    converteArray.sort((a, b) => a - b);

    // Mostra o resultado
    document.getElementById('resultado').innerHTML = "Ordenados: " + converteArray;
}