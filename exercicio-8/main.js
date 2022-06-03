function calculaValores() {
    // Captura os valores dos inputs
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    var c = document.querySelector('#c').value;
  
    // Calcula a area do quadrado
    var quadrado = (Math.pow(a, 2)).toFixed(4);
    // Calcula a area do triangulo
    var triangulo = ((a * b) / 2).toFixed(4) ;
    // Calcula a area do trapezio
    var trapezio = (((parseFloat(a) + parseFloat(b)) * parseFloat(c)) / 2).toFixed(4);
    
    // Mostra os resultados
    document.getElementById('quadrado').innerHTML = "Área do quadrado = " + quadrado ;
    document.getElementById('triangulo').innerHTML ="Área do triângulo = " + triangulo;
    document.getElementById('trapezio').innerHTML ="Área do trapezio = " + trapezio;
};