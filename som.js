function tocaP (idaudioelement) {
    document.querySelector (idaudioelement).play ();
}

const listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeteclas.length; contador++) {
    
    const tecla = listadeteclas[contador];
    
    const instrumento = tecla.classList[1];
    
    const idaudio =`#som_${instrumento}`;
    
    console.log(idaudio);
    
tecla.onclick = function () {
      tocaP(idaudio)    
    };
    
tecla.onkeydown = function (Evento) {
    if (Evento.code === 'Space' || Evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
};
    
tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
}