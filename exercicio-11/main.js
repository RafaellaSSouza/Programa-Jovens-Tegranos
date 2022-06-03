function calculaValores() {
    // Captura os valores dos inputs
    var nota1 = document.querySelector('#nota1').value;
    var nota2 = document.querySelector('#nota2').value;
  
    // Calcula a nota
    var notaTotal = (parseFloat(nota1) + parseFloat(nota2)).toFixed(1);

    // Mostra os resultados
    if(notaTotal < 60) {
        document.getElementById('nota').innerHTML = "Nota final " + notaTotal;
        document.getElementById('resultado').innerHTML = "Resultado: REPROVADO"; 
    } else {
        document.getElementById('nota').innerHTML = "Nota final " + notaTotal;
        document.getElementById('resultado').innerHTML = "Resultado: APROVADO"; 
    }
   
};