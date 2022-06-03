function calculaValores() {
    //recebe o CNPJ digitado
    var cnpj = String(document.getElementById("cnpj").value);

    //armazena a somatoria
    var soma = 0;

    //laços do calculo da soma do primeiro DV
    for(i=0; i<=3; i++) {
        soma += cnpj[i] * (5-i);
    }
    for(i=4; i<=11; i++){
        soma += cnpj[i] * (13-i);
    }
    
    //valor do primeiro DV calculado
    var calcDV1 = 11 -(soma % 11);

    //zerando para calcular o segundo DV
    soma = 0;

    //laços para somar o segundo DV 
    for(i=0; i<=4; i++){
        soma += cnpj[i] * (6-i);
    }
    for(i=5; i<=12; i++){
        soma += cnpj[i] * (14-i);
    }

    //variaveis para validaçao
    var resto = soma % 11;
    var calcDV2 = 0;

    //condiçoes para obter valor do segundo DV
    if(resto<2){
        calcDV2 = 0;
    }else{
        calcDV2 = 11 - resto;
    }

    document.getElementById('resultado').innerHTML = ""

    //condiçoes de validaçao do CNPJ
    if(cnpj[12]==calcDV1 && cnpj[13]==calcDV2){
        document.getElementById('resultado').innerHTML = "Válido!"
    }else{
        document.getElementById('resultado').innerHTML = "Inválido!"
    }
}