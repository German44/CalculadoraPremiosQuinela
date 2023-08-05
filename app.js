let recalculo = false;

cifraEnSemana = (numeroCifra, apuesta) => {
    switch (numeroCifra) {
        case '1':
            alert('Tu premio a primera es $' + (apuesta * 7));
            break;
        case '2':
            alert('Tu premio a primera es $' + (apuesta * 70));
            break;
        case '3':
            alert('Tu premio a primera es $' + (apuesta * 600));
            break;
        default:
            alert('Coloca una cifra valida');
    }
}

function cifraSabado(numeroCifra, apuesta) {
    switch (numeroCifra) {
        case '1':
            return alert('Tu premio a primera es $' + (apuesta * 7));

        case '2':
            return alert('Tu premio a primera es $' + (apuesta * 70));

        case '3':
            return alert('Tu premio a primera es $' + (apuesta * 700));

        default:
            alert('Coloca una cifra valida');
    }
}

while (recalculo != true) {

    let diaDeSemana = prompt('Es Dia de Semana?[si o no]');

    if (diaDeSemana === 'si') {
        alert('Te Calculare el premio a la Cabeza como dia de semana');

        let apuesta = prompt('Cuanto dinero aposto?[1 a infinito]');
        let numeroCifra = prompt('Cuantos cifras de apuesta?[1, 2 , 3]');


        cifraEnSemana(numeroCifra, apuesta);

    } else if (diaDeSemana === 'no') {
        alert('Te Calculare el premio a la Cabeza como dia Sabado');

        let apuesta = prompt('Cuanto dinero aposto?');
        let numeroCifra = prompt('Cuantos cifras de apuesta?');


        cifraSabado(numeroCifra, apuesta);

    } else {
        alert('por favor ingrese si o no');
    }

    pregunta = prompt('Desea hacer otro calculo?[si o no]')

    if (pregunta === 'si') {
        recalculo = false;
    } else if (pregunta === 'no') {
        alert('Chau, Buena suerte')
        recalculo = true;
    };
}




