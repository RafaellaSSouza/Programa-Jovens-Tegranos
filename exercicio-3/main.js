function calculaValores() {
    // Captura os valores dos inputs
    var nome1 = document.querySelector('#nome1').value;
    var idade1 = document.querySelector('#idade1').value;
    var nome2 = document.querySelector('#nome2').value;
    var idade2 = document.querySelector('#idade2').value;
  
    // Calcula a media
    var media = (parseFloat(idade1) + parseFloat(idade2)) / 2;
   

    // Mostra os resultados
    document.getElementById('resultado').innerHTML = "A idade média de " + nome1 + " e " + nome2 + " é de " + media + " anos." ;
};