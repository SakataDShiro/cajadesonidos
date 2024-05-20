function playSound(idAudioTotal) {
    document.querySelector(idAudioTotal).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');  



for (let contador = 0; contador < listaDeTeclas.length; contador++) {
     
    const tecla = listaDeTeclas[contador];
    /*tecla es igual al index de cada una de las teclas en lista, indicado con el contador que empieza en 0*/
    const idAudio = tecla.classList[1];
    const idAudioCompuesto = `#sonido_${idAudio}`;
    
    tecla.onclick = function () {
        playSound (idAudioCompuesto);
    };
    console.log(idAudioCompuesto); 

    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space') {
            tecla.classList.add('activa');
        }
        ;
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    };
}
