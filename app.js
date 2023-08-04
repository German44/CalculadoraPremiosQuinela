let recalculo = false;

while (recalculo != true) {

    let diaDeSemana = prompt('Es Dia de Semana?');

    if (diaDeSemana === 'si') {
        alert('Te Calculare el premio a la Cabeza como dia de semana');

        let apuesta = prompt('Cuanto dinero aposto?');
        let numeroCifra = prompt('Cuantos cifras de apuesta?');

        cifra = (numeroCifra) => {
            switch (numeroCifra) {
                case '1':
                    alert('Tu premio es ' + (apuesta * 7));
                    break;
                case '2':
                    alert('Tu premio es ' + (apuesta * 70));
                    break;
                case '3':
                    alert('Tu premio es ' + (apuesta * 600));
                    break;
                default:
                    alert('Tu premio es 0');
            }
        }

        cifra(numeroCifra);

    } else if (diaDeSemana === 'no') {
        alert('Te Calculare el premio a la Cabeza como dia Sabado');

        let apuesta = prompt('Cuanto dinero aposto?');
        let numeroCifra = prompt('Cuantos cifras de apuesta?');

        function cifra(numeroCifra) {
            switch (numeroCifra) {
                case '1':
                    return alert('Tu premio es ' + (apuesta * 7));

                case '2':
                    return alert('Tu premio es ' + (apuesta * 70));

                case '3':
                    return alert('Tu premio es ' + (apuesta * 700));

                default:
                    alert('Tu premio es 0');
            }
        }

        cifra(numeroCifra);

    } else {
        alert('por favor ingrese si o no');
    }

    pregunta = prompt('Desea hacer otro calculo?')

    if (pregunta === 'si') {
        recalculo = false;
    } else if (pregunta === 'no') {
        alert('chau')
        recalculo = true;
    };
}




