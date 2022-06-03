function calculaValores() {
    // Captura valor do input
    var salario = document.querySelector('#salario').value;

    // Condiçoes
    if(salario < 1000) {
        var novoSalario = (parseFloat(salario) + (salario * (20/100))).toFixed(2);
        var aumento = (parseFloat(novoSalario) - parseFloat(salario)).toFixed(2);
        var porcentagem = '20%'

        document.getElementById('novoSalario').innerHTML = 'Novo salário: R$ ' + novoSalario;
        document.getElementById('aumento').innerHTML = 'Aumento de: R$ ' + aumento;
        document.getElementById('porcentagem').innerHTML = 'Porcentagem: ' + porcentagem;
    };

    if(salario >= 1000 && salario < 3000) {
        var novoSalario = (parseFloat(salario) + (salario * (15/100))).toFixed(2);
        var aumento = (parseFloat(novoSalario) - parseFloat(salario)).toFixed(2);
        var porcentagem = '15%'

        document.getElementById('novoSalario').innerHTML = 'Novo salário: R$ ' + novoSalario;
        document.getElementById('aumento').innerHTML = 'Aumento de: R$ ' + aumento;
        document.getElementById('porcentagem').innerHTML = 'Porcentagem: ' + porcentagem;
    };

    if(salario >= 3000 && salario < 8000) {
        var novoSalario = (parseFloat(salario) + (salario * (10/100))).toFixed(2);
        var aumento = (parseFloat(novoSalario) - parseFloat(salario)).toFixed(2);
        var porcentagem = '10%'

        document.getElementById('novoSalario').innerHTML = 'Novo salário: R$ ' + novoSalario;
        document.getElementById('aumento').innerHTML = 'Aumento de: R$ ' + aumento;
        document.getElementById('porcentagem').innerHTML = 'Porcentagem: ' + porcentagem;
    };

    if(salario >= 8000) {
        var novoSalario = (parseFloat(salario) + (salario * (5/100))).toFixed(2);
        var aumento = (parseFloat(novoSalario) - parseFloat(salario)).toFixed(2);
        var porcentagem = '05%'

        document.getElementById('novoSalario').innerHTML = 'Novo salário: R$ ' + novoSalario;
        document.getElementById('aumento').innerHTML = 'Aumento de: R$ ' + aumento;
        document.getElementById('porcentagem').innerHTML = 'Porcentagem: ' + porcentagem;
    };

}