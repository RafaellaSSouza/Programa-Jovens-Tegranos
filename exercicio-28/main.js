function calculaValores () {
    var valores = document.querySelector("#valores").value;

    var arrayValores = valores.split(",");

    var arrayNumeros = arrayValores.map(Number);

    arrayNumeros.sort((a, b) => a - b);

    document.getElementById('resultado').innerHTML = ""

    document.getElementById('resultado').innerHTML = "Menor valor: " + arrayNumeros[0] + '<br>' + "Maior valor: " + arrayNumeros[arrayNumeros.length-1];

}