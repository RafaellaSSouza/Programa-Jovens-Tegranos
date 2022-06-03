function calculaValores() {
    // Captura os valores dos inputs
    var glicose = document.querySelector('#glicose').value;
    
    // Filtra e mostra os resultados
    if (glicose <= 100) {
        document.getElementById("classificacao").innerHTML = "Classificação: NORMAL " 
    };
    if(glicose > 100 && glicose <= 140) {
        document.getElementById("classificacao").innerHTML = "Classificação: ELEVADO "
    };
    if(glicose > 140) {
        document.getElementById("classificacao").innerHTML = "Classificação: DIABETES "
    };

};