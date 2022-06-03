function calculaValores() {
    // Captura os valores dos inputs
    var base = document.querySelector('#base').value;
    var altura = document.querySelector('#altura').value;
  
    // Calcula a area
    var area = (base * altura).toFixed(4);
    // Calcula o perimetro
    var perimetro = ((base * 2) + (altura * 2)).toFixed(4);
    // Calcula diagonal
    var diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2)).toFixed(4);

    // Mostra os resultados
    document.getElementById('area').innerHTML = "A área do retângulo é " + area + " m2" ;
    document.getElementById('perimetro').innerHTML ="O perimetro é " + perimetro + " m";
    document.getElementById('diagonal').innerHTML = "E o valor da sua diagonal é " + diagonal + " m" 
};