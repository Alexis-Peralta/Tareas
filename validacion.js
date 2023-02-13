const datos = {
    rfc: ''
}

const rfc = document.querySelector('#rfc');
const formulario = document.querySelector('.formulario');

rfc.addEventListener('input', LeerTexto);

//EVENTO SUBMIT
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();


    //VALIDACION
    const {rfc} = datos;

if (rfc === '') {
    MostrarError('Esta vacio');

    return;
}

    console.log('Enviado');

});

function LeerTexto(e){

    datos[e.target.id] = e.target.value;

}

function MostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;

    console.log();
}
