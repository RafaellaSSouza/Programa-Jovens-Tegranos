function calculaValores() {
    // Captura os valores dos inputs
    var raio = document.querySelector('#raio').value;
  
    // Calcula a area
    var area = (3.14159 * Math.pow(raio, 2)).toFixed(3)
    

    // Mostra os resultados
    document.getElementById('area').innerHTML = "A área do círculo é " + area ;
};