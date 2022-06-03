function calculaValores() {
    // Captura os valores dos inputs
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    var c = document.querySelector('#c').value;
  
    // Calcula delta
    var delta = Math.pow(b, 2) - 4 * parseFloat(a) * parseFloat(c);

    // Calcula o x1
    var x1 = ((- parseFloat(b) + Math.sqrt(delta)) / (2 * parseFloat(a))).toFixed(4) ;

    // Calcula o x2
    var x2 = ((- parseFloat(b) - Math.sqrt(delta)) / (2 * parseFloat(a))).toFixed(4);

    // Mostra os resultados
    if(delta < 0) {
        document.getElementById('x1').innerHTML = "Esta equação não possui raízes reais";
        document.getElementById('x2').innerHTML = "";
    }else { 
        document.getElementById('x1').innerHTML = "X1 = " + x1;
        document.getElementById('x2').innerHTML = "X2 = " + x2;
    }
       
    



};