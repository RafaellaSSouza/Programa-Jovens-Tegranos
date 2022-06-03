function calculaValores() {
    // Captura os valores dos inputs
    var nome = document.querySelector('#nome').value;
    var valor = document.querySelector('#valor').value;
    var horas = document.querySelector('#horas').value;
  
    // Calcula o pagamento
    var pagamento = (valor * horas).toFixed(2);

    // Mostra os resultados
    document.getElementById('resultado').innerHTML = "O pagamento para " + nome + " deve ser R$ " + pagamento ;
};