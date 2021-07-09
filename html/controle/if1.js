function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function soForVerdadeEuFalo(valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

soForVerdadeEuFalo();
soForVerdadeEuFalo(null);
soForVerdadeEuFalo(undefined);
soForVerdadeEuFalo(NaN);
soForVerdadeEuFalo('');
soForVerdadeEuFalo(0);

soForVerdadeEuFalo(-1);
soForVerdadeEuFalo(' ');
soForVerdadeEuFalo('?');
soForVerdadeEuFalo([]);
soForVerdadeEuFalo([1, 2]);
soForVerdadeEuFalo({});