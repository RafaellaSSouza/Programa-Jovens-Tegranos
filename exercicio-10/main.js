function calculaValores() {
    // Captura os valores dos inputs
    var primeiro = document.querySelector('#primeiro').value;
    var segundo = document.querySelector('#segundo').value;
    var terceiro = document.querySelector('#terceiro').value;
  
    // O menor numero
    var menor = Math.min(primeiro, segundo, terceiro);

    // Mostra os resultados
    document.getElementById('resultado').innerHTML = "O menor número digitado é " + menor ;
   
};