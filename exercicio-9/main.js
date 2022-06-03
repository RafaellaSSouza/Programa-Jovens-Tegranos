function calculaValores() {
    // Captura os valores dos inputs
    var capturaSegundos = document.querySelector('#segundos').value;
  
    // Calcula as horas (1 hora = 3600s)
    var horas = Math.floor(capturaSegundos / 3600);
    
    // Calcula os minutos
    var minutos = Math.floor((capturaSegundos - (horas * 3600)) / 60) ;

    // Calcula os segundos
    var segundos = Math.floor(capturaSegundos - (horas * 3600) - (minutos * 60));
    
    // Mostra os resultados
    document.getElementById('resultado').innerHTML = horas + ":" + minutos + ":" + segundos;
    ;
};