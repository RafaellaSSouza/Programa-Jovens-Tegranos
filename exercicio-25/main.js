function calculaValores() {
    var data = document.querySelector('#data').value;

    var formaArray = data.split("/", 2);

    var converteArray = formaArray.map(Number);

    document.getElementById('resultado').innerHTML = "";

    // Janeiro
    if(formaArray[1] == 1) {
        if(formaArray[0] >= 1 && formaArray[0] <= 20) {
            document.getElementById('resultado').innerHTML =  "Capricórnio"
        }
        if(formaArray[0] >= 21 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Aquário"
        }
    }
    // Fevereiro
    if(formaArray[1] == 2) {
        if(formaArray[0] >= 1 && formaArray[0] <= 20) {
            document.getElementById('resultado').innerHTML =  "Aquário"
        }
        if(formaArray[0] >= 21 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Peixes"
        }
    }
    // Março
    if(formaArray[1] == 3) {
        if(formaArray[0] >= 1 && formaArray[0] <= 20) {
            document.getElementById('resultado').innerHTML =  "Peixes"
        }
        if(formaArray[0] >= 21 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Áries"
        }
    }
    // Abril
    if(formaArray[1] == 4) {
        if(formaArray[0] >= 1 && formaArray[0] <= 20) {
            document.getElementById('resultado').innerHTML =  "Áries"
        }
        if(formaArray[0] >= 21 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Touro"
        }
    }
    // Maio
    if(formaArray[1] == 5) {
        if(formaArray[0] >= 1 && formaArray[0] <= 20) {
            document.getElementById('resultado').innerHTML =  "Touro"
        }
        if(formaArray[0] >= 21 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Gêmeos"
        }
    }
    // Junho
    if(formaArray[1] == 6) {
        if(formaArray[0] >= 1 && formaArray[0] <= 20) {
            document.getElementById('resultado').innerHTML =  "Gêmeos"
        }
        if(formaArray[0] >= 21 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Câncer"
        }
    }
    // Julho
    if(formaArray[1] == 7) {
        if(formaArray[0] >= 1 && formaArray[0] <= 22) {
            document.getElementById('resultado').innerHTML =  "Câncer"
        }
        if(formaArray[0] >= 23 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Leão"
        }
    }
    // Agosto
    if(formaArray[1] == 8) {
        if(formaArray[0] >= 1 && formaArray[0] <= 22) {
            document.getElementById('resultado').innerHTML =  "Leão"
        }
        if(formaArray[0] >= 23 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Virgem"
        }
    }
    // Setembro
    if(formaArray[1] == 9) {
        if(formaArray[0] >= 1 && formaArray[0] <= 22) {
            document.getElementById('resultado').innerHTML =  "Virgem"
        }
        if(formaArray[0] >= 23 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Libra"
        }
    }
    // Outubro
    if(formaArray[1] == 10) {
        if(formaArray[0] >= 1 && formaArray[0] <= 22) {
            document.getElementById('resultado').innerHTML =  "Libra"
        }
        if(formaArray[0] >= 23 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Escorpião"
        }
    }
    // Novembro
    if(formaArray[1] == 11) {
        if(formaArray[0] >= 1 && formaArray[0] <= 21) {
            document.getElementById('resultado').innerHTML =  "Escorpião"
        }
        if(formaArray[0] >= 22 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Sagitário"
        }
    }
    // Dezembro
    if(formaArray[1] == 12) {
        if(formaArray[0] >= 1 && formaArray[0] <= 21) {
            document.getElementById('resultado').innerHTML =  "Sagitário"
        }
        if(formaArray[0] >= 22 && formaArray[0] <= 31 ) {
            document.getElementById('resultado').innerHTML =  "Capricórnio"
        }
    }
}