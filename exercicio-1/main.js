function calculaValores() {
    // Captura os valores dos inputs
    var largura = document.querySelector('#largura').value;
    var comprimento = document.querySelector('#comprimento').value;
    var valor = document.querySelector('#valor').value;
  
    // Calcula a area
    var area = (largura * comprimento).toFixed(2);
    // Calcula o preço
    var preco = (parseFloat(area) * valor).toFixed(2);

    // Mostra os resultados
    document.getElementById('area').innerHTML = "A área deste terreno é de " + area + " m2" ;
    document.getElementById('preco').innerHTML ="E o seu preço é  R$ " + preco;
};