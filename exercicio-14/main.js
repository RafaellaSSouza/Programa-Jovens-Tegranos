function calculaValores() {
    // Captura os valores dos inputs
    var preco = document.querySelector('#preco').value;
    var quantidade = document.querySelector('#quantidade').value;
    var valor = document.querySelector('#valor').value;
  
    // Calcula o troco
    var troco = (valor - (preco * quantidade)).toFixed(2); 

    if (troco < 0) {
        troco = (-troco).toFixed(2)
        document.getElementById('troco').innerHTML = "Dinheiro insuficiente. Faltam R$: " + troco ;
    } else {
        document.getElementById('troco').innerHTML = "TROCO : R$ " + troco ;
    }
    
};