function calculaValores() {
    // Captura os valores dos inputs
    var primeiro = document.querySelector('#primeiro').value;
    var segundo = document.querySelector('#segundo').value;
    var terceiro = document.querySelector('#terceiro').value;
  
    // O menor numero
    var maior = Math.max(primeiro, segundo, terceiro);

    // Mostra os resultados
    document.getElementById('resultado').innerHTML = "A maior distância foi de " + maior + " metros." ;
   
};